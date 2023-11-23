import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HelpFila',
  description: 'Site principal do HelpFila',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href="/icon-removebg-preview.png" type="image/<generated>" sizes="<generated>"/>
    </html>
  )
}
