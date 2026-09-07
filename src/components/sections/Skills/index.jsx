import skillsData from '@/data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
    return (
        <section id="skills" className="sk-section" style={{ borderBottom: '1px solid #EDEBE4' }}>
            <style>{`
                .sk-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 80px 64px;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .sk-categories {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 40px;
                }
                .sk-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                @media (max-width: 640px) {
                    .sk-container { padding: 56px 24px; gap: 36px; }
                    .sk-categories { grid-template-columns: repeat(2, 1fr); gap: 28px; }
                }
            `}</style>

            <div className="sk-container">
                {/* Section header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#1E7B34',
                            borderRadius: '999px',
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <h2
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: '28px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                margin: 0,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Kullandığım teknolojiler.
                        </h2>
                        <p
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '15px',
                                lineHeight: 1.6,
                                color: '#6B6B6B',
                                margin: '6px 0 0 0',
                                maxWidth: '440px',
                            }}
                        >
                            Farklı katmanlarda çalışırken tercih ettiğim
                            araçlar.
                        </p>
                    </div>
                </div>

                {/* Kategoriler yan yana, araçlar alt alta */}
                <div className="sk-categories">
                    {skillsData.map((category) => (
                        <div key={category.title} className="sk-list">
                            <h3
                                style={{
                                    fontFamily: 'system-ui, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: '#B9B4A6',
                                    margin: '0 0 4px 0',
                                    paddingBottom: '10px',
                                    borderBottom: '1px solid #EDEBE4',
                                }}
                            >
                                {category.title}
                            </h3>

                            {category.items.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    iconUrl={skill.iconUrl}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
