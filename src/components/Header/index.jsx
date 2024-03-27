import Logo from "../../assets/SepulturaShop.png";
import styles from "./style.module.css";


export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Logo Sepultura Shop" />
        </header>
    )
}