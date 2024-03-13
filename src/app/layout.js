import { Providers } from './_store/provider';
import Header from './_lib/components/Header/Header';

import './styles/typography.css';

export const metadata = {
  title: 'InstaPayments',
  description: 'Developed by Pratham',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Header HeaderTitle="InstaPayments"/>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
