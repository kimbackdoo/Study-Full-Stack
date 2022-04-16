import { ReactNode } from 'react'
import Footer from '@components/Footer'

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
