import {useState} from 'react';

export default function BaseButton({
    children,
    as = 'button',
    href,
    customStyle = {},
    hoverStyle = {},
    ...rest
}) {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        background: 'none',
        fontFamily: 'inherit',
    };

    const combinedStyles = {
        ...baseStyles,
        ...customStyle,
        ...(isHovered ? hoverStyle : {}),
    };

    const Component = as === 'a' || href ? 'a' : 'button';

    return (
        <Component
            href={href}
            style={combinedStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            {children}
        </Component>
    );
}
