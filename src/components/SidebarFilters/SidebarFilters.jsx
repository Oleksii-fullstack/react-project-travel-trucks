import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { ImMap2 } from "react-icons/im";
import EquipmentFilterInputs from "./EquipmentFilterInputs";
import VehicleTypeFilterInputs from "./VehicleTypeFilterInputs";
import css from "./SidebarFilters.module.css";

const SidebarFilters = ({
  filters,
  equipmentDraft,
  onEquipmentDraftChange,
  vehicleTypeDraft,
  onVehicleTypeDraftChange,
  onFilterChange,
  onSubmit,
}) => {
  // Debounced location live-search
  const [locationDraft, setLocationDraft] = useState(filters.location || "");
  const [debouncedLocation] = useDebounce(locationDraft, 800);

  // Якщо debouncedLocation змінився — оновлюємо фільтр
  useEffect(() => {
    if (debouncedLocation !== filters.location) {
      onFilterChange({ ...filters, location: debouncedLocation });
    }
    // eslint-disable-next-line
  }, [debouncedLocation]);

  // Якщо ззовні прийшли нові filters.location — оновити draft
  useEffect(() => {
    setLocationDraft(filters.location || "");
  }, [filters.location]);

  return (
    <aside className={css.sidebar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {/* Location */}
        <div className={css.locationFilterBlock}>
          <label htmlFor="location" className={css.locationLabel}>
            Location
          </label>
          <div className={css.inputWithIcon}>
            <ImMap2 className={css.inputIcon} />
            <input
              id="location"
              type="text"
              className={css.input}
              placeholder="City, Country"
              value={locationDraft}
              onChange={(e) => setLocationDraft(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <p className={css.filtersTitle}>Filters</p>
        {/* Vehicle equipment */}
        <div className={css.filterBlock}>
          <p className={css.label}>Vehicle equipment</p>
          <div className={css.divider}></div>
          <EquipmentFilterInputs
            value={equipmentDraft}
            onChange={onEquipmentDraftChange}
          />
        </div>
        {/* Vehicle type */}
        <div className={css.filterBlock}>
          <p className={css.label}>Vehicle type</p>
          <div className={css.divider}></div>
          <VehicleTypeFilterInputs
            value={vehicleTypeDraft}
            onChange={onVehicleTypeDraftChange}
          />
        </div>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </aside>
  );
};

export default SidebarFilters;
