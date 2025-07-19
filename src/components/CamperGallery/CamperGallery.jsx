import css from "./CamperGallery.module.css";

const CamperGallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0)
    return <div className={css.noGallery}>No images available</div>;
  return (
    <div className={css.gallery}>
      {gallery.map((img, i) => (
        <img
          key={i}
          src={img.thumb || img}
          alt={`Camper photo ${i + 1}`}
          className={css.image}
        />
      ))}
    </div>
  );
};

export default CamperGallery;
