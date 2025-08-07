import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { Bulb } from '../../assets/images/bulb'
import { IconLaunch } from '../../assets/images/icon-launch'

interface LinkListProps {
  title: string
  list: {
    text: string
    linkSrc: string
    linkText: string
  }[]
  color: string
  iconColor: string
  iconSrc: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const LinkList = ({ 
  title,
  list = [],
  iconColor = '',
  iconSrc = '',
  marginBottom = 6,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: LinkListProps) => {
  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      <View>
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
              <View style={tw('w-auto h-px bg-neutral-100')}></View>
            )}
            <View style={tw('flex flex-row items-center justify-between text-[13px] p-3')}>
              <View style={tw('flex-1 flex flex-row items-center text-black')}>
                {iconSrc ? <Image src={iconSrc} style={tw('w-[20px] h-[20px]')} /> : <Bulb height="20" width="20" color={iconColor} />}
                <Text style={tw('flex-1 ml-8')}>{renderText(link.text)}</Text>
              </View>
              <View style={tw('ml-5')}>
                <Link src={link.linkSrc} style={tw(`text-neutral-900 flex flex-row items-center font-semibold`)}>
                  <Text style={tw('mr-3 -mt-1')}>{renderText(link.linkText)}</Text>
                  <IconLaunch height="13" width="13" />
                </Link>
              </View>
            </View>
            <View style={tw('w-auto h-px bg-neutral-100')}></View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default LinkList