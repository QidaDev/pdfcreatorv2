import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { styles } from './styles'
import { pagePadding } from '../../config/global'
import { renderText } from '../../utils/renders'

export interface HeaderSectionInterface {
  title?: string
  color?: string
  smallText?: string
  tags?: {
    text: string
    color?: string
    selected?: boolean
    selectedFontColor?: string
  }[]
  showHeaderOnEveryPage?: boolean
  showSectionTitleOnEveryPage?: boolean
}

const HeaderSection = ({ 
  title = '', 
  color = "secondary",
  smallText = "", 
  tags = [],
  showHeaderOnEveryPage = true,
  showSectionTitleOnEveryPage = false
}: HeaderSectionInterface) => {
  return (
    <>
      <View fixed={showHeaderOnEveryPage}>
        <Text style={tw(`${styles.headerText}`)}>
          {smallText}
        </Text>
      </View>
      <View fixed={(showHeaderOnEveryPage && showSectionTitleOnEveryPage)} style={tw('mt-[-8px]')}>
        <View style={tw(`flex flex-row justify-between items-center mb-6 ml-[-${pagePadding.left}] mr-[-${pagePadding.right}]`)}>
          <View style={tw(`flex flex-row w-[50%] pl-12 py-8 bg-${color}`)}>
            <View
              style={tw(`flex flex-row items-center text-[20px] font-black`)}
            >
              <Text style={tw('text-black')}>{renderText(title)}</Text>
            </View>
          </View>
          <View style={tw('w-[45%] text-[12px] pr-12')}>
            {tags && tags.length > 0 && (
              <View style={tw('flex flex-row items-center')}>
                {tags.map((tag, index) => {
                  const selectedFontColor = tag.selectedFontColor || 'white'
                  const tagColor = tag.selected ? `bg-${tag.color} text-${selectedFontColor} font-bold` : 'text-black'
                  const lastStyles = index === tags.length - 1 ? 'border-r-0' : ''

                  return (
                    <View key={index} style={tw(`flex flex-row items-center p-3 px-4 border-r w-1/3 justify-center border-neutral-300 ${tagColor} ${lastStyles}`)}>
                      <Text>{renderText(tag.text)}</Text>
                    </View>
                  )
                })}
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  )
}

export default HeaderSection 
