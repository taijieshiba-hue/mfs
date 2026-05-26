import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata = {
  title: 'MFS',
  description: 'MFS WORLDWIDE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}