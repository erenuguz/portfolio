import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactForm() {
    function handleSubmit(e) {
        e.preventDefault();
        // form gönderim mantığı buraya gelecek (email servisi, API vs.)
    }

    return (
        <Card gap="20px" style={{maxWidth: '560px', width: '100%'}}>
            <form
                onSubmit={handleSubmit}
                style={{display: 'flex', flexDirection: 'column', gap: '20px'}}
            >
                <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                    <Input label="Ad Soyad" name="name" required />
                    <Input label="E-posta" name="email" type="email" required />
                </div>

                <Input label="Konu" name="subject" required />

                <Textarea label="Mesaj" name="message" required />

                <button
                    type="submit"
                    style={{
                        alignSelf: 'flex-start',
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        backgroundColor: '#1A1A1A',
                        padding: '10px 24px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}
                >
                    Gönder
                </button>
            </form>
        </Card>
    );
}
