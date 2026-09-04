import {theme} from '@/styles/theme';

export default function ContactForm() {
    const inputStyle = {
        width: '100%',
        padding: theme.spacing[3],
        fontSize: theme.typography.fontSize.base,
        fontFamily: theme.typography.fontFamily.sans,
        color: theme.colors.text.primary,
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.md,
        transition: theme.transitions.fast,
    };

    const labelStyle = {
        fontSize: theme.typography.fontSize.sm,
        fontWeight: theme.typography.fontWeight.medium,
        color: theme.colors.text.primary,
    };

    const inputGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing[2],
        flex: '1 1 300px',
    };

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[6],
                width: '100%',
                maxWidth: '800px',
                marginTop: theme.spacing[6],
            }}
            onSubmit={(e) => e.preventDefault()}
        >
            <div
                style={{
                    display: 'flex',
                    gap: theme.spacing[12],
                    flexWrap: 'wrap',
                }}
            >
                <div style={inputGroupStyle}>
                    <label style={labelStyle} htmlFor="name">
                        Ad Soyad
                    </label>
                    <input
                        type="text"
                        id="name"
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
                    className="form-input"
                    style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '150px',
                    }}
                ></textarea>
            </div>

            <button
                type="submit"
                className="form-submit"
                style={{
                    padding: `${theme.spacing[3]} ${theme.spacing[8]}`,
                    fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.medium,
                    border: 'none',
                    borderRadius: theme.borderRadius.md,
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                }}
            >
                Gönder
            </button>
        </form>
    );
}
