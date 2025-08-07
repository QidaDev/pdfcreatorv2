import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'

interface TableBlackHeaderProps {
  title: string
  list: {
    label: string
    content: string
  }[]
  fontSize?: string
  headerColor?: string
  marginBottom?: number | string
  marginTop?: number | string
}

const TableBlackHeader = ({ 
  title,
  list,
  fontSize = '12px',
  headerColor = 'primary-DEFAULT',
  marginBottom = 6,
  marginTop = 0,
}: TableBlackHeaderProps) => {
  return (
    <View style={tw(cleanStyle(`flex flex-col gap-3 mb-${marginBottom} mt-${marginTop} text-[${fontSize}]`))} wrap={false}>
      <View style={tw(cleanStyle(`p-3 flex justify-center items-center bg-${headerColor} text-white text-center font-bold`))}>
        <Text>{renderText(title)}</Text>
      </View>
      <View style={tw(cleanStyle('border-t border-neutral-200'))}>
        {list.map(({ label, content }) => (
          <View key={`table-header-${label}`}>
            <View style={tw(cleanStyle('w-full flex flex-row justify-between text-black border-b border-neutral-200'))}>
              <View style={tw(cleanStyle('flex-1 p-2 pb-10 font-semibold h-full'))}>
                <Text>{renderText(label)}</Text>
              </View>
              <View style={tw(cleanStyle('flex-1 p-2 pb-10 bg-neutral-100 h-full'))}>
                <Text>{renderText(content)}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default TableBlackHeader