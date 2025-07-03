import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight, pagePadding } from '../../config/global'

interface BannerProps {
  text: string
  fontSize?: number | string
  lineHeight?: number | string
  color?: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const Banner = ({ 
  text,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  color = 'primary-DEFAULT',
  marginBottom = 5,
  marginTop = 3,
  marginLeft = `[-${pagePadding.left}]`,
  marginRight = `[-${pagePadding.right}]`
}: BannerProps) => {
  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} flex flex-col justify-center items-center text-center px-12 py-6 bg-${color} min-h-[60px] ml-${marginLeft} mr-${marginRight}`)}>
      <Text style={tw(`text-white font-black text-[${fontSize}] leading-[${lineHeight}]`)}>{renderText(text)}</Text>
    </View>
  )
}

export default Banner