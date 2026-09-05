import {theme} from '@/styles/theme';
import SkillList from './SkillList';
import Title from '@/components/common/Title';

export default function SkillsColumn({category}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[4],
                padding: theme.spacing[4],
            }}
        >
            <Title
                style={{
                    fontSize: theme.typography.fontSize.base,
                    borderBottom: `1px solid ${theme.colors.border}`,
                    paddingBottom: theme.spacing[2],
                }}
            >
                {category.title}
            </Title>

            <SkillList items={category.items} />
        </div>
    );
}
