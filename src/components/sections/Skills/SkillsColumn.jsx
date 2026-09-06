import {theme} from '@/styles/theme';
import Card from '@/components/ui/Card';
import Title from '@/components/common/Title';
import SkillList from '@/components/sections/Skills/SkillList';

export default function SkillsColumn({category}) {
    return (
        <Card
            as="article"
            style={{
                height: '100%',
            }}
        >
            <Title
                as="h3"
                variant="card"
                style={{
                    paddingBottom: theme.spacing[3],
                    borderBottom: `1px solid ${theme.colors.border}`,
                }}
            >
                {category.title}
            </Title>

            <SkillList items={category.items} />
        </Card>
    );
}