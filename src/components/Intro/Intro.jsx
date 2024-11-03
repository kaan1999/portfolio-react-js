import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import "./Intro.scss";

export const Intro = ({title, text, className, titleClassName}) => {
    return (
        <>
            <div className={`intro ${className ? className : ""}`}>
                <Title innerText={title} className={`intro__title title--larger ${titleClassName ? titleClassName : ""}`}/>
                <Text innerText={text} className="intro__text"/>
            </div>
        </>
    );
}