import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const COLOR_VARIANTS = ['violet', 'blue', 'green', 'orange', 'pink'];

export default function ProjectCard({
    name,
    description,
    tags = [],
    github,
    live,
    colorIndex = 0,
}) {
    const colorVariant = COLOR_VARIANTS[colorIndex % COLOR_VARIANTS.length];

    return (
        <Card
            as="article"
            interactive
            className={`project-card project-card--${colorVariant}`}
        >
            {/* YENİ: Projeye özgü renkli üst görsel/şerit alanı */}
            <div className="project-card__header"></div>

            {/* YENİ: İçeriklerin toplanıp padding alacağı alt alan */}
            <div className="project-card__content">
                <h3 className="project-card__title">{name}</h3>

                <p className="project-card__description">{description}</p>

                {tags.length > 0 && (
                    <div className="project-card__tags">
                        {tags.map((tag) => (
                            <span key={tag} className="project-card__tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {(live || github) && (
                    <div className="project-card__actions">
                        {live && (
                            <Button
                                href={live}
                                size="small"
                                icon="arrowUpRight"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Canlı
                            </Button>
                        )}

                        {github && (
                            <Button
                                href={github}
                                variant="secondary"
                                size="small"
                                icon="arrowUpRight"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}