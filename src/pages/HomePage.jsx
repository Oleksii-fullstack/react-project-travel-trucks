import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <img src="#" alt="" />
      <button type="button" onClick={handleClick}>
        View Now
      </button>
    </div>
  );
};

export default HomePage;
