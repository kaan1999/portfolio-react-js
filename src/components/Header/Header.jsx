import "./Header.scss";
import { useRef, useEffect } from "react";


export const Header = () => {

  const headerContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleMenu = () => {
    if(headerContainerRef.current && buttonRef.current) {
      
      let isVisible = headerContainerRef.current.classList.contains('header__container--visible');
      headerContainerRef.current.classList.toggle('header__container--width-0', isVisible);
      headerContainerRef.current.classList.toggle('header__container--width', !isVisible);
      headerContainerRef.current.classList.toggle('header__container--hidden', isVisible);
      headerContainerRef.current.classList.toggle('header__container--visible', !isVisible);

      buttonRef.current.classList.toggle('fa-bars', isVisible);
      buttonRef.current.classList.toggle('fa-xmark', !isVisible);
    }
  }

  return (
    <>
      <section className="header" id="header">
        <div className="header__container" ref={headerContainerRef}>
          <i className="header__bars fa-solid fa-bars" onClick={toggleMenu} ref={buttonRef}></i>
          <div className="header__nav">
            <a href="#hero" className="header__link">
              home
            </a>
            <a href="#case-studies" className="header__link">
              case studies
            </a>
            <a href="#testimonials" className="header__link">
              testimonials
            </a>
            <a href="#recent-works" className="header__link">
              recent work
            </a>
            <a href="#get-in-touch" className="header__link">
              get in touch
            </a>
          </div>
          <div className="header__social">
            <a href="/" className="fa-brands fa-linkedin-in"></a>
            <a href="/" className="fa-brands fa-behance"></a>
            <a href="/" className="fa-brands fa-twitter"></a>
          </div>
        </div>
      </section>
    </>
  );
};
