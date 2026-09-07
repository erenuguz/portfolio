export default function Card({
    children,
    as: Component = 'div',
    padding = '20px',
    gap = '4px',
    align = 'stretch',
    style = {},
    ...rest
}) {
    return (
        <Component
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: align,
                gap,
                padding,
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E2DA',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                ...style,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
}
