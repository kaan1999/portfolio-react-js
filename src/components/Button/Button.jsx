import "./Button.scss";

export const Button = ({innerText, className}) => {
    return (
        <>
            <button className={`btn ${className}`}>
                <p className="btn__text">{innerText}</p>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </>
    )
}