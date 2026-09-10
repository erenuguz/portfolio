import Section from '@/components/common/Section';
import Button from '@/components/ui/Button';

import HeroTechCloud from './HeroTechCloud';
import './Hero.css';

export default function Hero() {
    return (
        <Section id="home" width="wide" className="hero">
            <div className="hero__layout">
                <div className="hero__content">
                    <div className="hero__status">
                        <span>Durum</span>

                        <span className="hero__status-value">
                            Projelere Açık
                            <span aria-hidden="true">›</span>
                        </span>
                    </div>

                    <h1 className="hero__title">Merhaba, ben Eren.</h1>

                    <p className="hero__description">
                        Ölçeklenebilir uygulamalar ve temiz arayüzler
                        geliştiriyorum. <strong>Backend</strong> ve{' '}
                        <strong>frontend</strong> arasında rahat hareket eden,
                        çözüm odaklı bir yazılımcıyım.
                    </p>

                    <div className="hero__actions">
                        <Button
                            href="#projects"
                            size="large"
                            icon="chevronRight"
                        >
                            Projelerim
                        </Button>

                        {/* Outline/Ghost stilini rahat ezebilmek için class eklendi */}
                        <Button
                            href="#contact"
                            variant="secondary"
                            size="large"
                            className="hero__btn-secondary"
                        >
                            İletişime geç
                        </Button>
                    </div>
                </div>

                <HeroTechCloud />
            </div>
        </Section>
    );
}