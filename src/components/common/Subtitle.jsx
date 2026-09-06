import {theme} from '@/styles/theme';

const subtitleVariants = {
    section: {
        color: theme.colors.text.muted,
    },

    accent: {
        color: theme.colors.accent,
    },
};

export default function Subtitle({children, variant = 'section', style = {}}) {
    const variantStyle = subtitleVariants[variant] ?? subtitleVariants.section;

    return (
        <span
            style={{
                fontFamily: theme.typography.fontFamily.mono,
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.bold,
                lineHeight: theme.typography.lineHeight.normal,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',

                ...variantStyle,
                ...style,
            }}
        >
            {children}
        </span>
    );
}
