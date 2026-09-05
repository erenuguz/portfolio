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

    return (
        <Component
            href={href}
            className={['base-button', className].filter(Boolean).join(' ')}
            style={{
                '--button-color': style.color ?? 'inherit',
                '--button-background': style.backgroundColor ?? 'transparent',
                '--button-hover-color': hoverColor ?? style.color ?? 'inherit',
                '--button-hover-background':
                    hoverBackground ?? style.backgroundColor ?? 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                border: 'none',
                fontFamily: 'inherit',
                ...style,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
}
