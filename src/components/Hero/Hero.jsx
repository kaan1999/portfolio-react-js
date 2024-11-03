import "./Hero.scss";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import heroImg from "../../assets/Hero/hero-img.png";
import clickupLogo from "../../assets/Hero/clickup-logo.png";
import dropboxLogo from "../../assets/Hero/dropbox-logo.png";
import paychexLogo from "../../assets/Hero/paychex-logo.png";
import elasticLogo from "../../assets/Hero/elastic-logo.png";
import stripeLogo from "../../assets/Hero/stripe-logo.png";

export const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__container">
          <div className="hero__grid">
            <Title
              innerText="Your Name Here"
              className="hero__title title--larger"
            />
            <Text
              innerText="Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua."
              className="hero__text"
            />
            <Button
              innerText="Let’s get started"
              className="btn__bigger btn__bg-green btn__border btn__box-shadow hero__btn"
            />
            <img className="hero__img" src={heroImg} />
          </div>
          <div className="hero__logos">
            <img src={clickupLogo} alt="" className="hero__brand-logo hero__clickup" />
            <img src={dropboxLogo} alt="" className="hero__brand-logo hero__dropbox" />
            <img src={paychexLogo} alt="" className="hero__brand-logo hero__paychex" />
            <img src={elasticLogo} alt="" className="hero__brand-logo hero__elastic" />
            <img src={stripeLogo} alt="" className="hero__brand-logo hero__stripe" />
          </div>
        </div>
      </section>
    </>
  );
};
