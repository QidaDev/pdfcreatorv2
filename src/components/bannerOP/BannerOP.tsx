import { Text, View, Image, Link } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight, pagePadding } from '../../config/global'

interface BannerCommunicationProps {
  fullName: string
  professionalTitle: string
  academicTitle: string
  collegiateNo: string
  items: {
    image: string
    text?: string
    linkSrc?: string
    linkText?: string
  }[]
  image: string
  fontSize?: number | string
  lineHeight?: number | string
  backgroundColor?: string
  marginBottom?: number | string
  marginTop?: number | string
}

const BannerCommunication = ({ 
  fullName,
  professionalTitle,
  academicTitle,
  collegiateNo,
  items,
  image,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  backgroundColor = 'neutral-100',
  marginBottom = 5,
  marginTop = 3,
}: BannerCommunicationProps) => {
  return (
    <View style={tw(`bg-${backgroundColor} flex flex-row px-12 py-8 gap-4 items-center text-[${fontSize}] leading-[${lineHeight}] mb-${marginBottom} mt-${marginTop} ml-[-${pagePadding.left}] mr-[-${pagePadding.right}]`)}>
      <View style={tw('flex items-center justify-center')}>
        <Image style={tw('w-24 h-24 rounded-full')} source={image} />
      </View>
      <View style={tw('flex-1 flex flex-col gap-2 border-r border-gray-400 px-4')}>
        <Text style={tw('text-primary text-lg font-semibold leading-5')}>
          {renderText(fullName)}
        </Text>
        <Text style={tw('text-gray-400')}>
          {renderText(professionalTitle)}
        </Text>
        <Text style={tw('mt-4')}>{renderText(academicTitle)}</Text>
        <Text>{renderText(collegiateNo)}</Text>
      </View>
      <View style={tw('flex-1 flex flex-col gap-2 px-4')}>
        {items.map((item, index) => (
          <View key={index} style={tw('flex flex-row gap-4')}>
            <Image style={tw('w-6 h-6')} src={item.image} />
            <View style={tw('flex flex-col gap-2')}>
              {(item.linkSrc && item.linkText) && (
                <Link style={tw('font-semibold no-underline text-black')} src={item.linkSrc}>
                  {renderText(item.linkText)}
                </Link>
              )}
              {item.text && (
                <Text style={tw('font-semibold')}>{renderText(item.text)}</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default BannerCommunication