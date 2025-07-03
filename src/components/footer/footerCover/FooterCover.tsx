import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../../utils/tailwind'

import QidaLogo from '../../../assets/images/qida_logo.png'

import { styles as footerStyles } from '../styles'
import { styles } from './styles'
import { renderText } from '../../../utils/renders'

interface FooterCoverProps {
  name: string
  role: string
}

const FooterCover = ({
  name,
  role
}: FooterCoverProps) => {
  return (
    <View fixed style={tw(`${footerStyles.footerWrapper} ${styles.footerCoverWrapper}`)}>
      <View style={tw(`${styles.footerCoverText}`)}>
        <Text>Realizado por: <Text style={tw(`font-bold`)}>{renderText(name)}</Text></Text>
        <Text style={tw(`italic`)}>{renderText(role)}</Text>
      </View>
      <Image style={tw(`${styles.footerCoverLogo}`)} src={QidaLogo} />
    </View>
  )
}

export default FooterCover 
