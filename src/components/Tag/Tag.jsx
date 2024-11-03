import "./Tag.scss";

export const Tag = ({ content, className }) => {
  return (
    <>
      <p className={`tag ${className}`}>{content}</p>
    </>
  );
};
