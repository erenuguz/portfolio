import Section from '@/components/common/Section';
import StatusBadge from './components/StatusBadge';
import HeroHeading from './components/HeroHeading';
import HeroDescription from './components/HeroDescription';
import CTAGroup from './components/CTAGroup';
import TechOrbit from './components/TechOrbit';
import './Hero.css';

export default function Hero({onContactOpen}) {
    return (
        <Section id="home" width="wide" className="hero">
            <div className="hero__bg" />
            <div className="hero__inner">
                <div className="hero__content">
                    <StatusBadge />
                    <HeroHeading />
                    <HeroDescription />
                    <CTAGroup onContactOpen={onContactOpen} />
                </div>
                <TechOrbit />
            </div>
        </Section>
    );
}
