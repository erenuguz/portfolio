import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E5E2DA',
                padding: '48px 32px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                }}
            >
                {/* Section header — diğer bölümlerle tutarlı */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#1E7B34',
                            borderRadius: '999px',
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <h2
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: '26px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                margin: 0,
                            }}
                        >
                            Konuşalım.
                        </h2>
                        <p
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '15px',
                                color: '#6B6B6B',
                                margin: '4px 0 0 0',
                            }}
                        >
                            Yeni bir proje fikriniz mi var, yoksa sadece merhaba
                            mı demek istiyorsunuz?
                        </p>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
