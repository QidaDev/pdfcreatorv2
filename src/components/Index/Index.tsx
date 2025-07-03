import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { letters } from '../../config/global'

interface IndexProps {
  items: Array<{
    title?: string
    text?: string
  }>
  color?: string
  titleFontSize?: number | string
  fontSize?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  oneColumn?: boolean
  withLetters?: boolean
}

const Index = ({ 
  items,
  color = 'secondary',
  titleFontSize = '14px',
  fontSize = '11px',
  marginBottom = 5,
  marginTop = 0,
  oneColumn = false,
  withLetters = false
}: IndexProps) => {
  return (
    <View style={tw(`flex flex-row justify-between flex-wrap gap-8 pt-8 w-full mb-${marginBottom} mt-${marginTop}`)}>
      {items.map((item, index) => {
        return (
          <View key={index} style={tw(`flex flex-col ${oneColumn ? 'w-full' : 'w-[45%]'}`)}>
            <View style={tw('flex flex-row items-center gap-4')}>
              <Text style={tw(`font-bold text-neutral-900 text-center text-[${titleFontSize}] w-[10px]`)}>
                {withLetters ? letters[index] : index + 1}
              </Text>
              <View style={tw(`w-1 h-12 bg-${color} rounded-full`)} />
              {item.title && (
                <Text style={tw(`font-bold text-neutral-900 text-[${titleFontSize}]`)}>
                  {item.title}
                </Text>
              )}
            </View>
            {item.text && (
              <Text style={tw(`text-neutral-900 ml-12 text-[${fontSize}]`)}>
                {item.text}
              </Text>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default Index