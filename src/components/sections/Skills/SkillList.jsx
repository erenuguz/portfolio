import {theme} from '@/styles/theme';

export default function SkillList({items}) {
    return (
        <ul
            style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[3],
                margin: 0,
                padding: 0,
            }}
        >
            {items.map((skill) => (
                <li
                    key={skill}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing[3],
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.body,
                        fontSize: theme.typography.fontSize.cardBody,
                        fontWeight: theme.typography.fontWeight.normal,
                        lineHeight: '1.6',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '6px',
                            height: '6px',
                            flexShrink: 0,
                            backgroundColor: theme.colors.accentLine,
                            borderRadius: theme.borderRadius.full,
                        }}
                    />

                    {skill}
                </li>
            ))}
        </ul>
    );
}
