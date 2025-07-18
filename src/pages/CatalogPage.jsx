import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../redux/campers/selectors";
import { fetchCampersThunk } from "../redux/campers/operations";
// import { resetCampers } from "../redux/campers/slice";
import CampersList from "../components/CampersList/CampersList";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import css from "./CatalogPage.module.css";

const LIMIT = 4;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
  });
  const [page, setPage] = useState(1);

  // draft для чекбоксів та радіо
  const [equipmentDraft, setEquipmentDraft] = useState([]);
  const [vehicleTypeDraft, setVehicleTypeDraft] = useState("");

  // useRef для першого рендера (щоб уникнути дубляжу запиту)
  const isFirstLoad = useRef(true);

  const VEHICLE_TYPE_MAP = {
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  // формування params для бекенду
  const makeParams = () => {
    const params = {};

    // Equipment — перетворюємо масив у потрібні ключі
    (equipmentDraft || []).forEach((key) => {
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
  };

  // Запит на бек при зміні filters/page (location — debounce, чекбокси/радіо — тільки після сабміту)
  useEffect(() => {
    // захист від дубляжу запиту на першому рендері
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      dispatch(fetchCampersThunk(makeParams()));
      return;
    }
    dispatch(fetchCampersThunk(makeParams()));
    // eslint-disable-next-line
  }, [page, filters]);

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
      />
      <div className={css.mainSection}>
        <CampersList
          campers={campers.items || []}
          isLoading={isLoading}
          error={error}
        />
        {(campers.items?.length || 0) < (campers.total || 0) && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

// {
//   "total": 23,
//     "items": [
//       {
//         "id": "1",
//         "name": "Road Bear C 23-25",
//         "price": 10000,
//         "rating": 4.5,
//         "location": "Ukraine, Kyiv",
//         "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//         "form": "alcove",
//         "length": "7.3m",
//         "width": "2.65m",
//         "height": "3.65m",
//         "tank": "208l",
//         "consumption": "30l/100km",
//         "transmission": "automatic",
//         "engine": "diesel",
//         "AC": true,
//         "bathroom": true,
//         "kitchen": false,
//         "TV": true,
//         "radio": true,
//         "refrigerator": false,
//         "microwave": true,
//         "gas": false,
//         "water": true,
//         "gallery": [
//           {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//           },
//           {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//           },
//           {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//           }
//         ],
//         "reviews": [
//           {
//             "reviewer_name": "Alice",
//             "reviewer_rating": 5,
//             "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//           },
//           {
//             "reviewer_name": "Bob",
//             "reviewer_rating": 4,
//             "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//           }
//         ]
//       },
//       // решта
//     ]
// }

//         "transmission", "engine", "AC", "bathroom", "kitchen", "TV", "refrigerator", "microwave", "gas"
