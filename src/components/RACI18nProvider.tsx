'use client';

import type {I18nProviderProps} from 'react-aria';
import * as RAC from 'react-aria-components';

export function RACI18nProvider({children, locale}: I18nProviderProps) {
  return <RAC.I18nProvider locale={locale}>{children}</RAC.I18nProvider>;
}
