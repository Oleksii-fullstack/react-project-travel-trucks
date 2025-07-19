/**
 * Фільтрує campers масив по filters.
 * @param {Array} campers - масив campers (будь-яких)
 * @param {Object} filters - { location, equipment, vehicleType }
 * @returns {Array} - відфільтрований масив campers
 **/
export function filterCampers(campers, filters) {
  if (!Array.isArray(campers)) return [];

  return campers.filter((camper) => {
    // Фільтр по location (якщо вказано)
    if (
      filters.location &&
      camper.location &&
      !camper.location
        .toLowerCase()
        .includes(filters.location.trim().toLowerCase())
    ) {
      return false;
    }

    // Vehicle type
    if (
      filters.vehicleType &&
      camper.form &&
      camper.form !== filters.vehicleType
    ) {
      return false;
    }

    // Equipment: для кожної фічі — camper має містити цю опцію
    if (filters.equipment && filters.equipment.length > 0) {
      for (let key of filters.equipment) {
        if (key === "AC" && !camper.AC) return false;
        if (
          key === "transmission-automatic" &&
          camper.transmission !== "automatic"
        )
          return false;
        if (key === "kitchen" && !camper.kitchen) return false;
        if (key === "TV" && !camper.TV) return false;
        if (key === "bathroom" && !camper.bathroom) return false;
        if (key === "microwave" && !camper.microwave) return false;
        if (key === "refrigerator" && !camper.refrigerator) return false;
        if (key === "gas" && !camper.gas) return false;
        if (key === "water" && !camper.water) return false;
      }
    }

    return true;
  });
}
