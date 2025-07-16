import CampersList from "../components/CampersList/CampersList";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import SidebarFilters from "../components/SidebarFilters/SidebarFilters";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <SidebarFilters
      // filters={filters}
      // onChange={handleFilterChange}
      // onSearch={handleSearch}
      />

      <div className={css.mainSection}>
        <CampersList
        // campers={campers} loading={loading}
        />
        <LoadMoreButton
        // onClick={handleLoadMore}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
