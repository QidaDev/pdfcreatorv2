import { Font } from '@react-pdf/renderer'
import AeonikLight from "../assets/fonts/Aeonik-Light.ttf"
import AeonikLightItalic from "../assets/fonts/Aeonik-LightItalic.ttf"
import AeonikRegular from "../assets/fonts/Aeonik-Regular.ttf"
import AeonikRegularItalic from "../assets/fonts/Aeonik-RegularItalic.ttf"
import AeonikMedium from "../assets/fonts/Aeonik-Medium.ttf"
import AeonikMediumItalic from "../assets/fonts/Aeonik-MediumItalic.ttf"
import AeonikBold from "../assets/fonts/Aeonik-Bold.ttf"
import AeonikBoldItalic from "../assets/fonts/Aeonik-BoldItalic.ttf"
import AeonikBlack from "../assets/fonts/Aeonik-Black.ttf"
import AeonikBlackItalic from "../assets/fonts/Aeonik-BlackItalic.ttf"

export const registerFonts = () => {
  Font.register({
    family: 'Montserrat',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-Thin.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-Regular.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-Italic.ttf',
        fontStyle: 'italic',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-SemiBold.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-Bold.ttf',
        fontWeight: 700,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-ExtraBold.ttf',
        fontWeight: 800,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@typopro/web-montserrat@3.7.5/TypoPRO-Montserrat-Black.ttf',
        fontWeight: 900,
      },
    ],
  })

  Font.register({
    family: 'Aeonik',
    fonts: [
      {
        src: AeonikLight,
        fontWeight: 300,
      },
      {
        src: AeonikLightItalic,
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        src: AeonikRegular,
        fontWeight: 400,
      },
      {
        src: AeonikRegularItalic,
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        src: AeonikMedium,
        fontWeight: 500,
      },
      {
        src: AeonikMediumItalic,
        fontWeight: 500,
        fontStyle: 'italic',
      },
      {
        src: AeonikBold,
        fontWeight: 700,
      },
      {
        src: AeonikBoldItalic,
        fontWeight: 700,
        fontStyle: 'italic',
      },
      {
        src: AeonikBlack,
        fontWeight: 900,
      },
      {
        src: AeonikBlackItalic,
        fontWeight: 900,
        fontStyle: 'italic',
      },
    ],
  })

  const hyphenationCallback = (word: string): string[] => {
    return [word]
  }

  Font.registerHyphenationCallback(hyphenationCallback)
} 