import css from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
