import Logo from './components/Logo';
import Nav from './components/Nav';
import IconGroup from './components/IconGroup';
import CTAButton from './components/CTAButton';
import './Header.css';
import '@/styles/theme.css';

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <Logo />
                </div>

                <div className="header__actions">
                    <Nav className="header__nav" />
                    <IconGroup />
                    <CTAButton />
                </div>
            </div>
        </header>
    );
}

export default Header;
