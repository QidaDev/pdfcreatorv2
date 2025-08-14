import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import { defaultLineHeight } from '../../config/global'
import IconWarning from '../../assets/images/icon-warning.png'

interface AlertProps {
  text: string
  fontSize?: string
  lineHeight?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  icon?: string
}

const Alert = ({ 
  text,
  fontSize = '11px',
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 0,
  icon = IconWarning
}: AlertProps) => {
  return (
    <View wrap={false} style={tw(cleanStyle(`mb-${marginBottom} mt-${marginTop} text-black rounded-lg flex flex-row gap-2 items-center p-4 px-4 text-[${fontSize}] bg-warning-50 leading-[${lineHeight}]`))}>
      <Image src={icon} style={tw(cleanStyle(`w-[16px] h-[16px]`))} />
      <Text style={tw(cleanStyle(`flex-1 ml-2`))}>{renderText(text)}</Text>
    </View>
  )
}

export default Alert