import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight } from '../../config/global'

interface BannerCertifiedProps {
  text: string
  image: string
  fontSize?: number | string
  lineHeight?: number | string
  marginBottom?: number | string
  marginTop?: number | string
}

const BannerCertified = ({ 
  text,
  image,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 5,
}: BannerCertifiedProps) => {
  return (
    <View style={tw(`flex flex-col px-14 gap-6 text-[${fontSize}] leading-[${lineHeight}] mb-${marginBottom} mt-${marginTop}`)}>
      <View style={tw('w-full h-1 bg-neutral-100')} />
      <View style={tw('flex flex-row gap-10 items-center')}>
        <Image style={tw('h-60')} src={image} />
        <Text style={tw('flex-1 italic')}>{renderText(text)}</Text>
      </View>
      <View style={tw('w-full h-1 bg-neutral-100')} />
    </View>
  )
}

export default BannerCertified