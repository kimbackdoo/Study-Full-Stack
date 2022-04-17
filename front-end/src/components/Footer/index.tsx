import Icon from '@components/Icon'

function Footer() {
    return (
        <footer className="flex items-center justify-between h-20">
            <span className="font-bold text-sm">Copyright ⓒ 김재훈 All rights reserved.</span>
            <div className="flex items-center h-full">
                <a
                    className="w-7 h-7 hover:animate-bounce"
                    target="_blank"
                    href="https://www.notion.so/KimJeaHun-d6ab9bf0c9ae490aafe05e9e40099d06"
                    rel="noopener noreferrer"
                >
                    <Icon icon="notion" />
                </a>
                <a
                    className="ml-2 w-7 h-7 hover:animate-bounce"
                    target="_blank"
                    href="https://github.com/kimbackdoo"
                    rel="noopener noreferrer"
                >
                    <Icon icon="github" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
