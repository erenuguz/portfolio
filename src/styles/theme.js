export const theme = {
    colors: {
        header: 'var(--color-header)',
        footer: 'var(--color-footer)',

        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        surfaceAlt: 'var(--color-surface-alt)',
        surfaceHover: 'var(--color-surface-hover)',

        border: 'var(--color-border)',

        text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            muted: 'var(--color-text-muted)',
        },

        action: {
            primary: 'var(--color-action-primary)',
            primaryHover: 'var(--color-action-primary-hover)',
            link: 'var(--color-link)',
        },

        accent: 'var(--color-accent)',
        accentSoft: 'var(--color-accent-soft)',
        accentLine: 'var(--color-accent-line)',

        status: {
            success: 'var(--color-success)',
            successSoft: 'var(--color-success-soft)',
        },
    },

    typography: {
        fontFamily: {
            sans: 'var(--font-body)',
            body: 'var(--font-body)',
            heading: 'var(--font-heading)',
            mono: 'var(--font-mono)',
        },

        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',

            label: '0.75rem',
            cardTitle: '1.25rem',
            cardBody: '1rem',
            sectionTitle: 'clamp(2.5rem, 6vw, 3rem)',
            display: 'clamp(3.5rem, 8vw, 7rem)',
        },

        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },

        lineHeight: {
            tight: '1',
            heading: '1.1',
            normal: '1.5',
            body: '1.7',
            relaxed: '1.8',
        },
    },

    spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
    },

    borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '2rem',
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
        readableWidth: '720px',

        sectionPadding: 'clamp(4rem, 8vw, 6rem) clamp(1.25rem, 4vw, 2rem)',

        heroPadding: 'clamp(4rem, 8vw, 5rem) clamp(1.25rem, 4vw, 2rem)',

        cardPadding: '1.5rem',
        cardGap: '1rem',

        controlHeight: '2.75rem',
        heroControlHeight: '3rem',
    },

    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
};
