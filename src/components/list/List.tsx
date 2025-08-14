import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight } from '../../config/global'
import CheckboxChecked from '../../assets/images/checkbox--checked.png'

interface ListProps {
  items: string[]
  fontSize?: string | null
  lineHeight?: string | null
  itemsSeparation?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  haveCheckbox?: boolean
  checkboxImage?: string
}

const List = ({ 
  items,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  itemsSeparation = 0,
  marginBottom = 5,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  haveCheckbox = false,
  checkboxImage = CheckboxChecked
}: ListProps) => {
  if (!items || !items.length || !Array.isArray(items)) return null

  return (
    <View style={tw(cleanStyle(`flex flex-col gap-2 mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`))}>
      {items?.map((item, index) => {
        return (
          <View key={index} style={tw(cleanStyle(`flex flex-row gap-2 ${haveCheckbox ? '' : ''} ${fontSize ? `text-[${fontSize}]` : ''} ${lineHeight ? `leading-[${lineHeight}]` : ''}  mb-${itemsSeparation}`))}>
            {haveCheckbox ? <Image src={checkboxImage} style={tw(cleanStyle(`w-4 h-4 mt-0.5`))} /> : <Text>•</Text>}
            <Text style={tw(cleanStyle('flex-1'))}>{renderText(item)}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default List