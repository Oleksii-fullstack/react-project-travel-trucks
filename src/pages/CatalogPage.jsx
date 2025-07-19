import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../redux/campers/selectors";
import { fetchCampersThunk } from "../redux/campers/operations";
import { resetCampers } from "../redux/campers/slice";
import { filterCampers } from "../utils/filterCampers";
import CampersList from "../components/CampersList/CampersList";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import css from "./CatalogPage.module.css";

const LIMIT = 4;

const VEHICLE_TYPE_MAP = {
  Van: "panelTruck",
  "Fully Integrated": "fullyIntegrated",
  Alcove: "alcove",
};

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const favorites = useSelector((state) => state.favorites.items);
  const campersCache = useSelector((state) => state.campers.cache);
  const hasRequested = useSelector((state) => state.campers.hasRequested);
  const notFound = useSelector((state) => state.campers.notFound);

  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
  });
  const [page, setPage] = useState(1);

  // draft для чекбоксів та радіо
  const [equipmentDraft, setEquipmentDraft] = useState([]);
  const [vehicleTypeDraft, setVehicleTypeDraft] = useState("");

  // toggle для favorites
  const [showFavorites, setShowFavorites] = useState(false);

  // useRef для першого рендера (щоб уникнути дубляжу запиту)
  const isFirstLoad = useRef(true);

  // формування params для бекенду
  const makeParams = () => {
    const params = {};

    // Equipment — перетворюємо масив у потрібні ключі
    (filters.equipment || []).forEach((key) => {
      if (key === "AC") params.AC = true;
      if (key === "transmission-automatic") params.transmission = "automatic";
      if (key === "kitchen") params.kitchen = true;
      if (key === "TV") params.TV = true;
      if (key === "bathroom") params.bathroom = true;
      if (key === "microwave") params.microwave = true;
      if (key === "refrigerator") params.refrigerator = true;
      if (key === "gas") params.gas = true;
      if (key === "water") params.water = true;
    });

    if (filters.vehicleType)
      params.form = VEHICLE_TYPE_MAP[filters.vehicleType];

    if (filters.location) params.location = filters.location;

    params.page = page;
    params.limit = LIMIT;

    return params;
  };

  // Сабміт тільки для чекбоксів/радіо — застосовуємо драфти до основного state
  const handleSubmit = () => {
    setFilters((prev) => ({
      ...prev,
      equipment: [...equipmentDraft],
      vehicleType: vehicleTypeDraft,
    }));
    setPage(1);
    dispatch(resetCampers());
  };

  useEffect(() => {
    if (!showFavorites) {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        dispatch(fetchCampersThunk(makeParams()));
        return;
      }
      dispatch(fetchCampersThunk(makeParams()));
    }
    // eslint-disable-next-line
  }, [page, filters, showFavorites]);

  // Фільтрація favorites
  const favoritesCampers = favorites
    .map((id) => campersCache[id])
    .filter(Boolean);

  const visibleCampers = showFavorites
    ? filterCampers(favoritesCampers, {
        ...filters,
        vehicleType:
          VEHICLE_TYPE_MAP[filters.vehicleType] || filters.vehicleType,
      })
    : campers.items || [];

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.catalogPage}>
      <SidebarFilters
        filters={filters}
        equipmentDraft={equipmentDraft}
        onEquipmentDraftChange={setEquipmentDraft}
        vehicleTypeDraft={vehicleTypeDraft}
        onVehicleTypeDraftChange={setVehicleTypeDraft}
        onFilterChange={setFilters}
        onSubmit={handleSubmit}
        showFavorites={showFavorites}
        onShowFavoritesChange={setShowFavorites}
      />

      <div className={css.mainSection}>
        <CampersList
          campers={visibleCampers}
          isLoading={isLoading}
          error={error}
          hasRequested={hasRequested}
          notFound={notFound}
        />
        {showFavorites
          ? null // Якщо в режимі favorites — LoadMore не потрібен
          : (visibleCampers.length || 0) < (campers.total || 0) && (
              <LoadMoreButton onClick={handleLoadMore} />
            )}
      </div>
    </div>
  );
};

export default CatalogPage;
