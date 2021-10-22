import Head from 'next/head'
import Layout from '../components/layout'
import FancyLink from '../components/fancyLink'
import { fade, projectImage } from "../helpers/transitions"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import SanityPageService from '../services/SanityPageService'

const query = `*[_type == "home"][0]{
	title,
  awards[]{
    awardTitle,
    awardWebsite,
    awardTimesWon
  },
  heroImageMobile {
    asset->{
		  ...
    },
	},
  heroImage {
    asset->{
		  ...
    },
	},
  socialLinks[]{
    socialTitle,
    socialUrl
  },
  'projects': *[_type == "project"] {
    title,
    indexLetter,
    disciplines,
    slug {
	    current
  	}
  },
  biography,
  emailAddress,
  footerBlurb
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { title, projects }  } = pageService.getPreviewHook(initialData)()
  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{ title } - Isaac Powell</title>
        </Head>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="relative">
            <div className="flex flex-wrap py-5 mb-8 md:mb-12 xl:mb-16">
              <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 inline-block hover:text-red" href="#">
                <span className="inline-block leading-none">Back</span>
              </a>

              <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 inline-block hover:text-red ml-auto" href="#">
                <span className="flex flex-wrap items-center">
                  <span className="h-3 lg:h-4 w-3 lg:w-4 md:mt-[-3px] lg:mt-[-4px] bg-red block rounded-full mr-1"></span>
                  <span className="inline-block leading-none">Email</span>
                </span>
              </a>
            </div>

            <div className="px-2 md:px-4">
              <motion.div variants={fade} className="flex flex-wrap border-b items-end border-black mb-4 md:mb-6 lg:mb-8">
                <div className="w-1/2 md:w-1/4">
                  <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(1)</span>
                  <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">All Works</span>
                </div>

                <span className="hidden md:block flex-1 uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">{projects.length} Projects</span>

                <span className="hidden md:block w-1/4 ml-auto text-right uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">2016—{new Date().getFullYear().toString().substr(-2)}</span>
              </motion.div>
            </div>
          </div>

          <motion.div variants={fade} className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40">
            <div className="flex flex-wrap">
              {projects.map((item, i) => {
                return (
                  <Link key={i} href={`/projects/${item.slug.current}`}>
                    <a className="block w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 md:mb-12 xl:mb-16">
                      <span className="block font-sans text-2xl md:text-2xl xl:text-3xl tracking-tighter leading-none">{item.title}</span>
                      <span className="block tracking-tight text-xs md:text-base font-serif italic">{item.disciplines}</span>
                    </a>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props
  };
}