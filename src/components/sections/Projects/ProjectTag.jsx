import {theme} from '@/styles/theme';

export default function ProjectTag({tags}) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing[2],
                flexWrap: 'wrap',
            }}
        >
            {tags.map((tag) => (
                <span
                    key={tag}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontFamily: theme.typography.fontFamily.mono,
                        fontSize: theme.typography.fontSize.xs,
                        fontWeight: theme.typography.fontWeight.normal,
                        lineHeight: theme.typography.lineHeight.normal,
                        padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
                        color: theme.colors.text.secondary,
                        backgroundColor: theme.colors.accentSoft,
                        border: `1px solid ${theme.colors.border}`,
                        borderRadius: theme.borderRadius.sm,
                    }}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
