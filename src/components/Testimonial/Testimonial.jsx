import { Text } from "../Text/Text";
import "./Testimonial.scss";

export const Testimonial = ({ text, clientImg, clientName }) => {
  return (
    <div className="testimonial">
    <div className="testimonial__container">
      <Text innerText={text} className="testimonial__text" />
      <div className="testimonial__client">
        <img src={clientImg} className="testimonial__img" />
        <p className="testimonial__name">{clientName}</p>
      </div>
    </div>
  </div>
  );
};
