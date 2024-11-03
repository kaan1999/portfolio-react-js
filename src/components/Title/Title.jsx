import "./Title.scss";

export const Title = ({innerText, className}) => {
    return (
        <>
            <h1 className={`title ${className ? className : ""}`}>
                {innerText}
            </h1>
        </>
    );
}