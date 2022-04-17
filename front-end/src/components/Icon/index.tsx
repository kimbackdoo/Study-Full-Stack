import Image from 'next/image'
import { IconName, iconPath } from '@components/Icon/constants'

interface IconProps {
    icon: IconName
    width?: number
    height?: number
}

function Icon({ icon, width = 24, height = 24 }: IconProps) {
    return <Image src={iconPath[icon]} alt="아이콘 svg" width={width} height={height} />
}

export default Icon
