import Section from '@/components/common/Section';
import Button from '@/components/ui/Button';

import './ClosingCTA.css';

export default function ClosingCTA() {
    return (
        <Section
            width="content"
            tone="dark"
            containerClassName="closing-cta__container"
        >
            <h2 className="closing-cta__title">
                Birlikte bir şeyler inşa edelim.
            </h2>

            <Button
                href="#contact"
                variant="light"
                size="large"
                icon="chevronRight"
            >
                İletişime geç
            </Button>
        </Section>
    );
}
