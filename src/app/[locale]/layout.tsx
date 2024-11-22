import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import BaseLayout from '@/components/BaseLayout';
import {RACI18nProvider} from '@/components/RACI18nProvider';
import {routing} from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'} as never);

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      <RACI18nProvider locale={locale}>{children}</RACI18nProvider>
    </BaseLayout>
  );
}
