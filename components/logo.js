import { useEffect, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Logo() {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.logo')

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        progressBar.style.transform = `scale(${1 - (progress / 20.75)})`
        console.log(progress * 3)

        if ((progress * 3) >= 55) {
          progressBar.style.transform = `scale(0.115)`
        }
      })
    }
  }, [scroll])

  return (
    <div>
      <svg className="logo w-full origin-top-left pointer-events-none " viewBox="0 0 712.422 360.72"><path data-name="Path 6" d="M77.655 350.7V0H0v350.7Zm8.517-95.19c20.043 70.641 76.653 105.21 140.781 105.21 96.693 0 146.292-63.627 146.292-160.32V0H295.59v200.4c0 53.607-24.048 82.665-67.635 82.665-35.07 0-58.116-21.543-70.641-61.623Zm499.5-21.042c84.168 0 126.753-56.613 126.753-117.735S669.336 0 585.168 0H396.792v350.7h77.655V234.468Zm-111.225-77.655V77.655h112.224c30.06 0 48.1 18.036 48.1 40.08s-18.036 39.078-48.1 39.078Z" fill="#db4623"/></svg>
    </div>
  )
}