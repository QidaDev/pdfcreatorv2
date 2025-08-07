import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../../utils/tailwind'

import QidaLogo from '../../../assets/images/qida_logo_text_es.png'
import QidaLogoCat from '../../../assets/images/qida_logo_text_cat.png'

import { styles as footerStyles } from '../styles'
import { styles } from './styles'
import { cleanStyle } from '../../../utils/renders'

const isLangEs = true
const getLogoSource = isLangEs ? QidaLogo : QidaLogoCat
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
