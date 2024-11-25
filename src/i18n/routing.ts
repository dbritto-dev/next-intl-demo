import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-GB', 'en', 'es'],
  defaultLocale: 'en-GB',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'en-GB': '/uk',
      en: '/us',
      es: '/es'
    }
  }
});

export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
