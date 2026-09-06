import {theme} from '@/styles/theme';

const titleVariants = {
    hero: {
        fontSize: theme.typography.fontSize.display,
        lineHeight: theme.typography.lineHeight.tight,
    },

    section: {
        fontSize: theme.typography.fontSize.sectionTitle,
        lineHeight: theme.typography.lineHeight.heading,
    },

    card: {
        fontSize: theme.typography.fontSize.cardTitle,
        lineHeight: theme.typography.lineHeight.heading,
    },
};

export default function Title({
    children,
    as: Component = 'h2',
    variant = 'section',
    style = {},
}) {
    const variantStyle = titleVariants[variant] ?? titleVariants.section;

    return (
        <Component
            style={{
                fontFamily: theme.typography.fontFamily.heading,
                fontWeight: theme.typography.fontWeight.bold,
                color: theme.colors.text.primary,
                letterSpacing: '-0.02em',
                margin: 0,

                ...variantStyle,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
