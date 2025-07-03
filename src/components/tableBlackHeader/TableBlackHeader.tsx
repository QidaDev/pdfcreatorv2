import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'

interface TableBlackHeaderProps {
  title: string
  list: {
    label: string
    content: string
  }[]
  fontSize?: string
  marginBottom?: number | string
  marginTop?: number | string
}

const TableBlackHeader = ({ 
  title,
  list,
  fontSize = '12px',
  marginBottom = 6,
  marginTop = 0,
}: TableBlackHeaderProps) => {
  return (
    <View style={tw(`flex flex-col gap-6 mb-${marginBottom} mt-${marginTop} text-[${fontSize}]`)} wrap={false}>
      <View style={tw(`p-2 h-10 flex justify-center items-center bg-black text-white text-center font-semibold`)}>
        <Text style={tw(``)}>{title}</Text>
      </View>
      <View>
        {list.map(({ label, content }, index) => (
          <View key={`table-header-${label}`}>
            {index === 0 && (
              <View style={tw('w-full h-px bg-neutral-100')}></View>
            )}
            <View style={tw('w-full flex flex-row justify-between text-black')}>
              <View style={tw('flex-1 p-2 pb-10 font-semibold h-full')}>
                <Text>{renderText(label)}</Text>
              </View>
              <View style={tw('flex-1 p-2 pb-10 bg-gray-200 h-full')}>
                <Text>{renderText(content)}</Text>
              </View>
            </View>
            <View style={tw('w-full h-px bg-neutral-100')}></View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default TableBlackHeader