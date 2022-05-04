// import { useEffect, useState } from "react";
// import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function EmailReveal() {
  // const { scroll } = useLocomotiveScroll()
  // let progressBar = null;

  // Monitor Page Scroll Progress Percent
  // useEffect(() => {
  //   progressBar = document.querySelector('.logo')

  //   if (scroll) {
  //     scroll.on('scroll', ({ limit, scroll }) => {
  //       const progress = scroll.y / limit.y * 100
  //       progressBar.style.transform = `scale(${100 - (progress * 3)}%)`

  //       if ((progress * 3) >= 90) {
  //         progressBar.style.transform = `scale(0.1)`
  //       }
  //     })
  //   }
  // }, [scroll])

  return (
    <div className="fixed right-0 top-0 w-[45%] mr-4 mt-4 hidden z-[100] text-right md:flex" data-scroll data-scroll-sticky data-scroll-target="#test">
      <a className="items-center text-2xl lg:text-3xl font-book tracking-tighter leading-tight flex hover:text-red ml-auto" href="mailto:hello@shiftwalk.studio">
        <span className="h-3 w-3 mt-[-3px] bg-red block rounded-full mr-1"></span>
        <span className="block leading-none overflow-hidden">
          <span className="block">Email</span>
        </span>
      </a>
    </div>
  )
}