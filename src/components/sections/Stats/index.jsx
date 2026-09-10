import Section from '@/components/common/Section';
import {statsData} from '@/data/stats';

import StatItem from './StatItem';
import './Stats.css';

export default function Stats() {
    return (
        <Section
            width="content"
            className="stats"
            containerClassName="stats__grid"
            aria-label="Kariyer istatistikleri"
        >
            {statsData.map((stat) => (
                <StatItem
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                />
            ))}
        </Section>
    );
}
