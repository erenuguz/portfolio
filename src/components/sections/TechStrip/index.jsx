// TechStrip.jsx
import { techStackData } from '@/data/techStack';
import TechBadge from './TechBadge';

export default function TechStrip() {
    const scrollingData = [
        ...techStackData,
        ...techStackData,
        ...techStackData,
        ...techStackData,
    ];

    return (
        <section
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #EBEBEB',
                padding: '4px 0',
                display: 'flex',
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
            }}
        >
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); }
                    }
                    .marquee-track {
                        display: flex;
                        gap: 32px;
                        width: max-content;
                        animation: scroll 20s linear infinite;
                    }
                `}
            </style>

            <div className="marquee-track">
                {scrollingData.map((tech, index) => (
                    <TechBadge key={index} label={tech.name} logo={tech.logo} />
                ))}
            </div>
        </section>
    );
}