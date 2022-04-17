import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <Link href="/">
                <a>this is log area (go to home)</a>
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
