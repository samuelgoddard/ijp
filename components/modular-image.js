
export default function ModularImage({layout, caption, image}) {
  return (
    <>
      { layout === 'left' && (
        <div className="w-full mb-12 md:mb-32 lg:mb-48">
          <div className="w-full lg:w-11/12 flex flex-wrap items-end md:-mx-2">
            <div className="w-full md:w-7/12 lg:w-8/12 md:px-2 mb-2 md:mb-0">
              <div className="w-full bg-red">
                <img src={image ? image.asset.url : null} className="w-full" alt="Change Me!" />
              </div>
            </div>
            { caption && (
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap">
                <span className="md:w-full block md:mb-12 text-sm md:text-base font-serif italic">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">{caption}</p>
              </div>
            )}
          </div>
        </div>
      )}

      { layout === 'center' && (
        <div className="w-full mb-12 md:mb-32 lg:mb-48 flex flex-wrap justify-center">
          <div className="w-full md:w-10/12 flex flex-wrap items-end">
            <div className={`w-full md:px-2 mb-2 md:mb-0 ${caption ? 'md:w-7/12 lg:w-8/12' : ''}`}>
              <div className="w-full bg-red">
                <img src={image ? image.asset.url : null} className="w-full" alt="Change Me!" />
              </div>
            </div>
            { caption && (
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap">
                <span className="md:w-full block md:mb-12 text-sm md:text-base font-serif italic">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">{caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      { layout === 'right' && (
        <div className="w-full mb-12 md:mb-32 lg:mb-48">
          <div className="w-full lg:w-11/12 flex flex-wrap items-start md:-mx-2">
            { caption && (
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap order-2 md:order-1">
                <span className="md:w-full block md:mb-12 text-sm md:text-base font-serif italic">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">{caption}</p>
              </div>
            )}

            <div className="w-full md:w-7/12 lg:w-8/12 md:px-2 mb-2 md:mb-0 order-1 md:order-2">
              <div className="w-full bg-red">
                <img src={image ? image.asset.url : null} className="w-full" alt="Change Me!" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}