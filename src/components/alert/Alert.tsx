import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { Warning as WarningIcon } from '../../assets/images/warning'
import { defaultLineHeight } from '../../config/global'

interface AlertProps {
  text: string
  fontSize?: string
  lineHeight?: number | string
  marginBottom?: number | string
  marginTop?: number | string
}

const Alert = ({ 
  text,
  fontSize = '10.6px',
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 0,
}: AlertProps) => {
  return (
    <View style={tw(`mb-${marginBottom} mt-${marginTop} flex flex-row gap-2 items-center p-3 px-4 text-[${fontSize}] bg-[#FFF2CC] leading-[${lineHeight}]`)}>
      <WarningIcon />
      <Text style={tw('flex-1')}>{renderText(text)}</Text>
    </View>
  )
}

export default Alert