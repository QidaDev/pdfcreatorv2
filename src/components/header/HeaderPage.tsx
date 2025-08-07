import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { styles } from './styles'
import { cleanStyle } from '../../utils/renders'

export interface HeaderPageInterface {
  title?: string
  smallText?: string
  personName?: string
  date?: string
  showHeaderOnEveryPage?: boolean
  showSectionTitleOnEveryPage?: boolean
}

const HeaderPage = ({ 
  title, 
  smallText = "",
  personName = "", 
  date = "",
  showHeaderOnEveryPage = true,
  showSectionTitleOnEveryPage = false
}: HeaderPageInterface) => {
  return (
    <>
      <View fixed={showHeaderOnEveryPage}>
        <Text style={tw(cleanStyle(`${styles.headerText}`))}>
          {smallText}
        </Text>
      </View>
      <View fixed={(showHeaderOnEveryPage && showSectionTitleOnEveryPage)}>
        {title && (
          <View style={tw(cleanStyle(`${styles.headerTitleWrapper}`))}>
            <Text style={tw(cleanStyle(`${styles.headerTitle}`))}>
              {title}
            </Text>
            <View style={tw(cleanStyle(`${styles.headerDate}`))}>
              <Text style={tw(cleanStyle(`${styles.headerDateText}`))}>
                <Text>{date}</Text>
              </Text>
              <Text style={tw(cleanStyle(`${styles.headerPersonName}`))}>{personName}</Text>
            </View>
          </View>
        )}
        <View style={tw(cleanStyle(`${styles.headerLine}`))}></View>
      </View>
    </>
  )
}

export default HeaderPage 
