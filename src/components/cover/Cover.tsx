import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'

import { styles } from './styles'
import { renderText } from '../../utils/renders'

interface CoverProps {
  title?: string
  subtitle?: string
  image?: string
  roundedTag?: string
  bottomLeftText1?: string
  bottomLeftText2?: string
  bottomRightText1?: string
  bottomRightText2?: string
}

const Cover = ({ 
  title,
  subtitle,
  image,
  roundedTag,
  bottomLeftText1,
  bottomLeftText2,
  bottomRightText1,
  bottomRightText2
}: CoverProps) => {
  return (
    <View style={tw(styles.coverWrapper)}>
      <View style={tw(styles.coverTitleWrapper)}>
        <View>
          <Text style={tw(`${styles.coverTitle} font-bold`)}>
            {renderText(title)}
          </Text>
          <Text style={tw(styles.coverTitle)}>
            {renderText(subtitle)}
          </Text>
        </View>
        {roundedTag && (
          <View>
            <View style={tw(styles.coverRoundedTag)}>
              <View style={tw(styles.coverRoundedTagInner)}>
                <Text style={tw(styles.coverRoundedTagText)}>{renderText(roundedTag)}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={tw(styles.coverImageWrapper)}>
        <View style={tw(styles.coverImage)}>
          <Image src={image} />
        </View>
      </View>
      <View style={tw(styles.coverBottomWrapper)}>
        <View>
          <Text style={tw(styles.coverBottomLeftText1)}>
            {renderText(bottomLeftText1)}
          </Text>
          <Text style={tw(styles.coverBottomLeftText2)}>{renderText(bottomLeftText2)}</Text>
        </View>
        <View>
          <Text style={tw(styles.coverBottomRightText1)}>
            {renderText(bottomRightText1)}
          </Text>
          <Text style={tw(styles.coverBottomRightText2)}>
            {renderText(bottomRightText2)}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Cover 