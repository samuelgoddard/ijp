import Head from 'next/head'
import Layout from '../components/layout'
import FancyLink from '../components/fancyLink'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - Project</title>
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
        <motion.div variants={fade} className="h-[100vh] relative flex flex-wrap bg-red text-off-white">
          <div className="relative z-20 pt-2 md:pt-3 flex flex-wrap w-full">
            <span className="block text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 relative z-20">
              <FancyLink destination="/" label="All Projects" />
            </span>
            <span className="block text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 ml-auto text-right"><span className="block md:inline-block">IJP—22</span> <span className="hidden md:inline-block">/</span> <span className="block md:inline-block">Paul Smith</span></span>
          </div>

          <div className="relative overflow-hidden w-full self-end mt-auto mb-4">
            <h1 className="text-[26vw] md:text-[30vw] md:ml-[-35%] relative z-20 font-display tracking-[-0.075em] md:whitespace-nowrap leading-negative">Paul Smith</h1>
            
            <div className="relative z-20 px-2 md:px-4 w-full">
              <ul className="text-sm md:text-lg tracking-tight font-book leading-none border-t border-off-white w-full">
                <li className="mb-0 py-3 flex flex-wrap border-b border-off-white">
                  <span className="block">Client</span><span className="block text-right ml-auto">Paul Smith</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-off-white">
                  <span className="block">Years</span><span className="block text-right ml-auto">2017—19</span>
                </li>
                <li className="mb-0 py-3 flex flex-wrap border-b border-off-white">
                  <span className="block">Disciplines</span><span className="block text-right ml-auto">Art Direction, Interactive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <img src="/images/ps-hero.jpg" className="w-full h-full object-cover object-center md:mb-3" alt="Change Me!" />
          </div>
        </motion.div>

        <motion.div variants={fade} className="bg-black text-off-white pt-12 md:pt-20 lg:pt-32 pb-4 md:pb-12 3xl:pb-16 3xl:pb-20 px-2 md:px-4">
          {/* Abstract */}
          <div className="flex flex-wrap border-b items-end border-off-white mb-20 md:mb-24 lg:mb-32 pb-1 md:pb-0">
            <div className="w-1/2 md:w-1/4">
              <span className="block uppercase tracking-tight text-xs md:text-base">(1)</span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Abstract</span>
            </div>

            <span className="block flex-1 text-right uppercase tracking-tight text-5xl md:text-[9vw] lg:text-[8vw] text-red mb-[-6px]">(B)</span>
          </div>

          <div className="flex flex-wrap w-full max-w-3xl -mx-5">
            <p className="md:w-1/2 px-5 text-base tracking-tight font-book leading-snug mb-6">Paul Smith is one of Britain’s most iconic fashion brands, with stores located in cities all over the world. To help make their online e-commerce experience as slick as the physical, I’ve been working with their</p>
            
            <p className="md:w-1/2 px-5 text-base tracking-tight font-book leading-snug mb-6">internal team to tackle key user experience challenges and establish and evolve their existing visual language.</p>
          </div>

          <div className="w-full md:w-11/12 mb-20 md:mb-32 lg:mb-48">
            <img src="/images/hero.jpg" className="w-full" alt="Change Me!" />
          </div>

          {/* Details */}
          <div className="flex flex-wrap w-full mb-20 md:mb-32 lg:mb-48">
            <div className="flex md:hidden flex-wrap w-full border-b items-end border-off-white mb-3 md:mb-12 lg:mb-16 pb-1 md:pb-0">
              <div className="flex-1">
                <span className="block uppercase tracking-tight text-xs md:text-base">(2)</span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Detail</span>
              </div>
            </div>

            <div className="hidden md:block w-1/4">
              <span className="block uppercase tracking-tight text-xs md:text-base">(2)</  span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Detail</span>
            </div>

            <div className="w-full md:w-1/2">
              <p className="block tracking-tighter font-book leading-tight text-[6.2vw] md:text-[2.9vw] lg:text-[2.6vw] xl:text-[2.45vw] 2xl:text-[2.2vw] 3xl:text-[2vw] indented-text pr-4 md:pr-0">Campaigns and Stories are central to the Paul Smith website – not only as routes to new product lines, but also as a means for people to explore wider context for the variety of collaborations that the company are involved in. As each story is different, I created a range of flexible, modular layouts that could be put together in various ways to serve the content.</p>
            </div>
          </div>

          {/* Left Image */}
          <div className="w-full mb-12 md:mb-32 lg:mb-48">
            <div className="w-full lg:w-11/12 flex flex-wrap items-end md:-mx-2">
              <div className="w-full md:w-7/12 lg:w-8/12 md:px-2 mb-2 md:mb-0">
                <img src="/images/hero.jpg" className="w-full" alt="Change Me!" />
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap">
                <span className="md:w-full block md:mb-12 text-sm md:text-base">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">Donec pellentesque ligula mattis mauris bibendum, sed sodales arcu ornare Quisque dictum turpis est, at efficitur ex fringilla id. Maecenas pharetra sodales dictum.</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full mb-12 md:mb-32 lg:mb-48 flex flex-wrap justify-center">
            <div className="w-full md:w-10/12">
              <img src="/images/hero.jpg" className="w-full" alt="Change Me!" />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full mb-12 md:mb-32 lg:mb-48">
            <div className="w-full lg:w-11/12 flex flex-wrap items-start md:-mx-2">
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap order-2 md:order-1">
                <span className="md:w-full block md:mb-12 text-sm md:text-base">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">Donec pellentesque ligula mattis mauris bibendum, sed sodales arcu ornare Quisque dictum turpis est, at efficitur ex fringilla id. Maecenas pharetra sodales dictum.</p>
              </div>

              <div className="w-full md:w-7/12 lg:w-8/12 md:px-2 mb-2 md:mb-0 order-1 md:order-2">
                <img src="/images/hero.jpg" className="w-full" alt="Change Me!" />
              </div>
            </div>
          </div>

          {/* Center Image w/ Caption */}
          <div className="w-full mb-12 md:mb-32 lg:mb-48 flex flex-wrap justify-center">
            <div className="w-full md:w-10/12 flex flex-wrap items-end">
              <div className="w-full md:w-7/12 lg:w-8/12 md:px-2 mb-2 md:mb-0">
                <img src="/images/hero.jpg" className="w-full" alt="Change Me!" />
              </div>
              <div className="w-full md:w-5/12 lg:w-4/12 md:px-2 flex flex-wrap">
                <span className="md:w-full block md:mb-12 text-sm md:text-base">(3)</span>
                <p className="ml-auto md:ml-0 w-9/12 md:w-auto text-sm text-right md:text-left md:text-base tracking-tight font-book leading-snug max-w-xs">Donec pellentesque ligula mattis mauris bibendum, sed sodales arcu ornare Quisque dictum turpis est, at efficitur ex fringilla id. Maecenas pharetra sodales dictum.</p>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className="flex flex-wrap border-b items-end border-off-white pb-1 mb-1 md:pb-0">
            <div className="w-1/2 md:w-1/4">
              <span className="block uppercase tracking-tight text-xs md:text-base">(3)</span>
              <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl">Next Project</span>
            </div>
          </div>

          <span className="block text-[13vw] md:text-[15vw] relative z-20 font-display tracking-[-0.075em] md:whitespace-nowrap leading-negative text-red text-right ml-auto mb-0 pb-0">Reform</span>
        </motion.div>
      </motion.div>
    </Layout>
  )
}
