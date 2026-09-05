import {theme} from '@/styles/theme';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import SkillsColumn from './SkillsColumn';
import {skillsData} from '@/data';

export default function Skills() {
    return (
        <section
            style={{
                padding: `${theme.spacing[24]} ${theme.spacing[8]}`,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.colors.surfaceAlt,
            }}
            id="skills"
        >
            <div
                style={{
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Subtitle>YETENEKLERİM</Subtitle>

                <Title>Kullandığım teknolojiler.</Title>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: theme.spacing[12],
                        width: '100%',
                    }}
                >
                    {skillsData.map((category) => (
                        <SkillsColumn
                            key={category.title}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
