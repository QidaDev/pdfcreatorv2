import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import { defaultFontSize } from '../../config/global'
import { RightArrowSvg } from '../../assets/images/right-arrow'

interface TableProps {
  tableRows: [
    [string]
  ]
  tableHeader: string[]
  roundedCorners?: boolean
  headerCompressed?: boolean
  headerColor?: string
  headerTextColor?: string
  rowColor?: string
  fontSize?: string
  contentFontSize?: string
  contentLineHeight?: string
  marginBottom?: number
  marginTop?: number
  cellBottomPadding?: number
  cellHaveRightArrow?: boolean
  cellRightArrowColor?: string
}

const Table = ({ 
  tableRows, 
  tableHeader, 
  roundedCorners = false,
  headerCompressed = false,
  headerColor = "primary-DEFAULT",
  headerTextColor = "white",
  rowColor = "neutral-100",
  fontSize = defaultFontSize,
  contentFontSize = defaultFontSize,
  contentLineHeight = '1',
  marginBottom = 12,
  marginTop = 0,
  cellBottomPadding = 4,
  cellHaveRightArrow = false,
  cellRightArrowColor = "#f0f0f0",
}: TableProps) => {
  return (
    <View style={tw(cleanStyle(`gap-2 flex flex-col justify-center mb-${marginBottom} mt-${marginTop} text-[${fontSize}] text-center text-neutral-900 font-bold`))}>
      <View wrap={false} style={tw(cleanStyle('flex flex-row justify-center gap-2'))}>
        {tableHeader.map((tableHeader, cellIndex) => (
          <View key={`header-${cellIndex}`} style={tw(cleanStyle(`${roundedCorners ? 'rounded-md' : ''} flex justify-center items-center bg-${headerColor} text-${headerTextColor} ${headerCompressed ? 'py-3' : 'h-[62px]'}  flex-1`))}>
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
                <View key={`cell-${cellIndex}`} style={tw(cleanStyle(`py-3 px-5 ${roundedCorners ? 'rounded-md' : ''} bg-${rowColor} h-full flex-1 pb-${cellBottomPadding}`))}>
                  <View style={tw(cleanStyle(`text-left ${isFirstCell ? '' : 'font-normal flex flex-row gap-2'} text-[${contentFontSize}] leading-[${contentLineHeight}]`))}>
                    {cellIndex !== 0 && cellHaveRightArrow && (
                      <RightArrowSvg
                        style={tw('mt-[2px]')}
                        width="10px"
                        height="10px"
                        color={cellRightArrowColor}
                      />
                    )}
                    <View style={tw(cleanStyle(`flex-1`))}>{renderText(tableCell)}</View>
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

export default Table