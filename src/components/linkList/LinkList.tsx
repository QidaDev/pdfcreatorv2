import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { Bulb } from '../../assets/images/bulb'
import { IconLaunch } from '../../assets/images/icon-launch'
import { cleanStyle } from '../../utils/renders'

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
  marginBottom = 10,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: LinkListProps) => {
  const firstLink = list[0]
  const listWithoutFirstLink = list.slice(1)

  const renderLink = (link: { text: string; linkSrc: string; linkText: string}, index: number, isFirst: boolean = false ) => {
    return (
      <View key={index} wrap={false}>
        {isFirst && (
          <View style={tw(cleanStyle(`w-auto h-px bg-neutral-100`))}></View>
        )}
        <View style={tw(cleanStyle(`w-full flex flex-row items-center justify-between text-[13px] p-3`))}>
          <View style={tw(cleanStyle(`w-full flex flex-row items-center text-black`))}>
            {iconSrc ? <Image src={iconSrc} style={tw(cleanStyle(`w-[20px] h-[20px]`))} /> : <Bulb height="20" width="20" color={iconColor} />}
            <Text style={tw(cleanStyle(`flex-1 ml-8`))}>{renderText(link.text)}</Text>
          </View>
          <View style={tw(cleanStyle(`ml-5 w-auto`))}>
            <Link src={link.linkSrc} style={tw(`text-neutral-900 items-center font-normal flex flex-row w-auto`)}>
              <Text style={tw(cleanStyle(`mr-3 -mt-1 block`))}>{renderText(link.linkText)}</Text>
              <View style={tw(cleanStyle(`ml-3`))}>
                <IconLaunch height="13" width="13" />
              </View>
            </Link>
          </View>
        </View>
        <View style={tw(cleanStyle(`w-auto h-px bg-neutral-100`))}></View>
      </View>
    )
  }

  return (
    <View style={tw(cleanStyle(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`))}>
      <View wrap={false}>
        <View>
          {title && (
            <Text style={tw(cleanStyle(`text-[13px] tracking-widest font-bold pt-4 pb-5`))}>
              {renderText(title)}
            </Text>
          )}
        </View>
        <View style={tw(cleanStyle(`flex flex-col`))}>
          {renderLink(firstLink, 0, true)}
        </View>
      </View>
      <View style={tw(cleanStyle(`flex flex-col`))}>
        {listWithoutFirstLink.map((link, index) => renderLink(link, index, false))}
      </View>
    </View>
  )
}

export default LinkList