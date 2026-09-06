import {theme} from '@/styles/theme';
import Text from '@/components/common/Text';

export default function ContactContent() {
    return (
        <Text
            style={{
                maxWidth: theme.layout.readableWidth,
            }}
        >
            Yeni bir proje fikriniz mi var veya sadece merhaba mı demek
            istiyorsunuz? Aşağıdaki formu kullanarak veya sosyal medya üzerinden
            bana ulaşabilirsiniz.
        </Text>
    );
}
