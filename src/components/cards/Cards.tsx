import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import RightArrowSvg from '../../assets/images/icon-chevron-right.png'

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
}: CardsProps) => {
  const backgroundColor = `bg-${colorLight}`
  const buttonColor = `bg-${color}`

  return (
    <View wrap={false} style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      <View>
        {title && (
          <Text style={tw(`text-[13px] tracking-widest font-bold pt-4 pb-5`)}>
            {renderText(title)}
          </Text>
        )}
      </View>
      <View wrap={false} style={tw('flex flex-row w-full flex-wrap justify-between')}>
        {items.map((item, index) => {
          return (
            <View key={`${index}_worksheet`} style={tw(`w-[47%] ${backgroundColor} h-auto p-6 mb-6 rounded-lg text-[13px] leading-6 text-black flex flex-col justify-between`)}>
              <View>
                <Text style={tw('font-medium')}>
                  {renderText(item.text)}
                </Text>
                <Text style={tw('mt-3 font-normal')}>
                  {renderText(item.description)}
                </Text>
              </View>
              <View>
                <Link
                  style={tw(`${buttonColor} w-[${linkWidth}] h-[24px] font-normal rounded-lg mt-5 no-underline flex flex-row items-center justify-center text-[11px] text-black`)}
                  src={item.linkSrc}
                >
                  <Text style={tw('-mb-2')}>{renderText(item.linkText)}</Text>
                  <Image src={RightArrowSvg} style={tw('ml-3 w-[14px]')} />
                </Link>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Cards