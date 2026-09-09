import Icon from '@/components/ui/Icon';

export default function SkillCard({technology}) {
    return (
        <div className="skill-card">
            <span className="skill-card__icon">
                <Icon
                    name={technology.icon}
                    size={20}
                    title={technology.name}
                />
            </span>

            <span className="skill-card__name">{technology.name}</span>
        </div>
    );
}
