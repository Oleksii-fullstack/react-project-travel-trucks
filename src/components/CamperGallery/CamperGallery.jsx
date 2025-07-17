import css from "./CamperGallery.module.css";

const images = [
  "/src/assets/camp1.jpg",
  "/src/assets/camp2.jpg",
  "/src/assets/camp3.jpg",
  "/src/assets/camp4.jpg",
];

const CamperGallery = () => {
  return (
    <div className={css.gallery}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Camper photo ${i + 1}`}
          className={css.image}
        />
      ))}
    </div>
  );
};

export default CamperGallery;
