import Icon from '@/components/ui/Icon';
import {getTechnology, heroTechnologies} from '@/data/technologies';

export default function HeroTechCloud() {
    return (
        <ul className="hero-tech-cloud" aria-label="Kullandığım teknolojiler">
            {heroTechnologies.map((item) => {
                const technology = getTechnology(item.technologyId);

                if (!technology) {
                    return null;
                }

                return (
                    <li
                        key={item.technologyId}
                        className={[
                            'hero-tech-cloud__item',
                            `hero-tech-cloud__item--${item.position}`,
                        ].join(' ')}
                        title={technology.name}
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
