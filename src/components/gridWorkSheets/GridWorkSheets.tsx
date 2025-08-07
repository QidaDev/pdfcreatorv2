import { Text, View, Link } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { RightArrowSvg } from '../../assets/images/right-arrow'
import { renderText } from '../../utils/renders'

interface GridWorkSheetsProps {
  title: string
  items: {
    text: string
    description: string
    linkSrc: string
    linkText: string
  }[]
  color: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const GridWorkSheets = ({ 
  title,
  items = [],
  color = 'yellow',
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: GridWorkSheetsProps) => {
  const backgroundColor = `bg-sectionLight-${color}`
  const borderColor = `border-section-${color}`
  const buttonColor = `bg-section-${color}`

  return (
    <View style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      <View>
        {title && (
          <Text style={tw(`text-[13px] tracking-widest font-bold pt-4 pb-5`)}>
            {renderText(title)}
          </Text>
        )}
      </View>
      <View style={tw('flex flex-row w-full flex-wrap justify-between')}>
        {items.map((item, index) => {
          return (
            <View
              key={`${index}_worksheet`}
              style={tw(`w-[47%] ${backgroundColor} border-b-4 p-3 ${borderColor} mb-6`)}
            >
              <Text style={tw('text-[13px] leading-6 font-bold mt-3')}>
                {renderText(item.text)}
              </Text>

              <Text style={tw('leading-6 mt-3 text-[12px]')}>
                {renderText(item.description)}
              </Text>
              <View>
                <Link
                  style={tw(`${buttonColor} w-32 py-2 px-3 rounded-full my-6 text-white no-underline text-base flex flex-row items-center justify-between`)}
                  src={item.linkSrc}
                >
                  <Text>{renderText(item.linkText)}</Text>
                  <RightArrowSvg
                    style={tw('ml-4')}
                    width="18px"
                    height="18px"
                    color={`#ffffff`}
                  />
                </Link>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default GridWorkSheets