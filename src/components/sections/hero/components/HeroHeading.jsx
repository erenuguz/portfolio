import {headingData} from '../data/headingData';
import './HeroHeading.css';

export default function HeroHeading() {
    return <h1 className="hero-heading">{headingData.text}</h1>;
}
