// TechBadge.jsx
export default function TechBadge({label, logo}) {
    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '70px',
                height: '70px',
                flexShrink: 0,
                cursor: 'default',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                gap: '6px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                    'translateY(-6px) scale(1.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
        >
            <img
                src={logo}
                alt={label || 'tech'}
                style={{
                    width: '34px',
                    height: '34px',
                    objectFit: 'contain',
                    filter: 'brightness(1.1) drop-shadow(0 0 6px rgba(0,0,0,0.15))',
                    transition: 'filter 0.3s ease',
                }}
            />
        </div>
    );
}
