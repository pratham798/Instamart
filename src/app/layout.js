import { Providers } from './_store/provider';

export const metadata = {
  title: 'InstaPayments',
  description: 'Developed by Pratham',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
