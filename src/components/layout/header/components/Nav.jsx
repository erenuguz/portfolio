import navData from '../data/navData';
import './Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navData.map((item) => (
                    <li key={item.id} className="nav__item">
                        <a href={item.href} className="nav__link">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
