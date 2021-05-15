import Head from 'next/head'
import Layout from '../components/layout'
import FancyLink from '../components/fancyLink'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - Home</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={fade} className="md:text-right mb-10 md:mb-8 lg:mb-16 relative md:mt-16 lg:mt-20">
          <div className="absolute top-0 left-0 md:relative z-10 md:mb-3 pt-2 md:pt-0">
            <span className="block text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4">Independant</span>
            <span className="block text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 mb-8 md:mb-0">Interaction, Brand, Art Direction</span>

            <a className="items-center text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 flex md:hidden hover:text-red" href="#">
              <span className="h-3 w-3 mt-[-3px] bg-red block rounded-full mr-1"></span>
              <span className="block leading-none">Email</span>
            </a>
          </div>

          <div className="relative pb-20 md:pb-0">
            <img src="/images/hero-mob.jpg" className="w-full block md:hidden" alt="Change Me!" />
            <img src="/images/hero.jpg" className="w-full hidden md:block md:mb-3" alt="Change Me!" />

            <svg className="absolute bottom-0 md:bottom-auto md:top-0 left-0 w-[70%] md:w-[45%] ml-2 md:ml-4 md:mt-[-7.5%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 712.422 360.72"><path data-name="Path 6" d="M77.655 350.7V0H0v350.7zm8.517-95.19c20.043 70.641 76.653 105.21 140.781 105.21 96.693 0 146.292-63.627 146.292-160.32V0H295.59v200.4c0 53.607-24.048 82.665-67.635 82.665-35.07 0-58.116-21.543-70.641-61.623zm499.5-21.042c84.168 0 126.753-56.613 126.753-117.735S669.336 0 585.168 0H396.792v350.7h77.655V234.468zm-111.225-77.655V77.655h112.224c30.06 0 48.1 18.036 48.1 40.08s-18.036 39.078-48.1 39.078z" fill="#db4623"/></svg>
          </div>

          <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 hidden md:inline-block hover:text-red" href="#">
            <span className="flex flex-wrap items-center">
              <span className="md:h-3 lg:h-4 md:w-3 lg:w-4 md:mt-[-3px] lg:mt-[-4px] bg-red block rounded-full mr-1"></span>
              <span className="inline-block leading-none">Email</span>
            </span>
          </a>
        </motion.div>

        <motion.div variants={fade} className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40">
          <div className="flex flex-wrap border-b items-end border-black mb-8 md:mb-10 lg:mb-16">
            <div className="w-1/2 md:w-1/4">
              <span className="block uppercase tracking-tight text-xs md:text-base">(1)</span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Selected Works</span>
            </div>

            <span className="hidden md:block w-1/4 uppercase tracking-tight text-xs md:text-base lg:text-xl">2016—{new Date().getFullYear().toString().substr(-2)}</span>

            <span className="block flex-1 text-right uppercase tracking-tight text-xs md:text-base lg:text-xl">52.9548° N, 1.1581° W</span>
          </div>

          <div className="flex flex-wrap -mx-2 items-center">
            <div className="hidden md:block w-1/2 px-2">
              <img src="/images/ps.jpg" className="w-full" alt="Change Me!" />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <nav>
                <ul className="text-[12vw] md:text-[4.7vw] lg:text-[4.9vw] 2xl:text-[5vw] leading-none tracking-tighter">
                  <li className="block my-1 pb-0">
                    <FancyLink destination="#" label="Reform" a11yText="Reform Project" index="a" />
                  </li>
                  <li className="block my-0 pb-0 text-red">
                    <FancyLink destination="#" label="Paul Smith" a11yText="Reform Project" index="b" />
                  </li>
                  <li className="block my-1 pb-0">
                    <FancyLink destination="#" label="PRB Architects" a11yText="Reform Project" index="c" />
                  </li>
                  <li className="block my-1 pb-0">
                    <FancyLink destination="#" label="Mat Hayward" a11yText="Reform Project" index="d" />
                  </li>
                  <li className="block my-1 pb-0">
                    <FancyLink destination="#" label="Fat Free" a11yText="Reform Project" index="e" />
                  </li>
                  <li className="block my-1 pb-0">
                    <FancyLink destination="#" label="Sam Goddard" a11yText="Reform Project" index="f" />
                  </li>
                  <li className="block my-0 pb-0">
                    <FancyLink destination="#" label="Misc" a11yText="Reform Project" index="g" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fade} className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40">
          <div className="flex md:hidden flex-wrap border-b items-end border-black mb-3 md:mb-12 lg:mb-16">
            <div className="flex-1">
              <span className="block uppercase tracking-tight text-xs md:text-base">(2)</span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Biography</span>
            </div>

            <span className="flex-1 uppercase tracking-tight text-xs md:text-base lg:text-xl text-right">2016—{new Date().getFullYear().toString().substr(-2)}</span>
          </div>

          <div className="flex flex-wrap">
            <div className="hidden md:block w-1/4">
              <span className="block uppercase tracking-tight text-xs md:text-base">(2)</  span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Biography</span>
            </div>
            <div className="w-full md:w-1/2">
              <p className="block tracking-tighter font-book leading-tight text-[6.2vw] md:text-[2.9vw] lg:text-[2.6vw] xl:text-[2.45vw] 2xl:text-[2.2vw] 3xl:text-[2vw] indented-text pr-4 md:pr-0">Donec pellentesque ligula mattis mauris  bibendum, sed sodales arcu ornare. Quisque dictum turpis est, at efficitur ex fringilla id. Maecenas pharetra sodales dictum. Sed posuere neque in tortor tincidunt, et mollis metus mattis. Suspendisse diam lacus, mattis porta tempus nec, maximus non massa. Sed a elit quis dolor.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fade} className="px-2 md:px-4 mb-4">
          <div className="flex flex-wrap items-end">
            <div className="w-full md:w-1/3 lg:w-1/4 order-2 md:order-1">
              <div className="max-w-sm md:max-w-xs">
                <p className="text-base md:text-lg tracking-tight font-book leading-tight mb-8 indented-text">Donec pellentesque ligula mattis mauris bibendum, sed sodales arcu ornare. Quisque dictum turpis est, at efficitur ex fringilla id. Maecenas pharetra sodales dictum. Sed posuere neque in tortor  tincidunt, et mollis metus mattis. Suspendisse diam lacus, mattis porta tempus nec, maximus non massa.</p>

                <a href="#" className="underline mb-1 block text-lg md:text-2xl tracking-tight font-book leading-tight hover:text-red">
                  Instagram
                </a>
                <a href="#" className="underline mb-1 block text-lg md:text-2xl tracking-tight font-book leading-tight hover:text-red">Dribbble</a>
                <a href="#" className="underline block text-lg md:text-2xl tracking-tight font-book leading-tight hover:text-red">Email</a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 md:ml-auto order-1 md:order-2 mb-16 md:mb-0">
              <ul className="text-sm md:text-lg tracking-tight font-book leading-none border-t border-black">
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block">Awwwards</span><span className="block text-right ml-auto">Site Of The Day</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block align-top">Awwwards <span className="text-[7px] md:text-2xs align-top">(2)</span></span><span className="block text-right ml-auto">Mobile Of The Day</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block align top">CSSDA <span className="text-[7px] md:text-2xs align-top">(3)</span></span><span className="block text-right ml-auto">Site Of The Day</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block">CSSDA</span><span className="block text-right ml-auto">Innovation, Interface, Experience</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block align-top">Admire The Web <span className="text-[7px] md:text-2xs align-top">(3)</span></span><span className="block text-right ml-auto">Featured Site</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block align-top">Mindsparkle <span className="text-[7px] md:text-2xs align-top">(3)</span></span><span className="block text-right ml-auto">Site Of The Day</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block">Typewolf</span><span className="block text-right ml-auto">Featured Site</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block align-top">SiteInspire <span className="text-[7px] md:text-2xs align-top">(2)</span></span><span className="block text-right ml-auto">Featured Site</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-black">
                  <span className="block">Codrops</span><span className="block text-right ml-auto">Site Of The Week</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  )
}
