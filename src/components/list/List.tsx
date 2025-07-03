import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight } from '../../config/global'
import CheckboxChecked from '../../assets/images/checkbox--checked.png'

interface ListProps {
  items: string[]
  fontSize?: string
  lineHeight?: string
  itemsSeparation?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  haveCheckbox?: boolean
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
  haveCheckbox = false
}: ListProps) => {
  if (!items || !items.length || !Array.isArray(items)) return null

  return (
    <View style={tw(`flex flex-col gap-2 mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      {items?.map((item, index) => {
        return (
          <View key={index} style={tw(`flex flex-row gap-2 ${haveCheckbox ? '' : ''} text-[${fontSize}] leading-[${lineHeight}] mb-${itemsSeparation}`)}>
            {haveCheckbox ? <Image src={CheckboxChecked} style={tw('w-4 h-4 mt-0.5')} /> : <Text>•</Text>}
            <Text>{renderText(item)}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default List