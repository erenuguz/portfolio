export default function Section({
    id,
    children,
    width = 'content',
    spacing = 'default',
    tone = 'default',
    contained = true,
    fullBleed,
    className = '',
    containerClassName = '',
    ...rest
}) {
    const sectionClasses = [
        'section',
        spacing !== 'default' && `section--${spacing}`,
        tone !== 'default' && `section--${tone}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const containerClasses = [
        'section__container',
        `section__container--${width}`,
        containerClassName,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <section id={id} className={sectionClasses} {...rest}>
            {contained ? (
                <div className={containerClasses}>
                    {children}
                </div>
            ) : (
                children
            )}

            {fullBleed && (
                <div className="section__full-bleed">
                    {fullBleed}
                </div>
            )}
        </section>
    );
}