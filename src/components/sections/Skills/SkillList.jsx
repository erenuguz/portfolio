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
                        fontFamily: theme.typography.fontFamily.mono,
                        fontSize: theme.typography.fontSize.base,
                        color: theme.colors.text.secondary,
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing[2],
                    }}
                >
                    <span
                        style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: theme.colors.text.muted,
                            borderRadius: theme.borderRadius.full,
                            flexShrink: 0,
                        }}
                    ></span>
                    {skill}
                </li>
            ))}
        </ul>
    );
}
