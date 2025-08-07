import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText, cleanStyle } from '../../utils/renders'
import RenderComponent from '../../core/RenderComponent'
import { defaultFontSize, defaultTitleFontSize } from '../../config/global'
import { Bulb } from '../../assets/images/bulb'

interface ContentPanelProps {
  title: string
  content: string | React.ReactNode
  fontSize?: number | string
  titleFontSize?: number | string
  icon?: string
  color?: string
  colorLight?: string
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
}

const ContentPanel = ({ 
  title,
  content = undefined,
  fontSize = defaultFontSize,
  titleFontSize = defaultTitleFontSize,
  icon,
  color = 'neutral-500',
  colorLight = 'neutral-100',
  marginBottom = 8,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: ContentPanelProps) => {
  return (
    <View wrap={false} style={tw(cleanStyle(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`))}>
      {title && (
      <View style={tw(cleanStyle(`py-3 px-3 flex flex-row justify-between text-black items-center font-medium text-[${titleFontSize}] bg-${color}`))}>
        <Text style={tw(cleanStyle('mt-[-1px]'))}>{title}</Text>
        {icon ? <Image src={icon} style={tw(cleanStyle('w-[18px] h-[18px]'))} /> : <Bulb height="18" width="18" color="black" />}
      </View>
      )}
      { content && (
        <View style={tw(cleanStyle(`bg-${colorLight} p-4 text-[${fontSize}] ${!title ? 'rounded-lg' : ''}`))}>
          {Array.isArray(content) ? (
            content.map((content, key) => (RenderComponent(content, `${key}`))) 
          ) : ( 
            <Text>{renderText(content as string)}</Text>
          )}
        </View>
      )}
    </View>
  )
}

export default ContentPanel