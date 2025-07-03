import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'

interface LinkListProps {
  title: string
  list: {
    text: string
    linkSrc: string
    linkText: string
  }[]
  color: string
  iconColor: string
  icon: "idea" | "request"
  src: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const LinkList = ({ 
  title,
  list = [],
  color = 'section-yellow',
  iconColor = 'yellow',
  icon = 'idea',
  src = '',
  marginBottom = 6,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: LinkListProps) => {
  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      <View style={tw('')}>
        {title && (
          <Text style={tw(`text-[13px] tracking-widest font-bold pt-4 pb-5`)}>
            {renderText(title)}
          </Text>
        )}
      </View>
      <View wrap={true} style={tw('flex flex-col')}>
        {list.map((link, index) => (
          <View key={index}>
            {index === 0 && (
              <View style={tw('w-auto h-px bg-neutral-100 ml-10')}></View>
            )}
            <View style={tw('flex flex-row items-center justify-between text-[13px] py-3')}>
              <View style={tw('flex-1 flex flex-row items-center text-black')}>
                <Image src={src || `images/link-list/${icon}-${iconColor}.png`} style={tw('w-[25px] h-[25px]')} />
                <Text style={tw('flex-1 ml-2')}>{renderText(link.text)}</Text>
              </View>
              <View style={tw('ml-5 mr-10')}>
                <Link src={link.linkSrc} style={tw(`text-${color} font-bold no-underline`)}>
                  {renderText(link.linkText)}
                </Link>
              </View>
            </View>
            <View style={tw('w-auto h-px bg-neutral-100 ml-10')}></View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default LinkList