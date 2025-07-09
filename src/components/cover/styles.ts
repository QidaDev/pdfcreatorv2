import { pagePadding } from '../../config/global'

export const styles = {
  coverWrapper: `
    text-base
    mt-[${pagePadding.top}]
    ml-[-${pagePadding.left}]
    mr-[-${pagePadding.right}]
  `,

  coverTitleWrapper: `
    px-[${pagePadding.left}]
    flex
    flex-row
    justify-between
  `,

  coverTitle: `
    leading-5
    font-normal
    text-[28px]
    text-primary-DEFAULT
  `,

  coverRoundedTag: `
    border-[3px]
    border-solid
    border-[#ff8a5d]
    m-auto
    w-[100px]
    h-[100px]
    rounded-full
    bg-[#ffffff]
    p-[3px]
  `,

  coverRoundedTagInner: `
    w-full
    h-full
    rounded-full
    bg-[#ffe8df]
    flex
    items-center
    justify-center
  `,

  coverRoundedTagText: `
    m-auto
    text-center
    font-bold
    text-[#ff8a5d]
    text-base
  `,

  coverImageWrapper: `
    py-8
  `,

  coverImage: `
    flex
    flex-row
    flex-wrap
  `,

  coverBottomWrapper: `
    px-[${pagePadding.left}]
    flex
    flex-row
    justify-between
  `,

  coverBottomLeftText1: `
    tracking-wider
    font-semibold
    text-primary-DEFAULT
  `,

  coverBottomLeftText2: `
    font-medium
  `,

  coverBottomRightText1: `
    ml-auto
  `,

  coverBottomRightText2: `
    ml-auto
  `,

}