import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'

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
    <View style={tw(`mb-${marginBottom} mt-${marginTop} text-[${fontSize}]`)}>
      <View style={tw(`flex flex-row items-center`)}>
        <View>
          <View style={tw('w-full h-px bg-neutral-100')}></View>
          <Text style={tw('px-2 py-1')}>{currentYear}</Text>
          <View style={tw('w-full h-px bg-neutral-100')}></View>
        </View>
        <View
          style={tw('flex flex-row justify-between items-center h-10 flex-1')}
        >
          <View style={tw('flex justify-center text-center')}></View>
          {scales.map(({ selected, text }, index) => {
            const background =
              selected && !none ? `bg-${areaColor}` : 'bg-neutral-100'

            const textColor =
              selected && !none ? 'text-white font-semibold' : 'text-gray-400'
            const height = selected && !none ? 'h-10' : 'h-8'

            return (
              <View
                key={index}
                style={tw(
                  `${background} ${height} ${textColor} flex-1 flex justify-center text-center`,
                )}
              >
                <Text>{renderText(text)}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View
        style={tw(
          'flex flex-row justify-between pt-1 px-2 gap-4 items-center text-xs',
        )}
      >
        <Text style={tw('w-10')}></Text>
        {scales.map(({ selected, subText }, index) => {
          const textColor =
            selected && !none ? `text-${areaColor} font-bold` : 'text-gray-400'

          return (
            <Text
              style={tw(`flex-1 text-center ${textColor}`)}
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