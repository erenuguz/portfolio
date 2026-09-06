import {theme} from '@/styles/theme';

export default function Section({
    children,
    id,
    backgroundColor = theme.colors.surfaceAlt,
    style = {},
    contentStyle = {},
}) {
    return (
        <section
            id={id}
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: theme.layout.sectionPadding,
                backgroundColor,
                ...style,
            }}
        >
            <div
                style={{
                    width: '100%',
                    minWidth: 0,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing[8],
                    ...contentStyle,
                }}
            >
                {children}
            </div>
        </section>
    );
}
