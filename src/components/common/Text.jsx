import {theme} from '@/styles/theme';

export default function Text({children, style = {}}) {
    return (
        <p
            style={{
                fontSize: theme.typography.fontSize.lg,
                fontFamily: theme.typography.fontFamily.body,
                fontWeight: theme.typography.fontWeight.normal,
                color: theme.colors.text.secondary,
                lineHeight: '1.7',
                margin: 0,
                marginBottom: theme.spacing[10],
                ...style,
            }}
        >
            {children}
        </p>
    );
}
