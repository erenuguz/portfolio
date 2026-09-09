import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';

import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
    return (
        <Section
            id="contact"
            width="content"
           
            containerClassName="contact__container"
        >
            <SectionHeader
                title="Konuşalım."
                description="Yeni bir proje fikriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz?"
            />

            <ContactForm />
        </Section>
    );
}
