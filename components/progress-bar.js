import { useEffect, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ProgressBar() {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.progress-bar__progress')

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        progressBar.style.width = `${progress}%`
      })
    }
  }, [scroll])

  return(
    <div className="hidden lg:block fixed top-0 left-0 right-0 w-full h-[4px] progress-bar z-[1000]">
      <div className="progress-bar__progress absolute top-0 left-0 bottom-0 h-full w-[0px] bg-red bg-opacity-100"></div>
    </div>
  )
}