import Link from 'next/link'

export default function fancyLink( {destination, a11yText, label, extraClasses, index} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${extraClasses} hover:text-red flex items-start`}>
        <span className="block">{label}</span>
        { index && (<span className="block text-[1.25vw] xl:text-[1.1vw] uppercase ml-1 mt-[0.65vw]">({index})</span>)}
      </a>
    </Link>
  )
}