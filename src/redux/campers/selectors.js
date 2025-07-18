export const selectCampers = (state) => state.campers;
export const selectCurrentCamper = (state) => state.campers.current;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
