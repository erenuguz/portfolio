import {theme} from '@/styles/theme';
import ContactContent from '@/components/sections/Contact/ContactContent';
import ContactForm from '@/components/sections/Contact/ContactForm';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';

export default function Contact() {
    return (
        <section
            style={{
                padding: `${theme.spacing[24]} ${theme.spacing[8]}`,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.colors.surfaceAlt,
            }}
            id="contact"
        >
            <div
                style={{
                    width: '100%',

                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Subtitle>İLETİŞİM</Subtitle>

                <Title>Konuşalım.</Title>

                {/* Metinler */}
                <ContactContent />

                {/* İletişim Formu */}
                <ContactForm />

                {/* Ayırıcı Çizgi */}
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: theme.colors.border,
                        margin: `${theme.spacing[16]} 0 ${theme.spacing[8]} 0`,
                    }}
                ></div>
            </div>
        </section>
    );
}
