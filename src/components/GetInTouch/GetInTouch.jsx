import { Button } from "../Button/Button";
import { Intro } from "../Intro/Intro";
import "./GetInTouch.scss";

export const GetInTouch = () => {
  return (
    <section className="get-in-touch" id="get-in-touch">
      <div className="get-in-touch__container">
        <Intro
          className="get-in-touch__intro"
          title="Get In Touch"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <form className="get-in-touch__form">
            <label htmlFor="email" className="get-in-touch__lbl">Email</label>
            <input type="text" name="email" placeholder="Please enter your email" className="get-in-touch__input" />
            <label htmlFor="mobile" className="get-in-touch__lbl">Mobile</label>
            <input type="tel" name="mobile" placeholder="Enter mobile" className="get-in-touch__input" />
            <label htmlFor="msg" className="get-in-touch__lbl">Message</label>
            <textarea name="msg" className="get-in-touch__txtarea get-in-touch__input" placeholder="Enter your message"></textarea>
            <Button className="get-in-touch__btn btn__bg-green btn__border" innerText="Submit"/>
        </form>
      </div>
    </section>
  );
};
