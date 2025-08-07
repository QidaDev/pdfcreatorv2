import { Text } from '@react-pdf/renderer'
import { defaultLineHeight, defaultTitleFontSize } from '../../config/global'
import { renderText } from '../../utils/renders'
import { tw } from '../../utils/tailwind'

interface TitleProps {
  text: string
  color?: string
  level?: number
  fontSize?: string
  lineHeight?: string
  trackingWidest?: boolean
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  id?: string
}

const Title = ({ 
  text,
  color = 'black',
  fontSize = defaultTitleFontSize,
  lineHeight = defaultLineHeight,
  trackingWidest = true,
  marginBottom = 6,
  marginTop = 8,
  marginLeft = 0,
  marginRight = 0,
  id,
}: TitleProps) => {
  return (
    <Text style={tw(`mt-${marginTop} mb-${marginBottom} ml-${marginLeft} mr-${marginRight} text-${color} text-[${fontSize}] font-bold leading-[${lineHeight}] ${trackingWidest ? 'tracking-widest' : ''}`)} id={id}>
      {renderText(text)}
    </Text>
  )
}

export default Title