import Icon from './Icon';

export default function Button({
    children,
    href,
    as,
    variant = 'primary',
    size = 'medium',
    icon,
    iconPosition = 'after',
    fullWidth = false,
    className = '',
    type,
    ...rest
}) {
    const Component = href ? 'a' : as || 'button';

    const classes = [
        'button',
        `button--${variant}`,
        size !== 'medium' && `button--${size}`,
        fullWidth && 'button--full',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const iconElement = icon ? <Icon name={icon} size={16} /> : null;

    return (
        <Component
            href={href}
            type={Component === 'button' ? type || 'button' : undefined}
            className={classes}
            {...rest}
        >
            {iconPosition === 'before' && iconElement}
            <span>{children}</span>
            {iconPosition === 'after' && iconElement}
        </Component>
    );
}
