import {theme} from '@/styles/theme';

export default function Title({children, as = 'h2', customStyle = {}}) {
    const defaultStyles = {
        fontSize: theme.typography.fontSize['3xl'],
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing[8],
        letterSpacing: '-0.02em',
    };

    const combinedStyles = {
        ...defaultStyles,
        ...customStyle,
    };

    const Component = as;

    return <Component style={combinedStyles}>{children}</Component>;
}
