import { Text } from "../Text/Text";
import "./Footer.scss";

export const Footer = () => {
    return (
        <section className="footer" id="footer">
            <Text className="footer__text" innerText="Made with ❤️"/>
        </section>
    );
}