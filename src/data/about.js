export const aboutData = {
    bio: [
        'Yazılım dünyasına olan ilgim, karmaşık problemleri teknolojiyle çözme tutkusuyla başladı. Şu anda ağırlıklı olarak modern web arayüzleri, mobil uygulamalar ve donanım entegrasyonlu sistemler üzerinde çalışıyorum. Benim için iyi bir proje sadece çalışan bir kod yığını değil; aynı zamanda temiz, ölçeklenebilir ve sürdürülebilir bir mimariye sahip olmalıdır.',
        'Geliştirme süreçlerinde takım çalışmasının ve iletişimin gücüne inanıyorum. Kodun sadece bilgisayarlar tarafından değil, aynı zamanda diğer geliştiriciler tarafından da okunacağını bilerek, anlaşılır ve temiz kod yazmayı her zaman ön planda tutuyorum.',
    ],
    // Artık bir dizi; istediğin kadar kart ekleyebilirsin:
    statuses: [
        {
            id: 'education',
            badge: 'Devam Ediyor',
            badgeVariant: 'success', // yeşil
            title: 'Yazılım Mühendisliği Öğrencisi',
            subtitle: 'Üniversite Eğitimi',
            description:
                'Java tabanlı mobil uygulamalar, React ile modern web arayüzleri ve ESP32 gibi mikrodenetleyicilerle donanım entegrasyonlu projeler üzerinde uygulamalı çalışmalar yürütüyorum.',
            stats: [
                {value: '3.', label: 'Sınıf'},
                {value: '2026', label: 'Beklenen Mezuniyet'},
            ],
        },
        {
            id: 'freelance',
            badge: 'Müsait',
            badgeVariant: 'neutral', // gri/koyu
            title: 'Freelance & İş Birlikleri',
            subtitle: 'Web & Mobil Çözümleri',
            description:
                'Özel yönetim panelleri, modern kurumsal vitrinler, POS yazılımları veya prototip mobil uygulamalar için uçtan uca geliştirmeler sunuyorum.',
            stats: [
                {value: 'Full Stack', label: 'Odak'},
                {value: 'Uzaktan', label: 'Çalışma Modeli'},
            ],
        },
        {
            id: 'hardware-iot',
            badge: 'Laboratuvar',
            badgeVariant: 'neutral',
            title: 'Gömülü Sistemler & IoT',
            subtitle: 'Ar-Ge & Prototipleme',
            description:
                'Sensör verilerinin Firebase üzerinden mobil ve web arayüzleriyle gerçek zamanlı senkronize edildiği donanım projeleri tasarlıyorum.',
            // stats alanı isteğe bağlı (opsiyonel)
        },
    ],
};
