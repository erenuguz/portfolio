import {statsData} from '@/data/stats';
import StatItem from './StatItem';

export default function Stats() {
    return (
        <section
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E5E2DA',
                padding: '32px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                {statsData.map((stat) => (
                    <StatItem
                        key={stat.label}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    );
}
