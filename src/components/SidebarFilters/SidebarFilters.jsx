import { ImMap2 } from "react-icons/im";
import { LuWind } from "react-icons/lu";
import { BsDiagram3, BsCupHot, BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { PiShower } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import css from "./SidebarFilters.module.css";

const SidebarFilters = () => {
  return (
    <aside className={css.sidebar}>
      <form>
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
              placeholder="Kyiv, Ukraine"
            />
          </div>
        </div>

        <p className={css.filtersTitle}>Filters</p>

        {/* Vehicle equipment */}
        <div className={css.filterBlock}>
          <p className={css.label}>Vehicle equipment</p>
          <div className={css.divider}></div>
          <div className={css.checkboxGroup}>
            <label className={css.checkboxTile}>
              <input type="checkbox" name="equipment" value="AC" />
              <span className={css.checkboxBox}>
                <LuWind className={css.icon} />
                <span className={css.text}>AC</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="checkbox" name="equipment" value="Automatic" />
              <span className={css.checkboxBox}>
                <BsDiagram3 className={css.icon} />
                <span className={css.text}>Automatic</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="checkbox" name="equipment" value="Kitchen" />
              <span className={css.checkboxBox}>
                <BsCupHot className={css.icon} />
                <span className={css.text}>Kitchen</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="checkbox" name="equipment" value="TV" />
              <span className={css.checkboxBox}>
                <HiOutlineTv className={css.icon} />
                <span className={css.text}>TV</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="checkbox" name="equipment" value="Bathroom" />
              <span className={css.checkboxBox}>
                <PiShower className={css.icon} />
                <span className={css.text}>Bathroom</span>
              </span>
            </label>
          </div>
        </div>
        {/* Vehicle type */}
        <div className={css.filterBlock}>
          <p className={css.label}>Vehicle type</p>
          <div className={css.divider}></div>
          <div className={css.checkboxGroup}>
            <label className={css.checkboxTile}>
              <input type="radio" name="vehicleType" value="Van" />
              <span className={css.checkboxBox}>
                <BsGrid1X2 className={css.icon} />
                <span className={css.text}>Van</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="radio" name="vehicleType" value="Fully Integrated" />
              <span className={css.checkboxBox}>
                <CiGrid41 className={css.icon} />
                <span className={css.text}>Fully Integrated</span>
              </span>
            </label>
            <label className={css.checkboxTile}>
              <input type="radio" name="vehicleType" value="Alcove" />
              <span className={css.checkboxBox}>
                <BsGrid3X3Gap className={css.icon} />
                <span className={css.text}>Alcove</span>
              </span>
            </label>
          </div>
        </div>
        {/* Button */}
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </aside>
  );
};

export default SidebarFilters;
