import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import iconWarning from '../../assets/images/icon-warning.png'
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
  fontSize = '11px',
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 0,
}: AlertProps) => {
  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} text-black rounded-lg flex flex-row gap-2 items-center p-4 px-4 text-[${fontSize}] bg-warning-50 leading-[${lineHeight}]`)}>
      <Image src={iconWarning} style={tw('w-[16px] h-[16px]')} />
      <Text style={tw('flex-1 ml-2')}>{renderText(text)}</Text>
    </View>
  )
}

export default Alert