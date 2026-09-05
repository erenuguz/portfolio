import {theme} from '@/styles/theme';

export default function Title({children, as: Component = 'h2', style = {}}) {
    return (
        <Component
            style={{
                fontSize: theme.typography.fontSize['5xl'],
                fontFamily: theme.typography.fontFamily.heading,
                fontWeight: theme.typography.fontWeight.bold,
                color: theme.colors.text.primary,
                margin: 0,
                letterSpacing: '-0.02em',
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
