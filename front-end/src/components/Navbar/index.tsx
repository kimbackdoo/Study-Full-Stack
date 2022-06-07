import Icon from '@components/Icon'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <Link href="/">
                <a>
                    <Icon icon="logo" width={50} height={50} />
                </a>
            </Link>
            <div>
                <Link href="/sign-in">
                    <a className="p-2 rounded-md shadow-lg bg-indigo-200 font-bold text-slate-600 hover:text-black transition-all">
                        로그인
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
