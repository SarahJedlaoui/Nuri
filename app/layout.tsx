import './globals.css';
import Navbar from './components/Navbar2/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Nuri',
  description: 'Nuri AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      
        {children}
      </body>
    </html>
  )
}
