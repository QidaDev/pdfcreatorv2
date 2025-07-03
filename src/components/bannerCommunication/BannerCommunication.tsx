import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight, pagePadding } from '../../config/global'

interface BannerCommunicationProps {
  title: string
  text: string
  items: {
    image: string
    title: string
    text: string
  }[]
  image: string
  fontSize?: number | string
  lineHeight?: number | string
  backgroundColor?: string
  marginBottom?: number | string
  marginTop?: number | string
}

const BannerCommunication = ({ 
  title,
  text,
  items,
  image,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  backgroundColor = 'neutral-100',
  marginBottom = 5,
  marginTop = 3,
}: BannerCommunicationProps) => {
  return (
    <View style={tw(`bg-${backgroundColor} flex flex-col gap-12 p-12 pb-0 text-[${fontSize}] leading-[${lineHeight}] mb-${marginBottom} mt-${marginTop} ml-[-${pagePadding.left}] mr-[-${pagePadding.right}]`)}>
      <View style={tw('flex flex-col gap-4')}>
        <Text style={tw('text-[16px] font-semibold mb-4')}>{renderText(title)}</Text>
        <Text style={tw('')}>{renderText(text)}</Text>
      </View>
      <View style={tw('flex flex-row gap-16')}>
        <Image style={tw('flex-1')} src={image} />
        <View style={tw('flex-1 flex flex-col gap-8')}>
          {items.map((item, index) => (
            <View key={index} style={tw('flex flex-row items-center gap-4')}>
              <Image style={tw('w-6 h-6')} src={item.image} />
              <View style={tw('flex flex-col gap-2 flex-1')}>
                <Text style={tw('font-semibold')}>{renderText(item.title)}</Text>
                {item.text && (
                  <Text>{renderText(item.text)}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default BannerCommunication