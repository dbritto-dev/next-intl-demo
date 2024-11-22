import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-GB', 'en-US', 'es'],
  defaultLocale: 'en-GB',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-GB': '/uk',
      'en-US': '/us',
      es: '/es'
    }
  }
});

export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
