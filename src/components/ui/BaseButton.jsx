export default function BaseButton({
    children,
    as = 'button',
    href,
    customStyle = {},
    hoverStyle = {},
    className = '',
    ...rest
}) {
    const {color, backgroundColor, ...remainingCustomStyle} = customStyle;

    const baseStyles = {
        '--button-color': color ?? 'inherit',
        '--button-background': backgroundColor ?? 'transparent',
        '--button-hover-color': hoverStyle.color ?? color ?? 'inherit',
        '--button-hover-background':
            hoverStyle.backgroundColor ?? backgroundColor ?? 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        fontFamily: 'inherit',
        ...remainingCustomStyle,
    };

    const Component = as === 'a' || href ? 'a' : 'button';
    const combinedClassName = ['base-button', className]
        .filter(Boolean)
        .join(' ');

    return (
        <Component
            href={href}
            className={combinedClassName}
            style={baseStyles}
            {...rest}
        >
            {children}
        </Component>
    );
}
