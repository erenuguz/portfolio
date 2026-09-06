export default function BaseButton({
    children,
    as = 'button',
    href,
    style = {},
    hoverColor,
    hoverBackground,
    className = '',
    ...rest
}) {
    const Component = as === 'a' || href ? 'a' : 'button';

    const {color, backgroundColor, ...remainingStyle} = style;

    const combinedClassName = ['base-button', className]
        .filter(Boolean)
        .join(' ');

    return (
        <Component
            href={href}
            className={combinedClassName}
            style={{
                '--button-color': color ?? 'inherit',
                '--button-background': backgroundColor ?? 'transparent',
                '--button-hover-color': hoverColor ?? color ?? 'inherit',
                '--button-hover-background':
                    hoverBackground ?? backgroundColor ?? 'transparent',

                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                border: 'none',
                fontFamily: 'inherit',

                ...remainingStyle,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
}
