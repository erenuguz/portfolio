import {useState} from 'react';
import Icon from '@/components/ui/Icon';

export default function TechBadge({
    technology,
    decorative = false,
    isMobile = false,
}) {
    const [imgError, setImgError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const deviconUrl = technology.devicon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.devicon}.svg`
        : null;

    return (
        <div
            title={decorative ? undefined : technology.name}
            aria-hidden={decorative || undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'flex',
                width: isMobile ? '62px' : '76px',
                height: isMobile ? '62px' : '70px',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                transform: isHovered ? 'translateY(-4px) scale(1.06)' : 'none',
                transition: 'transform 180ms ease',
                boxSizing: 'border-box',
            }}
        >
            {deviconUrl && !imgError ? (
                <img
                    src={deviconUrl}
                    alt={`${technology.name} logosu`}
                    width={34}
                    height={34}
                    style={{objectFit: 'contain'}}
                    onError={() => setImgError(true)}
                />
            ) : (
                <Icon
                    name={technology.icon}
                    size={34}
                    title={decorative ? undefined : technology.name}
                />
            )}
        </div>
    );
}
