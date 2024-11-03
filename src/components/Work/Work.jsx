import "./Work.scss";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { Intro } from "../Intro/Intro";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

export const Work = ({
  className,
  imgClassName,
  title,
  text,
  tagContent,
  tagClass,
  btnText,
  btnClass,
  img,
}) => {
  return (
    <>
      <div className={`work ${className ? className : ""}`}>
        <Tag content={tagContent} className={`work__tag ${tagClass}`} />
        <Title innerText={title} className="work__title title--smaller title--dark"/>
        <Text innerText={text} className="work__text"/>
        <Button innerText={btnText} className={`work__btn ${btnClass}`} />
        <img
          src={img}
          className={`work__img ${imgClassName ? imgClassName : ""}`}
        />
      </div>
    </>
  );
};
