import {useState, useEffect} from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactForm() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        // Form servisi veya API bağlantısı daha sonra eklenecek.
    }

    return (
        <Card
            as="div"
            padding="comfortable"
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxSizing: 'border-box',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '20px' : '16px',
                        width: '100%',
                    }}
                >
                    <div style={{flex: 1}}>
                        <Input
                            label="Ad Soyad"
                            name="name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div style={{flex: 1}}>
                        <Input
                            label="E-posta"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                    </div>
                </div>

                <Input label="Konu" name="subject" required />

                <Textarea label="Mesaj" name="message" rows={5} required />

                <div
                    style={{
                        width: isMobile ? '100%' : 'auto',
                        alignSelf: isMobile ? 'stretch' : 'flex-start',
                    }}
                >
                    <Button
                        type="submit"
                        style={{
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        Gönder
                    </Button>
                </div>
            </form>
        </Card>
    );
}
