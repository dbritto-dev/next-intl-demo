import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {ReactNode} from 'react';
import {LocalizedStringProvider} from 'react-aria-components/i18n';
import Navigation from '@/components/Navigation';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <LocalizedStringProvider locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
