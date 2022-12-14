import '../styles/globals.css'
import footer from '../components/common/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {children} <footer />
      </body>
    </html>
  )
}
