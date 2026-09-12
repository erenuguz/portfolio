import iconData from '../data/iconData';
import Icon from '@/components/ui/Icon';
import './IconGroup.css';

function IconGroup() {
    return (
        <div className="icon-group">
            {iconData.map((icon) => (
                <a
                    key={icon.id}
                    href={icon.href}
                    aria-label={icon.label}
                    className="icon-group__item"
                >
                    <Icon name={icon.id} size={17} />
                </a>
            ))}
        </div>
    );
}

export default IconGroup;