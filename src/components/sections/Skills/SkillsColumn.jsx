import {theme} from '@/styles/theme';
import SkillList from './SkillList';

export default function SkillsColumn({category}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[4],
            }}
        >
            <h3
                style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: theme.colors.text.primary,
                    borderBottom: `1px solid ${theme.colors.border}`,
                    paddingBottom: theme.spacing[2],
                    margin: 0,
                }}
            >
                {category.title}
            </h3>
            <SkillList items={category.items} />
        </div>
    );
}
