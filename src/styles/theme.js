export const theme = {
    colors: {
        // Header ve ana sayfa zemini
        header: '#f5f2ec',
        background: '#f5f2ec',

        // Footer için aynı renk ailesinde biraz daha koyu ton
        footer: '#ebe6dc',

        // Kart ve içerik yüzeyleri
        surface: '#fbf9f4',
        surfaceAlt: '#ece8df',
        surfaceHover: '#eae5dc',

        // Çizgiler ve kenarlıklar
        border: '#d9d4ca',

        text: {
            primary: '#2d2c28',
            secondary: '#5e5a52',
            muted: '#958d80',
        },

        action: {
            primary: '#2d2c28',
            primaryHover: '#4a4740',
            link: '#716b61',
        },

        // Ek vurgu renkleri
        accent: '#8a7d67',
        accentSoft: '#e7dfd1',
        accentLine: '#b9ad98',
    },

    typography: {
        fontFamily: {
            // Mevcut Header kodun theme.typography.fontFamily.sans kullanıyor
            sans: '"DM Sans", Inter, system-ui, sans-serif',

            // Normal içerik metinleri
            body: '"DM Sans", Inter, system-ui, sans-serif',

            // Büyük başlıklar ve logo harfi
            heading: '"Instrument Serif", Georgia, serif',

            // Küçük teknik başlıklar ve etiketler
            mono: '"Space Mono", "SFMono-Regular", monospace',
        },

        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px

            // Ek tasarım değerleri
            label: '0.625rem', // 10px
            display: 'clamp(4.8rem, 8.6vw, 8.4rem)',
        },

        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },

        lineHeight: {
            tight: '0.86',
            normal: '1.5',
            relaxed: '1.8',
        },
    },

    spacing: {
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        12: '3rem', // 48px
        16: '4rem', // 64px
        24: '6rem', // 96px

        // Ek aralıklar
        5: '1.25rem', // 20px
        7: '1.75rem', // 28px
        10: '2.5rem', // 40px
        14: '3.5rem', // 56px
        20: '5rem', // 80px
    },

    borderRadius: {
        sm: '0.5rem', // 8px
        md: '0.75rem', // 12px
        lg: '1rem', // 16px
        xl: '2rem', // 32px
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px rgba(45, 44, 40, 0.06)',
        md: '0 8px 24px rgba(45, 44, 40, 0.08)',
        lg: '0 18px 45px rgba(45, 44, 40, 0.12)',
    },

    transitions: {
        fast: '150ms ease',
        normal: '200ms ease',
    },

    layout: {
        contentMaxWidth: '1200px',
    },

    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
};
