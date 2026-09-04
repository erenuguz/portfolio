import {theme} from '@/styles/theme';

export default function ProjectTag({tags}) {
    return (
        <div
            style={{
                display: 'flex',
                gap: theme.spacing[2],
                flexWrap: 'wrap',
                marginTop: theme.spacing[2],
            }}
        >
            {tags.map((tag, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: theme.typography.fontSize.xs,
                        padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
                        backgroundColor: theme.colors.surfaceHover,
                        color: theme.colors.text.secondary,
                        borderRadius: theme.borderRadius.sm,
                        border: `1px solid ${theme.colors.border}`,
                        display: 'inline-block',
                    }}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
