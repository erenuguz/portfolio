import Section from '@/components/common/Section';
import Button from '@/components/ui/Button';

import './ClosingCTA.css';

export default function ClosingCTA({onContactOpen}) {
    return (
        <Section
            width="content"
            tone="dark"
            className="closing-cta"
            containerClassName="closing-cta__container"
        >
            <h2 className="closing-cta__title">
                Birlikte bir şeyler inşa edelim.
            </h2>

            <div className="closing-cta__actions">
                <Button
                    variant="light"
                    size="large"
                    icon="chevronRight"
                    onClick={onContactOpen}
                >
                    İletişime geç
                </Button>

                {/* Yeni Ghost Butonumuz */}
                <Button
                    href="https://github.com/erenuguz"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="large"
                    className="closing-cta__btn-ghost"
                >
                    GitHub'a git
                </Button>
            </div>
        </Section>
    );
}
