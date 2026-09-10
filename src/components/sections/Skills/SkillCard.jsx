import {useState} from 'react';
import Icon from '@/components/ui/Icon';

export default function SkillCard({technology}) {
    // Resmin yüklenip yüklenemediğini takip edecek state
    const [imgError, setImgError] = useState(false);

    // CDN üzerinden doğrudan Devicon resim yolunu oluşturuyoruz
    const deviconUrl = technology.devicon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.devicon}.svg`
        : null;

    return (
        <div className="skill-card">
            <span className="skill-card__icon">
                {/* Eğer devicon varsa ve henüz hata almadıysa SVG'yi bas */}
                {deviconUrl && !imgError ? (
                    <img
                        src={deviconUrl}
                        alt={`${technology.name} logosu`}
                        width={24}
                        height={24}
                        style={{objectFit: 'contain'}}
                        onError={() => setImgError(true)} // Hata verirse state'i güncelle
                    />
                ) : (
                    /* Hata durumunda veya devicon tanımlı değilse yedek Icon bileşeni */
                    <Icon
                        name={technology.icon}
                        size={20}
                        title={technology.name}
                    />
                )}
            </span>

            <span className="skill-card__name">{technology.name}</span>
        </div>
    );
}
