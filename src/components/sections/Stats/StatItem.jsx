import Card from '@/components/ui/Card';

export default function StatItem({value, label}) {
    return (
        <Card align="flex-start" style={{minWidth: '140px'}}>
            <span
                style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                }}
            >
                {value}
            </span>
            <span
                style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '13px',
                    color: '#6B6B6B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                }}
            >
                {label}
            </span>
        </Card>
    );
}
