
import Img from 'next/image'
import sanity from '../services/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { useState } from 'react';

export default function ImageWrapper({ image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption, fill, lerped }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(90)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};
  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return (
    <figure className={`image ${className} ${fill && 'cover-image' }`}>
		  <Img
        {...imageProps}
        {...attributes}
        quality={90}
        priority={priority}
        className={`${className} ${(imageIsLoaded || priority) ? 'opacity-100' : 'opacity-0'} ${priority ? 'opacity-100' : ''} transition-opacity duration-1000 ease-in-out will-change`}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
      
      {(image.caption && layout !== 'fill' && !noCaption) && (
        <figcaption className="text-xs mt-2">"{image.caption}"</figcaption>
      )}
    </figure>
	)
}
