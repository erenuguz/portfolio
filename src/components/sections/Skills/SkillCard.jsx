import {useState} from 'react';
import Icon from '@/components/ui/Icon';

export default function SkillCard({technology}) {
    const [imgError, setImgError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const deviconUrl = technology.devicon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.devicon}.svg`
        : null;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'flex',
                minHeight: '32px',
                color: '#3a3a3a',
                alignItems: 'center',
                gap: '12px',
                padding: '4px 8px',
                marginLeft: '-8px',
                borderRadius: '8px',
                backgroundColor: isHovered
                    ? 'rgba(0, 0, 0, 0.03)'
                    : 'transparent',
                transition: 'background-color 0.2s ease',
                boxSizing: 'border-box',
                cursor: 'default',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {deviconUrl && !imgError ? (
                    <img
                        src={deviconUrl}
                        alt={`${technology.name} logosu`}
                        width={24}
                        height={24}
                        style={{objectFit: 'contain'}}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <Icon
                        name={technology.icon}
                        size={20}
                        title={technology.name}
                    />
                )}
            </span>

            <span
                style={{
                    fontSize: '15px',
                    fontWeight: 500,
                }}
            >
                {technology.name}
            </span>
        </div>
    );
}
