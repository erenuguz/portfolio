export default function StatItem({value, label}) {
    return (
        <article className="stat-item">
            <span className="stat-item__value">{value}</span>
            <span className="stat-item__label">{label}</span>
        </article>
    );
}
