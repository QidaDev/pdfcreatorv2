import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import RenderComponent from '../../core/RenderComponent'

interface AbsoluteCenterProps {
  content?: string | React.ReactNode
}

const AbsoluteCenter = ({ 
  content,
}: AbsoluteCenterProps) => {
  return (
    <View wrap={false} style={tw(`flex flex-col justify-center items-center text-center h-full`)}>
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
  )
}

export default AbsoluteCenter