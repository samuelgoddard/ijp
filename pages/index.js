import Head from 'next/head'
import Layout from '../components/layout'
import FancyLink from '../components/fancyLink'
import { fade, projectImage } from "../helpers/transitions"
import { motion } from 'framer-motion'
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
  featuredProjects[]->{
    title,
    indexLetter,
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
  const { data: { title, awards, featuredProjects, biography, emailAddress, socialLinks, heroImage, heroImageMobile, footerBlurb }  } = pageService.getPreviewHook(initialData)()
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
          <div className="bg-gray-100 relative">
            <motion.div variants={fade} className="md:text-right mb-10 md:mb-8 lg:mb-16 relative md:pt-16 lg:pt-20">
              <div className="absolute top-0 left-0 md:relative z-10 md:mb-3 pt-2 md:pt-0">
                <span className="block text-2xl lg:text-3xl font-serif italic tracking-tighter leading-tight px-2 md:px-4">Independant</span>
                <span className="block text-2xl lg:text-3xl font-serif italic tracking-tighter leading-tight px-2 md:px-4 mb-8 md:mb-0">Interaction, Brand, Art Direction</span>

                <a className="items-center text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 flex md:hidden hover:text-red" href="#">
                  <span className="h-3 w-3 mt-[-3px] bg-red block rounded-full mr-1"></span>
                  <span className="block leading-none">Email</span>
                </a>
              </div>

              <div className="relative pb-20 md:pb-0">
                <img src={heroImageMobile.asset.url} className="w-full block md:hidden" alt="Change Me!" />
                <img src={heroImage.asset.url} className="w-full hidden md:block md:mb-3" alt="Change Me!" />

                <svg className="absolute bottom-0 md:bottom-auto md:top-0 left-0 w-[70%] md:w-[45%] ml-2 md:ml-4 md:mt-[-7.5%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 712.422 360.72"><path data-name="Path 6" d="M77.655 350.7V0H0v350.7zm8.517-95.19c20.043 70.641 76.653 105.21 140.781 105.21 96.693 0 146.292-63.627 146.292-160.32V0H295.59v200.4c0 53.607-24.048 82.665-67.635 82.665-35.07 0-58.116-21.543-70.641-61.623zm499.5-21.042c84.168 0 126.753-56.613 126.753-117.735S669.336 0 585.168 0H396.792v350.7h77.655V234.468zm-111.225-77.655V77.655h112.224c30.06 0 48.1 18.036 48.1 40.08s-18.036 39.078-48.1 39.078z" fill="#db4623"/></svg>
              </div>

              <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 hidden md:inline-block hover:text-red" href="#">
                <span className="flex flex-wrap items-center">
                  <span className="md:h-3 lg:h-4 md:w-3 lg:w-4 md:mt-[-3px] lg:mt-[-4px] bg-red block rounded-full mr-1"></span>
                  <span className="inline-block leading-none">Email</span>
                </span>
              </a>
            </motion.div>

            <div className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40">
              <motion.div variants={fade} className="flex flex-wrap border-b items-end border-black mb-8 md:mb-10 lg:mb-16 pb-1 md:pb-0">
                <div className="w-1/2 md:w-1/4">
                  <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(1)</span>
                  <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Selected Works</span>
                </div>

                <span className="hidden md:block w-1/4 uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">2016—{new Date().getFullYear().toString().substr(-2)}</span>

                <span className="block flex-1 text-right uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">52.9548° N, 1.1581° W</span>
              </motion.div>

              <motion.div className="flex flex-wrap -mx-2 items-center">
                <div className="hidden md:block w-1/2 px-2">
                  <div className="overflow-visible relative">
                    <motion.div variants={fade}>
                      <img src="/images/ps.jpg" className="w-full" alt="Change Me!" />
                    </motion.div>
                    <motion.div className="absolute inset-0" variants={projectImage}>
                      <img src="/images/ps.jpg" className="w-full h-full object-cover" alt="Change Me!" />
                    </motion.div>
                  </div>
                </div>
                <motion.div variants={fade} className="w-full md:w-1/2 px-2">
                  <nav>
                    <ul className="text-[12vw] md:text-[4.7vw] lg:text-[4.9vw] 2xl:text-[5vw] leading-none tracking-tighter">
                      {featuredProjects.map((item, i) => {
                        return (
                          <li key={i} className="block my-1 pb-0">
                            <FancyLink destination="/project" label={item.title} a11yText={item.title} index={item.indexLetter} />
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={fade} className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40">
            <div className="flex md:hidden flex-wrap border-b items-end border-black mb-3 md:mb-12 lg:mb-16 pb-1 md:pb-0">
              <div className="flex-1">
                <span className="block uppercase tracking-tight text-xs md:text-base font-serif italic">(2)</span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Biography</span>
              </div>

              <span className="flex-1 uppercase tracking-tight text-xs md:text-base lg:text-xl text-right font-serif">2016—{new Date().getFullYear().toString().substr(-2)}</span>
            </div>

            <div className="flex flex-wrap">
              <div className="hidden md:block w-1/4">
                <span className="block uppercase tracking-tight text-xs md:text-base font-serif itlaic">(2)</span>
                <span className="block uppercase tracking-tight text-xs md:text-base lg:text-xl font-serif">Biography</span>
              </div>

              {biography && (
                <div className="w-full md:w-1/2">
                  <p className="block tracking-tighter font-book leading-tight text-[6.2vw] md:text-[2.9vw] lg:text-[2.6vw] xl:text-[2.45vw] 2xl:text-[2.2vw] 3xl:text-[2vw] indented-text pr-4 md:pr-0">{biography}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div variants={fade} className="px-2 md:px-4 mb-8">
            <div className="flex flex-wrap items-end pb-4">
              <div className="w-full md:w-1/3 lg:w-1/4 order-2 md:order-1">
                <div className="max-w-sm md:max-w-xs">
                  { footerBlurb && (
                    <p className="text-base md:text-lg tracking-tight font-book leading-tight mb-8 indented-text">{footerBlurb}</p>
                  )}
                  
                  {socialLinks.map((item, i) => {
                    return (
                      <a href={item.socialUrl} target="_blank" rel="noopener noreferrer" className="underline mb-1 block text-lg md:text-2xl tracking-tight font-serif uppercase leading-tight hover:text-red">
                        {item.socialTitle}
                      </a>
                    )
                  })}
                  
                  <a href={`mailto:${emailAddress}`} className="underline block text-lg md:text-2xl tracking-tight font-serif uppercase leading-tight hover:text-red">Email</a>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-2/3 md:ml-auto order-1 md:order-2 mb-16 md:mb-0">
                <ul className="text-sm md:text-lg tracking-tight font-book leading-none border-t border-black">
                  {awards.map((item, i) => {
                    return (
                      <li key={i} className="mb-0 py-3 flex flex-wrap border-b border-black">
                        <span className="block">{item.awardWebsite}{ item.awardTimesWon && (<>&nbsp;<span className="text-[7px] md:text-2xs align-top">({item.awardTimesWon})</span></>)}</span><span className="block text-right ml-auto font-serif italic">{item.awardTitle}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
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