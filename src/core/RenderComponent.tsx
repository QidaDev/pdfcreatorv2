/* eslint-disable @typescript-eslint/no-explicit-any */
import PageBreak from '../components/pageBreak/PageBreak'
import HeaderPage from '../components/header/HeaderPage'
import HeaderSection from '../components/header/HeaderSection'
import FooterLogo from '../components/footer/footerLogo/FooterLogo'
import FooterCover from '../components/footer/footerCover/FooterCover'
import Cover from '../components/cover/Cover'
import Index from '../components/Index/Index'
import Text from '../components/text/Text'  
import Title from '../components/title/Title'
import Image from '../components/image/Image'
import Banner from '../components/banner/Banner'
import List from '../components/list/List'
import SectionSummary from '../components/sectionSummary/SectionSummary'
import Alert from '../components/alert/Alert'
import NumberedList from '../components/numberedList/NumberedList'
import TableBlackHeader from '../components/tableBlackHeader/TableBlackHeader'
import StateBar from '../components/stateBar/StateBar'
import Table from '../components/table/Table'
import Cards from '../components/cards/Cards'
import LinkList from '../components/linkList/LinkList'
import ImageBanner from '../components/imageBanner/ImageBanner'
import ContentPanel from '../components/contentPanel/ContentPanel'
import TipList from '../components/tipList/TipList'
import BannerCommunication from '../components/bannerCommunication/BannerCommunication'
import BannerOP from '../components/bannerOP/BannerOP'
import BannerCertified from '../components/bannerCertified/BannerCertified'
import BannerSocialLinks from '../components/bannerSocialLinks/BannerSocialLinks'
import AbsoluteCenter from '../components/absoluteCenter/AbsoluteCenter'

const componentsMap = {
  PageBreak,
  HeaderPage,
  HeaderSection,
  FooterLogo,
  FooterCover,
  Cover,
  Index,
  Text,
  Title,
  Image,
  Banner,
  List,
  SectionSummary,
  Alert,
  NumberedList,
  TableBlackHeader,
  StateBar,
  Table,
  Cards,
  LinkList,
  ImageBanner,
  ContentPanel,
  TipList,
  BannerCommunication,
  BannerOP,
  BannerCertified,
  BannerSocialLinks,
  AbsoluteCenter
} as const

const RenderComponent = (content: any, key: number | string) => {
  const Component = componentsMap[content.type as keyof typeof componentsMap]
  return Component ? <Component key={key} {...content.props} /> : null
}

export default RenderComponent