export default function SectionHeader({
    title,
    titleId,
    description,
    className = '',
}) {
    const classes = ['section-header', className].filter(Boolean).join(' ');

    return (
        <header className={classes}>
            <span className="section-header__indicator" aria-hidden="true" />

            <div className="section-header__content">
                <h2 id={titleId} className="section-header__title">
                    {title}
                </h2>

                {description && (
                    <p className="section-header__description">{description}</p>
                )}
            </div>
        </header>
    );
}
