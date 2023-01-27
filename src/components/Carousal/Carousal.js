import React, { useState } from "react";
import "./Carousal.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Carousal() {
  const data = [
    {
      id: 1,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
      name: "Occassion",
    },
    {
      id: 2,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
      name: "Trip",
    },
    {
      id: 3,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
      name: "Sunset",
    },
  ];
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0].image);
  function showNextImg() {
    if (index === data.length-1) {
    setCurrentImage(data[0].image)
    setIndex(0);
      return;
    }
    setCurrentImage(data[index + 1].image);
    setIndex(index + 1);
  }
  function showPrevImg() {
    if (index === 0){
      setCurrentImage(data[data.length -1].image)
    setIndex(data.length-1);
      return;
    }
    setCurrentImage(data[index - 1].image);
    setIndex(index - 1);
  }
  return (
    <div className="Carousal">
      {/* <button onClick={showPrevImg}>Prev</button>

      <img className="Carousal_image" src={currentImage} alt="error" />

      <button onClick={showNextImg}>Next</button> */}

      <div className="Carousel_arrow" onClick={showPrevImg}>
        <ArrowBackIosNewIcon />
      </div>

      <img className="Carousal_images" src={currentImage} alt="Error" />

      <div className="Carousel_arrow" onClick={showNextImg}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
export default Carousal;
