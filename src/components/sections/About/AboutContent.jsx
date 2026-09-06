import {theme} from '@/styles/theme';
import Text from '@/components/common/Text';

export default function AboutContent() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[4],
                minWidth: 0,
            }}
        >
            <Text>
                Yazılım dünyasına olan ilgim, karmaşık problemleri teknolojiyle
                çözme tutkusuyla başladı. Şu anda ağırlıklı olarak modern web
                arayüzleri, mobil uygulamalar ve donanım entegrasyonlu sistemler
                üzerinde çalışıyorum. Benim için iyi bir proje sadece çalışan
                bir kod yığını değil; aynı zamanda temiz, ölçeklenebilir ve
                sürdürülebilir bir mimariye sahip olmalıdır.
            </Text>

            <Text>
                Geliştirme süreçlerinde takım çalışmasının ve iletişimin gücüne
                inanıyorum. Kodun sadece bilgisayarlar tarafından değil, aynı
                zamanda diğer geliştiriciler tarafından da okunacağını bilerek,
                anlaşılır ve temiz kod yazmayı her zaman ön planda tutuyorum.
            </Text>
        </div>
    );
}
