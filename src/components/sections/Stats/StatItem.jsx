import Card from '@/components/ui/Card';

export default function StatItem({value, label}) {
    return (
        <Card as="article" className="stat-item">
            <span className="stat-item__value">{value}</span>
            <span className="stat-item__label">{label}</span>
        </Card>
    );
}
