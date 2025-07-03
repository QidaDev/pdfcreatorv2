/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFooterType = (section: any[]): string | undefined => {
  const hasFooterCover = section.some(content => content.type === 'FooterCover')
  const hasFooterLogo = section.some(content => content.type === 'FooterLogo')
  return hasFooterCover ? 'FooterCover' : hasFooterLogo ? 'FooterLogo' : undefined
}