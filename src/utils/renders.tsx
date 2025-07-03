import { Text, Link } from '@react-pdf/renderer'
import { tw } from './tailwind'
import { Image } from '@react-pdf/renderer'
import List from '../components/list/List'

export const renderText = (text: string | undefined) => {
  if (!text) return ''

  const parts = text.split(/(<bold>.*?<\/bold>|<b>.*?<\/b>|<italic>.*?<\/italic>|<underline>.*?<\/underline>|<boldunderline>.*?<\/boldunderline>|<bolditalic>.*?<\/bolditalic>|<br>|<image src='.*?'>|<ul>.*?<\/ul>|<a href='.*?'>.*?<\/a>)/g)

  return parts.map((part, index) => {
    if (part === '<br>') {
      return '\n'
    }
    if (part.startsWith('<a href=') && part.endsWith('>')) {
      const link = part.match(/href='(.*?)'/)?.[1] || ''
      const text = part.replace(/<a href='.*?'>|<\/a>/g, '')
      return (
        <Link src={link} key={index}>{text}</Link>
      )
    }
    if (part.startsWith('<ul>') && part.endsWith('</ul>')) {
      const listItems = part
        .replace(/<\/?ul>/g, '')
        .split('</li>')
        .filter(item => item.trim() !== '')
        .map(item => item.replace(/<li>/g, '').trim())

      return (
        <List key={index} items={listItems} fontSize="10px" lineHeight="1" marginLeft="[-20px]" marginRight={4} marginBottom={0} />
      )
    }
    if (part.startsWith('<image src=') && part.endsWith('>')) {
      const imageSrc = part.match(/src='(.*?)'/)?.[1] || ''
      return (
        <Image src={imageSrc} key={index} />
      )
    }
    if (part.startsWith('<bold>') && part.endsWith('</bold>') || part.startsWith('<b>') && part.endsWith('</b>')) {
      const boldText = part.replace(/<\/?bold>|<\/?b>/g, '')
      return (
        <Text key={index} style={tw(`font-bold`)}>
          {boldText}
        </Text>
      )
    }
    if (part.startsWith('<italic>') && part.endsWith('</italic>')) {
      const italicText = part.replace(/<\/?italic>/g, '')
      return (
        <Text key={index} style={tw(`italic`)}>
          {italicText}
        </Text>
      )
    }
    if (part.startsWith('<underline>') && part.endsWith('</underline>')) {
      const underlineText = part.replace(/<\/?underline>/g, '')
      return (
        <Text key={index} style={tw(`underline`)}>
          {underlineText}
        </Text>
      )
    }
    if (part.startsWith('<boldunderline>') && part.endsWith('</boldunderline>')) {
      const boldUnderlineText = part.replace(/<\/?boldunderline>/g, '')
      return (
        <Text key={index} style={tw(`font-bold underline`)}>
          {boldUnderlineText}
        </Text>
      )
    }
    if (part.startsWith('<bolditalic>') && part.endsWith('</bolditalic>')) {
      const boldItalicText = part.replace(/<\/?bolditalic>/g, '')
      return (
        <Text key={index} style={tw(`font-bold italic`)}>
          {boldItalicText}
        </Text>
      )
    }
    return <Text key={index}>{part}</Text>
  })
}