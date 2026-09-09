import {useState} from 'react';

import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import {navigationLinks} from '@/data/navigation';

import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen((currentValue) => !currentValue);
    }

    return (
        <header className="site-header">
            <div className="site-header__container">
                <a
                    href="#home"
                    className="site-header__logo"
                    onClick={closeMenu}
                >
                    Eren Uğuz
                </a>

                <button
                    type="button"
                    className="site-header__toggle"
                    aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    onClick={toggleMenu}
                >
                    <Icon name={isMenuOpen ? 'close' : 'menu'} size={22} />
                </button>

                <nav
                    id="main-navigation"
                    aria-label="Ana navigasyon"
                    className={[
                        'site-header__nav',
                        isMenuOpen && 'site-header__nav--open',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <ul className="site-header__list">
                        {navigationLinks.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="site-header__link"
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Button
                        href="#contact"
                        size="small"
                        className="site-header__contact"
                        onClick={closeMenu}
                    >
                        İletişim
                    </Button>
                </nav>
            </div>
        </header>
    );
}
