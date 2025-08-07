import { Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import { defaultLineHeight, defaultTitleFontSize } from '../../config/global'

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
    <Text style={tw(cleanStyle(`mt-${marginTop} mb-${marginBottom} ml-${marginLeft} mr-${marginRight} text-${color} text-[${fontSize}] font-bold leading-[${lineHeight}] ${trackingWidest ? 'tracking-widest' : ''}`))}>
      {renderText(text)}
    </Text>
  )
}

export default Title