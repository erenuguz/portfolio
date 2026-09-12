import Icon from '@/components/ui/Icon';
import {getTechnology, heroTechnologies} from '@/data/technologies';
import {ORBIT_CONFIGS} from '../data/orbitData';
import './TechOrbit.css';

const ORBIT_FALLBACK = {
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    color: '#1a1a1a',
    delay: '0ms',
    duration: '4s',
    zIndex: 2,
    boxShadow: 'none',
};

export default function TechOrbit() {
    return (
        <ul aria-label="Kullandığım teknolojiler" className="tech-orbit">
            <div className="tech-orbit__ring tech-orbit__ring--inner" />
            <div className="tech-orbit__ring tech-orbit__ring--outer" />

            {heroTechnologies.map((item) => {
                const technology = getTechnology(item.technologyId);
                if (!technology) return null;

                const config = ORBIT_CONFIGS[item.position] ?? ORBIT_FALLBACK;

                return (
                    <li
                        key={item.technologyId}
                        title={technology.name}
                        className="tech-orbit__item"
                        style={{
                            top: config.top,
                            left: config.left,
                            width: `${config.width}px`,
                            height: `${config.height}px`,
                            color: config.color,
                            zIndex: config.zIndex,
                            boxShadow: config.boxShadow,
                            animationDuration: config.duration,
                            animationDelay: config.delay,
                            transform: 'translate(-50%, -50%) scale(1)',
                        }}
                    >
                        <Icon
                            name={technology.icon}
                            size={item.iconSize}
                            title={technology.name}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
