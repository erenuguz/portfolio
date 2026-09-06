import {theme} from '@/styles/theme';

const textVariants = {
    body: {
        fontSize: theme.typography.fontSize.lg,
        lineHeight: theme.typography.lineHeight.body,
    },

    card: {
        fontSize: theme.typography.fontSize.cardBody,
        lineHeight: '1.6',
    },

    small: {
        fontSize: theme.typography.fontSize.sm,
        lineHeight: '1.6',
    },
};

export default function Text({
    children,
    as: Component = 'p',
    variant = 'body',
    style = {},
}) {
    const variantStyle = textVariants[variant] ?? textVariants.body;

    return (
        <Component
            style={{
                fontFamily: theme.typography.fontFamily.body,
                fontWeight: theme.typography.fontWeight.normal,
                color: theme.colors.text.secondary,
                margin: 0,

                ...variantStyle,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
