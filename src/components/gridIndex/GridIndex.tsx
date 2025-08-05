import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'

interface GridIndexProps {
  items: Array<{
    title?: string
    text?: string
  }>
}

const GridIndex = ({ 
  items,
}: GridIndexProps) => {
  return (
    <View style={tw('flex flex-row justify-between flex-wrap gap-8 pt-8 w-full')}>
      {items.map((item, index) => {
        return (
          <View key={index} style={tw('flex flex-col gap-4 w-[45%]')}>
            <View style={tw('flex flex-row items-center gap-4')}>
              <Text style={tw('font-bold text-black text-[14px] w-[10px]')}>
                {index + 1}
              </Text>
              <View style={tw('w-1 h-8 bg-secondary rounded-full')} />
              {item.title && (
                <Text style={tw('font-bold text-black text-[14px]')}>
                  {item.title}
                </Text>
              )}
            </View>
            {item.text && (
              <Text style={tw(`text-black ml-12 text-[11px]`)}>
                {item.text}
              </Text>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default GridIndex