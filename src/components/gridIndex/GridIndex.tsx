import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'

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
    <View style={tw(cleanStyle(`flex flex-row justify-between flex-wrap gap-8 pt-8 w-full`))}>
      {items.map((item, index) => {
        return (
          <View key={index} style={tw(cleanStyle(`flex flex-col gap-4 w-[45%]`))}>
            <View style={tw(cleanStyle(`flex flex-row items-center gap-4`))}>
              <Text style={tw(cleanStyle(`font-bold text-black text-[14px] w-[10px]`))}>
                {index + 1}
              </Text>
              <View style={tw(cleanStyle(`w-1 h-8 bg-secondary rounded-full`))} />
              {item.title && (
                <Text style={tw(cleanStyle(`font-bold text-black text-[14px]`))}>
                  {renderText(item.title)}
                </Text>
              )}
            </View>
            {item.text && (
              <Text style={tw(cleanStyle(`text-black ml-12 text-[11px]`))}>
                {renderText(item.text)}
              </Text>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default GridIndex