import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight, pagePadding } from '../../config/global'

interface ImageBannerProps {
  title: string
  text: string
  src: string
  color?: string
  fontSize?: number | string
  lineHeight?: number | string
  marginBottom?: number | string
  marginTop?: number | string
}

const ImageBanner = ({ 
  title,
  text,
  src,
  color = 'neutral-100',
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 0,
}: ImageBannerProps) => {
  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} px-24 py-10 flex flex-row gap-4 items-center justify-center bg-${color} ml-[-${pagePadding.left}] mr-[-${pagePadding.right}]`)}>
      <Image src={src} style={tw('w-[120px] h-auto')} />
      <View style={tw(`flex-1 text-[${fontSize}] leading-[${lineHeight}]`)}>
        <Text style={tw('font-bold')}>{renderText(title)}</Text>
        <Text style={tw('pt-2')}>{renderText(text)}</Text>
      </View>
    </View>
  )
}

export default ImageBanner