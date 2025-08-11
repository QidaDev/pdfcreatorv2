import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../../utils/tailwind'

import { styles as footerStyles } from '../styles'
import { styles } from './styles'
import { cleanStyle } from '../../../utils/renders'
import QidaLogoTextEs from '../../../assets/images/qida_logo_text_es.png'
import QidaLogoTextCat from '../../../assets/images/qida_logo_text_cat.png'

const isLangEs = true
const getLogoSource = isLangEs ? QidaLogoTextEs : QidaLogoTextCat
const logoHeight = isLangEs ? 16 : 29
const footerHeight = logoHeight + 18

const FooterLogo = () => {
  return (
    <View fixed style={tw(cleanStyle(`${footerStyles.footerWrapper} h-[${footerHeight}px]`))}>
      <Image
        style={tw(cleanStyle(`${styles.footerLogo} h-[${logoHeight}px]`))}
        src={getLogoSource}
      />
      <Text style={tw(cleanStyle(`${footerStyles.footerPageNumber}`))} render={({ pageNumber }) => pageNumber} />
    </View>
  )
}

export default FooterLogo 
