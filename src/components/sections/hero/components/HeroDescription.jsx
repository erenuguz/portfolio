import {descriptionData} from '../data/descriptionData';
import './HeroDescription.css';

export default function HeroDescription() {
    return (
        <p className="hero-description">
            {descriptionData.parts.map((part, index) =>
                part.bold ? <strong key={index}>{part.text}</strong> : part.text
            )}
        </p>
    );
}
