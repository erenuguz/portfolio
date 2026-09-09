export default function StatusCard({status}) {
    const badgeClasses = [
        'status-card__badge',
        status.badgeVariant === 'success' && 'status-card__badge--success',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <article className="status-card">
            <div className="status-card__header">
                <div className="status-card__heading">
                    <h3 className="status-card__title">{status.title}</h3>

                    <p className="status-card__subtitle">{status.subtitle}</p>
                </div>

                <span className={badgeClasses}>{status.badge}</span>
            </div>

            <p className="status-card__description">{status.description}</p>

            {status.stats?.length > 0 && (
                <div className="status-card__stats">
                    {status.stats.map((stat) => (
                        <div key={stat.label} className="status-card__stat">
                            <span className="status-card__stat-value">
                                {stat.value}
                            </span>

                            <span className="status-card__stat-label">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}
