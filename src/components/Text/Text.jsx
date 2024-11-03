import "./Text.scss";

export const Text = ({innerText, className}) => {
    return (
    <>
        <p className={`text ${className ? className : ""}`}>{innerText}</p>
    </>);
}