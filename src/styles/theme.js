export const theme = {
    // 1. Renk Paleti (Minimalist Beyaz/Açık Gri Tonlar)
    colors: {
    header:     '#efece7', // Headerın zemini — kremden biraz koyu
    footer:     '#efece7', // Footer zemini — header ile aynı

    background: '#f7f5f2', // Sayfa zemini — göz yormayan sıcak krem
    surface:    '#faf9f7', // Kart, form, navbar zemini — kremden biraz açık
    surfaceAlt: '#efece7', // Alternatif bölüm zemini (hakkımda, projeler)
    surfaceHover: '#e8e5e0', // Hover durumu — surface ile uyumlu sıcak gri

    border:     '#e0dbd4', // Ayırıcı çizgiler — sıcak gri

    text: {
        primary:   '#1c1917', // Ana başlıklar — sıcak siyah (saf siyah değil)
        secondary: '#57534e', // Paragraf, açıklamalar — sıcak koyu gri
        muted:     '#a8a29e', // Tarihler, etiketler — sıcak açık gri
    },

    action: {
        primary:      '#1c1917', // Ana buton zemini
        primaryHover: '#292524', // Buton hover
        link:         '#1c1917', // Link — mavi yok, altı çizgili siyah yeter
    },
},

    // 2. Tipografi (Yazı Tipleri ve Boyutlar)
    typography: {
        fontFamily: {
            sans: "'Inter', system-ui, -apple-system, sans-serif", // Genel okuma fontu
            mono: "'JetBrains Mono', monospace", // Kod blokları veya teknik detaylar
        },
        fontSize: {
            xs: '0.75rem', // 12px - Etiketler, yetenek (skill) rozetleri
            sm: '0.875rem', // 14px - Alt metinler, menü linkleri
            base: '1rem', // 16px - Normal paragraflar
            lg: '1.125rem', // 18px - Kart başlıkları, buton metinleri
            xl: '1.25rem', // 20px - Alt bölüm başlıkları
            '2xl': '1.5rem', // 24px - Section (Bölüm) başlıkları
            '3xl': '1.875rem', // 30px - Büyük başlıklar
            '4xl': '2.25rem', // 36px - Hero (karşılama) bölümü ana başlığı
            '5xl': '3rem', // 48px - Ekstra büyük vurgular
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
    },

    // 3. Boşluklar (Margin ve Padding için standart ölçüler)
    spacing: {
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px  - İkon ile yazı arası
        3: '0.75rem', // 12px
        4: '1rem', // 16px - Standart padding (kart içi boşluk)
        6: '1.5rem', // 24px
        8: '2rem', // 32px - Bölüm başlığı ile içerik arası
        12: '3rem', // 48px
        16: '4rem', // 64px - İki farklı section (Projects - About) arası dikey boşluk
        24: '6rem', // 96px
    },

    // 4. Kenar Ovalleştirme (Border Radius)
    borderRadius: {
        sm: '0.375rem', // 6px  - Küçük inputlar, etiketler
        md: '0.5rem', // 8px  - Standart butonlar, küçük resimler
        lg: '0.75rem', // 12px - Proje kartları, büyük çerçeveler
        full: '9999px', // Profil fotoğrafı, yuvarlak ikon hapları
    },

    // 5. Gölgeler (Temiz ve Derinlik Katan Hafif Gölgeler)
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Butonlar ve küçük rozetler
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Standart proje kartları
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Açılır menü, modal pencereleri
    },

    // 6. Animasyon Geçişleri
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)', // Buton renk değişimleri (hover)
        normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)', // Modal açılışları, sayfa geçişleri
    },

    // 7. Responsive Kırılma Noktaları (Media Queries)
    breakpoints: {
        sm: '640px', // Büyük telefonlar
        md: '768px', // Tabletler
        lg: '1024px', // Laptoplar
        xl: '1280px', // Geniş ekran masaüstü
    },
};
