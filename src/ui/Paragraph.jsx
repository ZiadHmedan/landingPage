// eslint-disable-next-line react/prop-types
export default function Paragraph({children,moreStyles}) {
    let style = `font-normal text-smm   leading-xs md:text-base text-darkGrayishBlue   md:leading-xss xl:text-left `
    style += moreStyles;
  return (
    <p className={style}>{children}</p>
  )
}
