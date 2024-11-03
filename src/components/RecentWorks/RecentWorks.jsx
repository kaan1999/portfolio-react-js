import { useRef, useEffect } from "react";
import { Intro } from "../Intro/Intro";
import { RecentWork } from "../RecentWork/RecentWork";
import "./RecentWorks.scss";
import img1 from "../../assets/RecentWork/img-1.png";
import img2 from "../../assets/RecentWork/img-2.png";

export const RecentWorks = () => {
  const sliderRef = useRef(null);
  const workRef = useRef(null);
  let gapNumber;
  useEffect(() => {
    if (sliderRef.current) {
      const computedStyle = window.getComputedStyle(sliderRef.current);
      const gapValue = computedStyle.gap;
      gapNumber = parseFloat(gapValue);
    }
  }, []);
  
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.clientWidth + gapNumber;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.clientWidth +gapNumber;
    }
  };

  return (
    <section className="recent-works" id="recent-works">
      <div className="recent-works__container">
        <Intro
          title="Recent Works"
          text="Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          className="recent-work__intro"
          titleClassName="title--dark"
        />
        <div className="recent-works__wrapper">
          <i
            className="recent-work__slider-btn recent-work__slider-btn-left fa-solid fa-circle-chevron-left"
            onClick={slideLeft}
          ></i>
          <i
            className="recent-work__slider-btn recent-work__slider-btn-right fa-solid fa-circle-chevron-right"
            onClick={slideRight}
          ></i>
          <div className="recent-works__slider" ref={sliderRef}>
            <RecentWork
              className="recent-works__work"
              imgSrc={img1}
              textTitle="Work name here"
              text="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
            <RecentWork
              className="recent-works__work"
              imgSrc={img2}
              textTitle="Work name here"
              text="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
            <RecentWork
              className="recent-works__work"
              imgSrc={img1}
              textTitle="Work name here"
              text="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
            <RecentWork
              className="recent-works__work"
              imgSrc={img1}
              textTitle="Work name here"
              text="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
