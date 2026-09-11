export default function Card({
    children,
    as: Component = 'div',
    padding = 'default',
    interactive = false,
    flat = false,
    className = '',
    ...rest
}) {
    const classes = [
        'card',
        padding !== 'default' && `card--${padding}`,
        interactive && 'card--interactive',
        flat && 'card--flat',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Component className={classes} {...rest}>
            {children}
        </Component>
    );
}
