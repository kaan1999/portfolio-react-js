import "./RecentWork.scss";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

export const RecentWork = ({ className, imgSrc, textTitle, text }) => {
  return (
    <div className={`recent-work ${className ? className : ""}`}>
      <img src={imgSrc} className="recent-work__img" />
      <div className="recent-work__container">
        <Title
          className="title--smaller title--dark recent-work__title"
          innerText={textTitle}
        />
        <Text className="recent-work__text" innerText={text} />
        <Button
          className="recent-work__btn btn__bg-green btn__smaller btn__border"
          innerText="Know more"
        />
      </div>
    </div>
  );
};
