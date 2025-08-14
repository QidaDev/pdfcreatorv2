import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import { defaultFontSize } from '../../config/global'
import { RightArrowSvg } from '../../assets/images/right-arrow'

interface TableListProps {
  tableRows: [
    [string]
  ]
  tableHeader: string[]
  roundedCorners?: boolean
  headerCompressed?: boolean
  headerColor?: string
  rowColor?: string
  fontSize?: string
  marginBottom?: number
  marginTop?: number
  cellBottomPadding?: number
  cellHaveRightArrow?: boolean
  cellRightArrowColor?: string
}

const TableList = ({ 
  tableRows, 
  tableHeader, 
  roundedCorners = false,
  headerCompressed = false,
  headerColor = "grey",
  rowColor = "midGrey",
  fontSize = defaultFontSize,
  marginBottom = 12,
  marginTop = 0,
  cellBottomPadding = 0,
  cellHaveRightArrow = false,
  cellRightArrowColor = "#f0f0f0",
}: TableListProps) => {
  return (
    <View style={tw(cleanStyle(`gap-2 flex flex-col justify-center mb-${marginBottom} mt-${marginTop} text-[${fontSize}] text-center text-black font-bold`))}>
      <View wrap={false} style={tw(cleanStyle('flex flex-row justify-center gap-2'))}>
        {tableHeader.map((tableHeader, cellIndex) => (
          <View key={`header-${cellIndex}`} style={tw(cleanStyle(`${roundedCorners ? 'rounded-md' : ''} flex justify-center items-center bg-${headerColor} text-white ${headerCompressed ? 'pt-2 pb-4' : 'h-[62px]'}  flex-1`))}>
            <Text style={tw(cleanStyle('uppercase'))}>
              {renderText(tableHeader)}
            </Text>
          </View>
        ))}
      </View>
      {tableRows.map((tableRow, rowIndex) => {
        return (
          <View wrap={false} style={tw(cleanStyle(`flex flex-row justify-center gap-2`))} key={`row-${rowIndex}`}>
            {tableRow.map((tableCell, cellIndex) => {
              const isFirstCell = cellIndex === 0

              return (
                <View key={`cell-${cellIndex}`} style={tw(cleanStyle(`p-4 ${roundedCorners ? 'rounded-md' : ''} bg-${rowColor} h-full flex-1 pb-${cellBottomPadding}`))}>
                  <View style={tw(cleanStyle(isFirstCell ? '' : 'font-normal text-left flex flex-row gap-2'))}>
                    {cellIndex !== 0 && cellHaveRightArrow && (
                      <RightArrowSvg
                        style={tw(cleanStyle('mt-[2px]'))}
                        width="10px"
                        height="10px"
                        color={cellRightArrowColor}
                      />
                    )}
                    <Text style={tw(cleanStyle(`flex-1`))}>{renderText(tableCell)}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

export default TableList