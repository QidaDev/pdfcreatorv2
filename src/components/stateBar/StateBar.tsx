import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'

interface StateBarProps {
  scales: {
    selected: boolean
    text: string
    subText: string
  }[]
  areaColor: string
  none: boolean
  currentYear: string
  marginBottom?: number | string
  marginTop?: number | string
  fontSize?: string
}

const StateBar = ({ 
  scales,
  areaColor,
  none,
  currentYear,
  marginBottom = 6,
  marginTop = 0,
  fontSize = '12px',
}: StateBarProps) => {
  return (
    <View style={tw(cleanStyle(`mb-${marginBottom} mt-${marginTop} text-[${fontSize}] text-neutral-900`))} wrap={true}>
      <View style={tw(cleanStyle(`flex flex-row items-center gap-0`))}>
        <View>
          <View style={tw(cleanStyle('w-full h-px bg-neutral-200'))}></View>
          <Text style={tw('px-4 py-1')}>{currentYear}</Text>
          <View style={tw(cleanStyle('w-full h-px bg-neutral-200'))}></View>
        </View>
        <View style={tw(cleanStyle('flex flex-row justify-between items-center h-[23px] flex-1 gap-0 bg-neutral-200'))}>
          <View style={tw('flex justify-center text-center')}></View>
          {scales.map(({ selected, text }, index) => {
            const background = selected && !none ? `bg-${areaColor}` : ''

            const textColor = selected && !none ? 'font-semibold' : 'font-normal'
            const height = selected && !none ? 'h-11' : 'h-[23px]'

            return (
              <View
                key={index}
                style={tw(cleanStyle(`${background} ${height} ${textColor} text-black flex-1 flex justify-center text-center`))}
              >
                <Text>{renderText(text)}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View style={tw(cleanStyle('flex flex-row justify-between pt-2 px-2 gap-4 items-center text-[10px]'))}>
        <Text style={tw('w-10')}></Text>
        {scales.map(({ subText }, index) => {
          return (
            <Text
              style={tw(cleanStyle(`flex-1 text-center`))}
              key={`scale-per-year-${index}`}
            >
              {(!none && renderText(subText)) || ''}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default StateBar