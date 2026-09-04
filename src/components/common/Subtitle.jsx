import {theme} from '@/styles/theme';

export default function Subtitle({children, customStyle = {}}) {
    const defaultStyles = {
        fontSize: theme.typography.fontSize.lg,
        fontWeight: theme.typography.fontWeight.medium,
        color: theme.colors.text.muted,
        marginBottom: theme.spacing[2],
        letterSpacing: '0.05em',
    };

    const combinedStyles = {
        ...defaultStyles,
        ...customStyle,
    };

    return <span style={combinedStyles}>{children}</span>;
}
