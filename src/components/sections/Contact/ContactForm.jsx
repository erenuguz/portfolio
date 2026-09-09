import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactForm() {
    function handleSubmit(event) {
        event.preventDefault();

        // Form servisi veya API bağlantısı daha sonra eklenecek.
    }

    return (
        <Card as="div" padding="comfortable" className="contact-form">
            <form className="contact-form__fields" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                    <Input
                        label="Ad Soyad"
                        name="name"
                        autoComplete="name"
                        required
                    />

                    <Input
                        label="E-posta"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                </div>

                <Input label="Konu" name="subject" required />

                <Textarea label="Mesaj" name="message" rows={5} required />

                <Button type="submit" className="contact-form__submit">
                    Gönder
                </Button>
            </form>
        </Card>
    );
}
