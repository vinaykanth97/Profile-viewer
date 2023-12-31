
import Header from './components/Header'
import { FormContextProvider } from './components/formContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <FormContextProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[linear-gradient(0deg,_#fff,_#fff_42%,_#fff)]	text-zink-500 text-2xs`}>
          <Header />
          {children}
        </body>
      </html>
    </FormContextProvider>
  )
}
