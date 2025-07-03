import { Text, View, Image, Link } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight, pagePadding } from '../../config/global'

interface BannerSocialLinksProps {
  links: {
    src: string
    image: string
    text: string
  }[]
  fontSize?: number | string
  lineHeight?: number | string
  color?: string
  backgroundColor?: string
  marginBottom?: number | string
  marginTop?: number | string
}

const BannerSocialLinks = ({ 
  links,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  color = 'primary-DEFAULT',
  backgroundColor = 'neutral-100',
  marginBottom = 5,
  marginTop = 5,
}: BannerSocialLinksProps) => {
  return (
    <View style={tw(`p-2 bg-${backgroundColor} flex flex-row justify-evenly text-[${fontSize}] leading-[${lineHeight}] mb-${marginBottom} mt-${marginTop} ml-[-${pagePadding.left}] mr-[-${pagePadding.right}]`)}>
      {links.map((link, index) => (
        <Link key={index} src={link.src} style={tw(`flex flex-row items-center gap-1 no-underline text-${color}`)}>
          <Image style={tw('w-10 h-10')} src={link.image} />
          <Text>{renderText(link.text)}</Text>
        </Link>
      ))}
    </View>
  )
}

export default BannerSocialLinks