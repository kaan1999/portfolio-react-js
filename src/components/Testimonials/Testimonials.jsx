import "./Testimonials.scss";
import { Intro } from "../Intro/Intro";
import { Testimonial } from "../Testimonial/Testimonial";
import imgClient1 from "../../assets/Testimonials/client-1.png";
import imgClient2 from "../../assets/Testimonials/client-2.png";
import imgClient3 from "../../assets/Testimonials/client-3.png";
import imgClient4 from "../../assets/Testimonials/client-4.png";

export const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <Intro
          className="testimonials__intro"
          title="Testimonials"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <div className="testimonials__grid">
          <Testimonial
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            clientName="Client Name"
            clientImg={imgClient1}
          />
          <Testimonial
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            clientName="Client Name"
            clientImg={imgClient2}
          />
          <Testimonial
            text="test"
            clientName="Client Name"
            clientImg={imgClient3}
          />
          <Testimonial
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            clientName="Client Name"
            clientImg={imgClient4}
          />
        </div>
      </section>
    </>
  );
};
