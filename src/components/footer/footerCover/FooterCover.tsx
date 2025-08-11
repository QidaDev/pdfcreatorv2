import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../../utils/tailwind'

import QidaLogo from '../../../assets/images/qida_logo.png'

import { styles as footerStyles } from '../styles'
import { styles } from './styles'
import { renderText, cleanStyle } from '../../../utils/renders'

interface FooterCoverProps {
  name: string
  role: string
  logo: string
}

const FooterCover = ({
  name,
  role,
  logo = QidaLogo
}: FooterCoverProps) => {
  return (
    <View fixed style={tw(cleanStyle(`${footerStyles.footerWrapper} ${styles.footerCoverWrapper}`))}>
      <View style={tw(cleanStyle(`${styles.footerCoverText}`))}>
        <Text>Realizado por: <Text style={tw(cleanStyle(`font-bold`))}>{renderText(name)}</Text></Text>
        <Text style={tw(cleanStyle(`italic`))}>{renderText(role)}</Text>
      </View>
      <Image style={tw(cleanStyle(`${styles.footerCoverLogo}`))} src={logo} />
    </View>
  )
}

export default FooterCover 

