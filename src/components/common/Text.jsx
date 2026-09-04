import {theme} from '@/styles/theme';

export default function Text({children, customStyle = {}}) {
    const defaultStyles = {
        fontSize: theme.typography.fontSize.base,
        color: theme.colors.text.secondary,
        lineHeight: '1.7',
        margin: 0,
        marginBottom: theme.spacing[6],
    };

    const combinedStyles = {
        ...defaultStyles,
        ...customStyle,
    };

    return <p style={combinedStyles}>{children}</p>;
}
