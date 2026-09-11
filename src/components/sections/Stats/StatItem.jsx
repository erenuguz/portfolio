export default function StatItem({
    value,
    label,
    index = 0,
    isTablet = false,
    isSmallMobile = false,
    isNarrowDesktop = false,
}) {
    let borderLeft = 'none';
    let paddingLeft = '0px';

    if (isSmallMobile) {
        borderLeft = 'none';
        paddingLeft = '0px';
    } else if (isTablet) {
        if (index % 2 === 1) {
            borderLeft = '1px solid #eaeaea';
            paddingLeft = '24px';
        }
    } else {
        if (index > 0) {
            borderLeft = '1px solid #e5e5e5';
            paddingLeft = isNarrowDesktop ? '24px' : '32px';
        }
    }

    return (
        <article
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                flex: isTablet ? 'none' : 1,
                borderLeft: borderLeft,
                paddingLeft: paddingLeft,
                alignItems: isSmallMobile ? 'center' : 'flex-start',
                textAlign: isSmallMobile ? 'center' : 'left',
                boxSizing: 'border-box',
            }}
        >
            <span
                style={{
                    color: '#1a1a1a',
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '36px',
                    fontWeight: 700,
                    lineHeight: 1.1,
                }}
            >
                {value}
            </span>

            <span
                style={{
                    color: '#8a8a8a',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                }}
            >
                {label}
            </span>
        </article>
    );
}
