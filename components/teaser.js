import ImageWrapper from './image-wrapper'

export default function Teaser({ slug, imageSrc, imageWidth, imageHeight, title, disciplines, inverse }) {
  return (
    <div className={`block w-full group transform ${ inverse ? '' : 'translate-x-3 md:translate-x-0' }`}>
      {/* ${i%2 == 0 ? '-translate-x-3 md:translate-x-0' : 'translate-x-3 md:translate-x-0'} */}

      <div className={`overflow-hidden mb-4 transform ${ inverse ? '-translate-x-3 md:translate-x-0' : '' }`}>
        <div className="transform group-hover:scale-[1.05] group-focus:scale-[1.05] transition-transform ease-in-out duration-500">
          <ImageWrapper
            image={imageSrc} 
            layout="responsive"
            className="w-full transform"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>

      <span className="block font-sans text-2xl md:text-2xl xl:text-2xl tracking-tighter leading-none mb-1 group-hover:text-red group-focus:text-red transition-colors ease-in-out duration-300">{title}</span>
      <span className="block tracking-tight text-xs md:text-sm font-serif italic">{disciplines}</span>
    </div>
  )
}