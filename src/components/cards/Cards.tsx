import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import IconChevronRight from '../../assets/images/icon-chevron-right.png'
import { cleanStyle } from '../../utils/renders'

interface CardsProps {
  title: string
  items: {
    text: string
    description: string
    linkSrc: string
    linkText: string
  }[]
  color: string
  colorLight: string
  linkWidth?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  arrowImage?: string
}

const Cards = ({ 
  title,
  items = [],
  color = 'section-yellow',
  colorLight = 'yellowLight-yellow',
  linkWidth = '110px',
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  arrowImage = IconChevronRight
}: CardsProps) => {
  const backgroundColor = `bg-${colorLight}`
  const buttonColor = `bg-${color}`
  const twoFirstCards = items.slice(0, 2)
  const cardsWithoutTwoFirst = items.slice(2)

  const renderCard = (item: { text: string; description: string; linkSrc: string; linkText: string }, index: number) => {
    return (
      <View wrap={false} key={`${index}_worksheet`} style={tw(`w-[47%] ${backgroundColor} h-auto p-6 mb-6 rounded-lg text-[13px] leading-6 text-black flex flex-col justify-between`)}>
        <View>
          <Text style={tw(cleanStyle(`font-medium`))}>
            {renderText(item.text)}
          </Text>
          <Text style={tw(cleanStyle(`mt-3 font-normal`))}>
            {renderText(item.description)}
          </Text>
        </View>
        <View>
          <Link
            style={tw(cleanStyle(`${buttonColor} w-[${linkWidth}] h-[24px] font-normal rounded-lg mt-5 no-underline flex flex-row items-center justify-center text-[11px] text-black`))}
            src={item.linkSrc}
          >
            <Text style={tw(cleanStyle(`-mb-2`))}>{renderText(item.linkText)}</Text>
            <Image src={arrowImage} style={tw(cleanStyle(`ml-3 w-[14px]`))} />
          </Link>
        </View>
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
          )
        }</View>
        <View style={tw(cleanStyle(`flex flex-row w-full flex-wrap justify-between`))}>
        {twoFirstCards.map((item, index) => renderCard(item, index))}
        </View>
      </View>
      <View style={tw(cleanStyle(`flex flex-row w-full flex-wrap justify-between`))}>
        {cardsWithoutTwoFirst.map((item, index) => renderCard(item, index))}
      </View>
    </View>
  )
}

export default Cards