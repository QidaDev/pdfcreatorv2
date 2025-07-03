import { Text as TextComponent, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight } from '../../config/global'

interface TextProps {
  text: string
  fontSize?: string
  lineHeight?: string
  color?: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const Text = ({ 
  text,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  color = 'black',
  marginBottom = 5,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0
}: TextProps) => {
  const paragraphs = text.split(/<p>(.*?)<\/p>/g).filter(Boolean)

  return (
    <View>
      {paragraphs.map((paragraph, index) => (
        <TextComponent key={index} style={tw(`text-${color} text-[${fontSize}] leading-[${lineHeight}] mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
          {renderText(paragraph)}
        </TextComponent>
      ))}
    </View>
  )
}

export default Text