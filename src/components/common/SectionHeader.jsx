import {theme} from '@/styles/theme';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';

export default function SectionHeader({
    eyebrow,
    title,
    titleAs = 'h2',
    style = {},
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: theme.spacing[3],
                ...style,
            }}
        >
            <Subtitle>{eyebrow}</Subtitle>

            <Title as={titleAs} variant="section">
                {title}
            </Title>
        </div>
    );
}
