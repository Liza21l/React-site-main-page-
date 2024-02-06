import { Link } from "react-router-dom";
import s from './header.module.scss'
const Header = () => {
    return (
        <header className={s.header}>
            <p className={s.header_logo}>AppleStore</p>
            <nav className={s.header_logo_navBar}>
                <Link className={s.link} to="/" >Main page</Link>
                <Link className={s.link} to="/products">Products</Link>
            </nav>
        </header>
    )
}

export default Header