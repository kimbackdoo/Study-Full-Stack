import { ReactNode } from 'react'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
