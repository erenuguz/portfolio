import {theme} from '@/styles/theme';

export default function Card({
    children,
    as: Component = 'div',
    style = {},
    ...rest
}) {
    return (
        <Component
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minWidth: 0,
                overflowWrap: 'break-word',
                gap: theme.layout.cardGap,
                padding: theme.layout.cardPadding,
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.borderRadius.lg,
                boxShadow: theme.shadows.sm,
                ...style,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
}
