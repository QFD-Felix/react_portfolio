import "./works.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import data from "../../experience_data";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1):
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <div className="works" id = "works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) =>(
          <div className="container">
            <div className="item">
            <h1>{d.title}</h1>
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {<d.icon className="icon"/>}
                  </div>
                  <h2>{d.job_title}</h2>
                  <ul>
                    {d.points.map((l) => (<li>{l.line}</li>))}
                  </ul>
                  <span>{d.message}</span>
                </div>
              </div>

              <div className="right">
                <img src="assets/SLIS_logo.jpeg" alt="" className="SLIS"/>
                <img src="assets/archive_it_logo.png" alt = ""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosNewIcon className="arrow left" onClick={() => handleClick("left")}/>
      <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick()}/>
    </div>
  )
}
