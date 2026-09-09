import Icon from '@/components/ui/Icon';

export default function TechBadge({technology, decorative = false}) {
    return (
        <div
            className="tech-badge"
            title={decorative ? undefined : technology.name}
            aria-hidden={decorative || undefined}
        >
            <Icon
                name={technology.icon}
                size={34}
                title={decorative ? undefined : technology.name}
            />
        </div>
    );
}
