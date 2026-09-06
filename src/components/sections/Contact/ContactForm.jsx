import {theme} from '@/styles/theme';
import Card from '@/components/ui/Card';

export default function ContactForm() {
    const inputStyle = {
        width: '100%',
        padding: theme.spacing[3],
        color: theme.colors.text.primary,
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.md,
        fontFamily: theme.typography.fontFamily.body,
        fontSize: theme.typography.fontSize.base,
        lineHeight: theme.typography.lineHeight.normal,
        transition: theme.transitions.fast,
    };

    const labelStyle = {
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily.body,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: theme.typography.fontWeight.semibold,
        lineHeight: theme.typography.lineHeight.normal,
    };

    const inputGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing[2],
        minWidth: 0,
    };

    return (
        <Card
            as="form"
            style={{
                width: '100%',
                maxWidth: '800px',
                gap: theme.spacing[6],
            }}
            onSubmit={(event) => event.preventDefault()}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: theme.spacing[6],
                }}
            >
                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="name">
                        Ad Soyad
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        style={inputStyle}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="email">
                        E-posta
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        style={inputStyle}
                    />
                </div>
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="subject">
                    Konu
                </label>

                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    style={inputStyle}
                />
            </div>

            <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="message">
                    Mesaj
                </label>

                <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    style={{
                        ...inputStyle,
                        minHeight: '150px',
                        resize: 'vertical',
                    }}
                />
            </div>

            <button
                type="submit"
                className="form-submit"
                style={{
                    alignSelf: 'flex-start',
                    padding: `${theme.spacing[3]} ${theme.spacing[8]}`,
                    border: 'none',
                    borderRadius: theme.borderRadius.md,
                    fontFamily: theme.typography.fontFamily.body,
                    fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.semibold,
                    cursor: 'pointer',
                }}
            >
                Gönder
            </button>
        </Card>
    );
}
