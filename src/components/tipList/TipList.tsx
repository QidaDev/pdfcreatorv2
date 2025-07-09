/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import RenderComponent from '../../core/RenderComponent'
import { defaultFontSize } from '../../config/global'

interface TipListProps {
  title: string
  content?: string | React.ReactNode
  fontSize?: number | string
  color?: string
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
}

const TipList = ({ 
  title,
  content,
  fontSize = defaultFontSize,
  color = 'neutral-500',
  marginBottom = 8,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: TipListProps) => {
  return (
    <View wrap={false} style={tw(`w-auto flex flex-row mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight} text-[${fontSize}] text-neutral-900`)}>
      <View style={tw(`w-1 h-full bg-${color}`)} />
      <View style={tw('flex flex-col py-3 flex-1 ml-10')} >
        <Text style={tw(`font-medium mb-8`)}>{title}</Text>
        <View style={tw(`flex flex-col gap-2`)}>
          {content && (
            <>
              {Array.isArray(content) ? (
                content.map((content, key) => (RenderComponent(content, `${key}`))) 
              ) : ( 
                <Text>{renderText(content as string)}</Text>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  )
}

export default TipList