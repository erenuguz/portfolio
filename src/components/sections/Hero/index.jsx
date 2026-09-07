export default function Hero() {
    return (
        <section
            id="home"
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E5E2DA',
                padding: '80px 32px', // Geniş ekranlar için daha nefes alan padding
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* 1280px Container - İki sütunlu asimetrik grid/flex yapısı */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '1280px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap', // Mobilde sağdaki editörün alta geçmesi için
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '64px',
                }}
            >
                {/* SOL SÜTUN: İçerik Katmanı */}
                <div
                    style={{
                        flex: '1 1 500px',
                        maxWidth: '560px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '32px',
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '6px 6px 6px 16px',
                            border: '1px solid #E5E2DA',
                            borderRadius: '999px',
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '14px',
                            color: '#1A1A1A',
                            backgroundColor: '#FFFFFF',
                        }}
                    >
                        Durum
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                backgroundColor: '#E6F4EA',
                                color: '#1E7B34',
                                fontWeight: 600,
                                padding: '4px 10px',
                                borderRadius: '999px',
                                fontSize: '13px',
                            }}
                        >
                            Projelere Açık
                            <span aria-hidden="true">›</span>
                        </span>
                    </div>

                    {/* Başlık */}
                    <h1
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            fontSize: '48px',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            color: '#1A1A1A',
                            margin: 0,
                        }}
                    >
                        Merhaba, ben Eren.
                    </h1>

                    {/* Alt metin */}
                    <p
                        style={{
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '17px',
                            lineHeight: 1.6,
                            color: '#6B6B6B',
                            margin: 0,
                        }}
                    >
                        Ölçeklenebilir uygulamalar ve temiz arayüzler
                        geliştiriyorum.{' '}
                        <strong style={{ color: '#1A1A1A' }}>Backend</strong> ve{' '}
                        <strong style={{ color: '#1A1A1A' }}>frontend</strong>{' '}
                        arasında rahat hareket eden, çözüm odaklı bir yazılımcıyım.
                    </p>

                    {/* Butonlar */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <a
                            href="#projects"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                backgroundColor: '#1A1A1A',
                                color: '#FAF9F6',
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '15px',
                                fontWeight: 600,
                                padding: '12px 20px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                            }}
                        >
                            Projelerim
                            <span aria-hidden="true">›</span>
                        </a>

                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                color: '#1A1A1A',
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '15px',
                                fontWeight: 600,
                                padding: '12px 20px',
                                border: '1px solid #E5E2DA',
                                borderRadius: '8px',
                                textDecoration: 'none',
                            }}
                        >
                            İletişime geç
                        </a>
                    </div>
                </div>

               {/* SAĞ SÜTUN: Konsept 1 - Genişletilmiş Yüzen Işıltılı Logolar (10 Logo) */}
<div style={{ flex: '1 1 400px', maxWidth: '520px', height: '480px', position: 'relative' }}>
    <style>
        {`
            @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
            @keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
            @keyframes float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
            @keyframes float4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
            @keyframes float5 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
            
            .tech-icon-wrapper {
                position: absolute;
                background: #FFFFFF;
                border: 1px solid #E5E2DA;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                cursor: grab;
            }
            .tech-icon-wrapper:hover {
                transform: scale(1.15) !important;
                z-index: 10 !important;
            }
        `}
    </style>

    {/* 1. React (Büyük - Sağ Üst) */}
    <div className="tech-icon-wrapper" style={{ width: '90px', height: '90px', top: '8%', right: '8%', animation: 'float1 4s ease-in-out infinite', boxShadow: '0 15px 35px rgba(97,218,251,0.2)', zIndex: 2 }}>
        <svg width="48" height="48" viewBox="-11.5 -10.2 23 20.4">
            <circle cx="0" cy="0" r="2" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
        </svg>
    </div>

    {/* 2. Android (En Büyük - Sol Üst) */}
    <div className="tech-icon-wrapper" style={{ width: '110px', height: '110px', top: '15%', left: '2%', animation: 'float2 5s ease-in-out infinite', animationDelay: '0.5s', boxShadow: '0 15px 35px rgba(61,220,132,0.2)', zIndex: 3 }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#3DDC84">
            <path d="M17.6 9.5l1.6-2.8c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-1.7 2.9C15.4 8.7 13.8 8.3 12 8.3s-3.4.4-4.8 1.1L5.5 6.4c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5l1.6 2.8C3.8 11.2 2 13.9 2 17h20c0-3.1-1.8-5.8-4.4-7.5zM7 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
        </svg>
    </div>

    {/* 3. Git (Küçük - Orta Üst) */}
    <div className="tech-icon-wrapper" style={{ width: '60px', height: '60px', top: '2%', left: '35%', animation: 'float4 3.5s ease-in-out infinite', animationDelay: '1s', boxShadow: '0 10px 25px rgba(241,80,47,0.15)', zIndex: 1 }}>
        <svg width="32" height="32" viewBox="0 0 128 128">
            <path fill="#F1502F" d="M125.7 60.4L67.6 2.3c-3-3-7.9-3-10.9 0L42.5 16.5l14 14c3.4-1.2 7.3.1 9.5 2.3 2.6 2.6 3.5 6.4 2.2 9.8l13.6 13.6c3.4-1.3 7.3-.4 9.8 2.2 3.7 3.7 3.7 9.8 0 13.5-3.7 3.7-9.8 3.7-13.5 0-2.6-2.6-3.5-6.5-2.2-9.9L62.7 48.7c0 .1 0 .3 0 .4 0 5.2-4.2 9.4-9.4 9.4-5.2 0-9.4-4.2-9.4-9.4 0-5.2 4.2-9.4 9.4-9.4.9 0 1.8.1 2.6.4l-13-13-20.6 20.6c-3 3-3 7.9 0 10.9l58.1 58.1c3 3 7.9 3 10.9 0l54.4-54.4c3.1-3 3.1-7.9 0-10.9z"/>
        </svg>
    </div>

    {/* 4. Database / SQL (Küçük - Sağ Orta Üst) */}
    <div className="tech-icon-wrapper" style={{ width: '65px', height: '65px', top: '8%', right: '38%', animation: 'float5 4.5s ease-in-out infinite', animationDelay: '0.7s', boxShadow: '0 10px 25px rgba(68,121,161,0.15)', zIndex: 1 }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
    </div>

    {/* 5. JavaScript (Orta Boy - Sol Orta) */}
    <div className="tech-icon-wrapper" style={{ width: '85px', height: '85px', top: '45%', left: '25%', animation: 'float3 4.2s ease-in-out infinite', animationDelay: '1.2s', boxShadow: '0 15px 35px rgba(247,223,30,0.15)', zIndex: 4 }}>
        <svg width="44" height="44" viewBox="0 0 24 24">
            <path fill="#F7DF1E" d="M0 0h24v24H0z"/><path d="M7 21.5c-1.5 0-2.5-.5-3-1.5l2-1.5c.5.5 1 1 1.5 1s1-.5 1-1v-8h2.5v8c0 2-1.5 3.5-4 3.5zm9 0c-2 0-3.5-1-4-2.5l2-1.5c.5.5 1 1.5 2 1.5s1.5-.5 1.5-1c0-.5-.5-1-2-1.5-2-.5-3.5-1.5-3.5-3.5 0-2 1.5-3.5 3.5-3.5 1.5 0 3 1 3.5 2l-2 1.5c-.5-.5-1-1-1.5-1s-1.5.5-1.5 1c0 .5.5 1 2 1.5 2 .5 3.5 1.5 3.5 3.5 0 2-1.5 3.5-3.5 3.5z" fill="#000"/>
        </svg>
    </div>

    {/* 6. Firebase (Orta Boy - Sağ Orta) */}
    <div className="tech-icon-wrapper" style={{ width: '75px', height: '75px', top: '40%', right: '12%', animation: 'float1 3.8s ease-in-out infinite', animationDelay: '2s', boxShadow: '0 15px 35px rgba(255,202,40,0.2)', zIndex: 2 }}>
        <svg width="38" height="38" viewBox="0 0 24 24">
            <path fill="#FFA000" d="M3.2 17.5l2.4-14.1c.1-.5.8-.6 1.1-.1l1.7 3.2 13.5 13.5h-18.7z"/>
            <path fill="#F57C00" d="M13.4 13.3l-2-3.8-1-6.1c-.1-.5-.8-.5-1 0l-2.7 15.6 6.7-5.7z"/>
            <path fill="#FFCA28" d="M3.2 17.5l8.1 4.5c.4.2 1 .2 1.4 0l8.1-4.5-9.3-17.4c-.3-.6-1.2-.6-1.5 0l-6.8 17.4z"/>
        </svg>
    </div>

    {/* 7. Figma (Küçük - Sağ Alt) */}
    <div className="tech-icon-wrapper" style={{ width: '60px', height: '60px', bottom: '15%', right: '2%', animation: 'float4 4.8s ease-in-out infinite', animationDelay: '0.3s', boxShadow: '0 10px 25px rgba(242,78,30,0.15)', zIndex: 1 }}>
        <svg width="26" height="26" viewBox="0 0 24 24">
            <path fill="#F24E1E" d="M8.5 2h7A3.5 3.5 0 0 1 19 5.5v0A3.5 3.5 0 0 1 15.5 9h-7V2z"/><path fill="#A259FF" d="M5 5.5A3.5 3.5 0 0 1 8.5 2v7H5.5A3.5 3.5 0 0 1 5 5.5z"/><path fill="#1ABCFE" d="M5 12.5A3.5 3.5 0 0 1 8.5 9v7H5.5A3.5 3.5 0 0 1 5 12.5z"/><path fill="#0ACF83" d="M8.5 16h7a3.5 3.5 0 0 1 0 7h-7v-7z"/><path fill="#FF7262" d="M15.5 9a3.5 3.5 0 0 1 0 7h-7V9h7z"/>
        </svg>
    </div>

    {/* 8. Python (Büyük - Orta Sağ Alt) */}
    <div className="tech-icon-wrapper" style={{ width: '85px', height: '85px', bottom: '5%', right: '30%', animation: 'float2 5.5s ease-in-out infinite', animationDelay: '1.5s', boxShadow: '0 15px 35px rgba(56,126,184,0.15)', zIndex: 3 }}>
        <svg width="44" height="44" viewBox="0 0 24 24">
            <path fill="#387EB8" d="M12 2c-5.5 0-5.5 2.5-5.5 2.5v2.5h5.5V8H6.5C4 8 4 10.5 4 13s2.5 5 5 5h1.5v-2.5c0-3 2.5-3 2.5-3h3.5c1.5 0 1.5-1.5 1.5-1.5v-3.5C18 5 15.5 2 12 2zm-1.5 2.5c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"/>
            <path fill="#FFE052" d="M12 22c5.5 0 5.5-2.5 5.5-2.5v-2.5h-5.5V16h5.5c2.5 0 2.5-2.5 2.5-5s-2.5-5-5-5h-1.5v2.5c0 3-2.5 3-2.5 3h-3.5c-1.5 0-1.5 1.5-1.5 1.5v3.5C6 19 8.5 22 12 22zm1.5-2.5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/>
        </svg>
    </div>

    {/* 9. Node.js (Orta Boy - Sol Orta Alt) */}
    <div className="tech-icon-wrapper" style={{ width: '70px', height: '70px', bottom: '2%', left: '40%', animation: 'float5 4s ease-in-out infinite', animationDelay: '2.5s', boxShadow: '0 10px 25px rgba(51,153,51,0.15)', zIndex: 2 }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#339933">
            <path d="M11.83 0L2 5.57V17l9.83 5.57L21.66 17V5.57L11.83 0zm0 21L3.33 16V6.75l8.5 4.8v9.45zm8.5-5L11.83 21v-9.45l8.5-4.8V16zM11.83 1.25L20.33 6l-8.5 4.8L3.33 6l8.5-4.75z"/>
        </svg>
    </div>

    {/* 10. Java (Küçük - Sol Alt) */}
    <div className="tech-icon-wrapper" style={{ width: '65px', height: '65px', bottom: '15%', left: '8%', animation: 'float1 3.5s ease-in-out infinite', animationDelay: '0.8s', boxShadow: '0 15px 35px rgba(231,111,0,0.15)', zIndex: 1 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#E76F00">
            <path d="M16 4c0 1-1 2-2 2s-1-1-1-2 1-2 2-2 1 1 1 2zm-4 0c0 1-1 2-2 2s-1-1-1-2 1-2 2-2 1 1 1 2zm-4 0c0 1-1 2-2 2S5 5 5 4s1-2 2-2 1 1 1 2zm11 8c.6 0 1 .4 1 1s-.4 1-1 1v1c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V9h13c1.7 0 3 1.3 3 3v1h-2v-1zM7 9v7c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V9H7z"/>
        </svg>
    </div>
</div>
            </div>
        </section>
    );
}