import { View } from '@react-pdf/renderer'
import RenderComponent from '../../core/RenderComponent'

interface UnbreakableProps {
  content: React.ReactNode[]
}

const Unbreakable = ({ 
  content,
}: UnbreakableProps) => {
  if (!content || content.length === 0) return null

  return (
    <View wrap={false}>
      {content.map((content, key) => (RenderComponent(content, `${key}`)))}
    </View>
  )
}

export default Unbreakable