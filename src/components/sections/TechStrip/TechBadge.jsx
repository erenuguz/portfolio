import { useState } from 'react';
import Icon from '@/components/ui/Icon';

export default function TechBadge({technology, decorative = false}) {
    const [imgError, setImgError] = useState(false);

    // CDN üzerinden Devicon resim yolunu oluşturuyoruz
    const deviconUrl = technology.devicon 
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.devicon}.svg`
        : null;

    return (
        <div
            className="tech-badge"
            title={decorative ? undefined : technology.name}
            aria-hidden={decorative || undefined}
        >
            {(deviconUrl && !imgError) ? (
                <img 
                    src={deviconUrl} 
                    alt={`${technology.name} logosu`} 
                    width={34} 
                    height={34} 
                    style={{ objectFit: 'contain' }}
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