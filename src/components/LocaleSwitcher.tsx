import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((switchLocale) => (
        <option key={switchLocale} value={switchLocale}>
          {t('locale', {locale: switchLocale.replace('-', '_')})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
