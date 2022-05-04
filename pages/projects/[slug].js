import Head from 'next/head'
import Layout from '../../components/layout'
import FancyLink from '../../components/fancyLink'
import { noFade, reveal, fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import SanityPageService from '../../services/SanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import BodyRenderer from '../../components/body-renderer'
import ProgressBar from '../../components/progress-bar'
import next from 'next'
import Link from 'next/link'
import ImageWrapper from '../../components/image-wrapper'
import { useRef } from 'react'

const query = `*[_type == "project" && slug.current == $slug][0]{
	title,
  slug,
  heroImage {
    asset->{
		  ...
    },
	},
  abstractmIage {
    asset->{
		  ...
    },
	},
  order,
  client,
  years,
  disciplines,
  indexLetter,
  abstractIntro,
  detailIntro,
  contentBlocks[] {
    ...,
    image {
      asset-> {
        ...
      }
    },
  }
}`

const pageService = new SanityPageService(query)

export default function ProjectSlug(initialData) {
  const containerRef = useRef(null)

  const { data: { title, slug, client, years, disciplines, heroImage, indexLetter, abstractIntro, abstractmIage, detailIntro, contentBlocks }  } = pageService.getPreviewHook(initialData)()
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, lerp: 0.125 }}
      containerRef={containerRef}
      watch={[]}
    >
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={fade}>
          <ProgressBar />
        </motion.div>
      </motion.div>

      <div data-scroll-container ref={containerRef} id="scroll-container">
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
          <div className="h-[100vh] relative flex flex-wrap text-off-white">
            <motion.div variants={fade} className="relative z-20 pt-2 md:pt-3 flex flex-wrap w-full h-12">
              <span className="block text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 relative z-20 overflow-hidden mb-0 pb-0">
                <motion.span className="block" variants={reveal}>
                  <FancyLink destination="/" label="All Projects" />
                </motion.span>
              </span>
              <span className="block text-2xl lg:text-3xl font-serif italic tracking-tighter leading-tight px-2 md:px-4 ml-auto text-right overflow-hidden">
                <motion.span className="block" variants={reveal}>
                  <span className="block md:inline-block">IJP—22</span> <span className="hidden md:inline-block">/</span> <span className="block md:inline-block">{title}</span>
                </motion.span>
              </span>
            </motion.div>

            <div className="relative overflow-hidden w-full self-end mt-auto mb-4">
              <div className="md:flex md:items-center md:justify-center relative z-[100] overflow-hidden">
                  <h1 data-scroll data-scroll-speed="1.25" data-scroll-direction="horizontal" className="text-[26vw] md:text-[30vw] relative z-20 font-display tracking-[-0.075em] md:whitespace-nowrap leading-negative will-change">
                    <motion.span className="block" variants={reveal}>{title}</motion.span>
                  </h1>
              </div>
              
              <motion.div variants={fade} className="relative z-20 px-2 md:px-4 w-full">
                <ul className="text-sm md:text-lg tracking-tight font-book leading-tight border-t border-white w-full">
                  <li className="mb-0 py-3 overflow-hidden border-b border-white">
                    <div className="flex flex-wrap overflow-hidden">
                      <motion.span className="block" variants={reveal}>Client</motion.span><motion.span variants={reveal} className="block text-right ml-auto font-serif italic">{client ? client : 'Coming Soon'}</motion.span>
                    </div>
                  </li>
                  <li className="mb-0 py-3 overflow-hidden border-b border-white">
                    <div className="flex flex-wrap overflow-hidden">
                      <motion.span className="block" variants={reveal}>Year</motion.span><motion.span variants={reveal} className="block text-right ml-auto font-serif italic">{years ? years : 'Coming Soon'}</motion.span>
                    </div>
                  </li>
                  <li className="mb-0 py-3 border-b border-white">
                    <div className="flex flex-wrap overflow-hidden">
                      <motion.span className="block" variants={reveal}>Disciplines</motion.span><motion.span variants={reveal} className="block text-right ml-auto font-serif italic">{disciplines ? disciplines : 'Coming Soon'}</motion.span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {heroImage && (
              <motion.div variants={fade} className="absolute inset-0 z-0 bg-red">
                <ImageWrapper
                  image={heroImage ? heroImage : null} 
                  className="w-full h-full object-cover object-center md:mb-3"
                  fill
                  priority
                />
              </motion.div>
            )}
          </div>

          <motion.div variants={fade} className="pt-12 md:pt-20 lg:pt-32 pb-4 md:pb-12 3xl:pb-16 px-2 md:px-4">
            {/* Abstract */}
            <div className="flex flex-wrap border-b items-end border-black mb-20 md:mb-24 lg:mb-32 pb-1 md:pb-0">
              <div className="w-1/2 md:w-1/4">
                <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(1)</span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Abstract</span>
              </div>

              <span className="block flex-1 text-right uppercase tracking-tight text-5xl md:text-[9vw] lg:text-[8vw] text-red mb-[-6px]">({indexLetter ? indexLetter : 'x'})</span>
            </div>

            <div className="w-full max-w-3xl text-base tracking-tight font-book leading-snug mb-6 css-cols">
              { abstractIntro ? (
                <BlockContent serializers={{ container: ({ children }) => children }} blocks={abstractIntro} />
              ) : (
                <p>Coming soon...</p>
              )}
            </div>
            
            <div className="w-full md:w-11/12 mb-20 md:mb-32 lg:mb-48 bg-red">
              <ImageWrapper
                image={abstractmIage ? abstractmIage : null} 
                className="w-full "
              />
            </div>

            {/* Details */}
            <div className="flex flex-wrap w-full mb-20 md:mb-32 lg:mb-48">
              <div className="flex md:hidden flex-wrap w-full border-b items-end border-black mb-3 md:mb-12 lg:mb-16 pb-1 md:pb-0">
                <div className="flex-1">
                  <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(2)</span>
                  <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Detail</span>
                  
                </div>
              </div>

              <div className="hidden md:block w-1/4">
                <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(2)</  span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Detail</span>
              </div>

              <div className="w-full md:w-1/2">
                <div className="block tracking-tighter font-book leading-tight text-[6.2vw] md:text-[2.9vw] lg:text-[2.6vw] xl:text-[2.45vw] 2xl:text-[2.2vw] 3xl:text-[2vw] indented-text pr-4 md:pr-0">
                  {detailIntro ? (
                    <BlockContent serializers={{ container: ({ children }) => children }} blocks={detailIntro} />
                  ): (
                    <p>Coming soon...</p>
                  )}
                </div>
              </div>
            </div>

            <BodyRenderer body={contentBlocks} />

            {/* Next Project */}
            <div className="flex flex-wrap border-b items-end border-black pb-1 mb-1 md:pb-0">
              <div className="w-1/2 md:w-1/4">
                <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(4)</span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Projects Index</span>
              </div>
            </div>

            <Link href={`/projects-index`}>
              <a className="block text-[14vw] md:text-[10.6vw] lg:text-[11.8wv] xl:text-[10.8vw] relative z-20 font-display tracking-[-0.075em] md:whitespace-nowrap leading-negative text-red text-left mb-0 pb-0 ml-[-1vw]">All projects</a>
            </Link> 
          </motion.div>
        </motion.div>
      </Layout>
    </div>
    </LocomotiveScrollProvider>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('project')
  return {
    paths: paths,
    fallback: true,
  };
}