import {theme} from '@/styles/theme';

export default function Subtitle({children, style = {}}) {
    return (
        <span
            style={{
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.bold,
                color: theme.colors.text.muted,
                marginBottom: theme.spacing[2],
                letterSpacing: '0.05em',
                fontFamily: theme.typography.fontFamily.mono,
                ...style,
            }}
        >
            {children}
        </span>
    );
}
