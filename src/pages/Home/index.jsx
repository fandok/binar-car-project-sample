import Navbar from "../../components/Navbar";
import "./style.css";

import imgService from "../../assets/home/img_service.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Carousel } from "reactstrap";
import Testimonial from "./components/Testimonial";

const Home = () => {
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (state?.id) {
      document.getElementById(state.id).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="main">
      Home
      <Navbar />
      <Testimonial />
    </div>
  );
};

export default Home;
