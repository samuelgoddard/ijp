import ImageWrapper from './image-wrapper'

export default function Teaser({ slug, imageSrc, imageWidth, imageHeight, title, disciplines, inverse }) {
  return (
    <div className={`block w-full group transform ${ inverse ? '' : 'translate-x-3 md:translate-x-0' }`}>
      {/* ${i%2 == 0 ? '-translate-x-3 md:translate-x-0' : 'translate-x-3 md:translate-x-0'} */}

      <div className={`overflow-hidden mb-4 transform ${ inverse ? '-translate-x-3 md:translate-x-0' : '' }`}>
        <div className="transform md:group-hover:scale-[1.05] md:group-focus:scale-[1.05] transition-transform ease-in-out duration-[750ms]">
          <ImageWrapper
            image={imageSrc} 
            layout="responsive"
            className="w-full transform"
            widthOverride={imageWidth}
            heightOverride={imageHeight}
          />
        </div>
      </div>

      <span className="block font-sans text-2xl md:text-2xl xl:text-2xl tracking-tighter leading-none mb-1 md:group-hover:text-red md:group-focus:text-red transition-colors ease-in-out duration-500">{title}</span>
      <span className="block tracking-tight text-xs md:text-sm font-serif italic">{disciplines}</span>
    </div>
  )
}