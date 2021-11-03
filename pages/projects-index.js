import Head from 'next/head'
import Layout from '../components/layout'
import FancyLink from '../components/fancyLink'
import { fade, projectImage } from "../helpers/transitions"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import SanityPageService from '../services/SanityPageService'
import ImageWrapper from '../components/image-wrapper'
import Teaser from '../components/teaser'

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
    thumbnailImage {
      asset->{
        ...
      },
    },
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
            <motion.div variants={fade} className="flex flex-wrap py-5 mb-8 md:mb-12 xl:mb-16">
              <Link href="/">
                  <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 inline-block hover:text-red">
                  <span className="inline-block leading-none">Back</span>
                </a>
              </Link>

              <a className="items-center justify-end text-2xl lg:text-3xl font-book tracking-tighter leading-tight px-2 md:px-4 inline-block hover:text-red ml-auto" href="#">
                <span className="flex flex-wrap items-center">
                  <span className="h-3 lg:h-4 w-3 lg:w-4 md:mt-[-3px] lg:mt-[-4px] bg-red block rounded-full mr-1"></span>
                  <span className="inline-block leading-none">Email</span>
                </span>
              </a>
            </motion.div>

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

          <motion.div variants={fade} className="px-2 md:px-4 mb-16 md:mb-24 lg:mb-40 overflow-hidden">
            <div className="">
              
              {/* LAYER 1 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 md:w-full md:col-span-1 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[0].slug.current}
                    imageSrc={projects[0].thumbnailImage ? projects[0].thumbnailImage.asset.url : null}
                    imageWidth={projects[0].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[0].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[0].title}
                    disciplines={projects[0].disciplines}
                    inverse
                  />
                </div>

                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-4 xl:col-start-5 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[1].slug.current}
                    imageSrc={projects[1].thumbnailImage ? projects[1].thumbnailImage.asset.url : null}
                    imageWidth={projects[1].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[1].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[1].title}
                    disciplines={projects[1].disciplines}
                  />
                </div>
              </div>

              
              {/* LAYER 2 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-2 xl:col-start-3 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[2].slug.current}
                    imageSrc={projects[2].thumbnailImage ? projects[2].thumbnailImage.asset.url : null}
                    imageWidth={projects[2].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[2].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[2].title}
                    disciplines={projects[2].disciplines}
                    inverse
                  />
                </div>

                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-3 xl:col-start-4 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[3].slug.current}
                    imageSrc={projects[3].thumbnailImage ? projects[3].thumbnailImage.asset.url : null}
                    imageWidth={projects[3].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[3].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[3].title}
                    disciplines={projects[3].disciplines}
                  />
                </div>
              </div>

              {/* LAYER 3 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-2 xl:col-start-2 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[4].slug.current}
                    imageSrc={projects[4].thumbnailImage ? projects[4].thumbnailImage.asset.url : null}
                    imageWidth={projects[4].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[4].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[4].title}
                    disciplines={projects[4].disciplines}
                    inverse
                  />
                </div>

                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-4 xl:col-start-5 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[5].slug.current}
                    imageSrc={projects[5].thumbnailImage ? projects[5].thumbnailImage.asset.url : null}
                    imageWidth={projects[5].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[5].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[5].title}
                    disciplines={projects[5].disciplines}
                  />
                </div>
              </div>

              {/* LAYER 4 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-1 xl:col-start-1 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[6].slug.current}
                    imageSrc={projects[6].thumbnailImage ? projects[6].thumbnailImage.asset.url : null}
                    imageWidth={projects[6].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[6].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[6].title}
                    disciplines={projects[6].disciplines}
                    inverse
                  />
                </div>

                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-2 xl:col-start-3 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[7].slug.current}
                    imageSrc={projects[7].thumbnailImage ? projects[7].thumbnailImage.asset.url : null}
                    imageWidth={projects[7].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[7].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[7].title}
                    disciplines={projects[7].disciplines}
                  />
                </div>
              </div>

              {/* LAYER 5 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-3 xl:col-start-4 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[8].slug.current}
                    imageSrc={projects[8].thumbnailImage ? projects[8].thumbnailImage.asset.url : null}
                    imageWidth={projects[8].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[8].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[8].title}
                    disciplines={projects[8].disciplines}
                    inverse
                  />
                </div>
              </div>

              {/* LAYER 6 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-1 xl:col-start-2 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[9].slug.current}
                    imageSrc={projects[9].thumbnailImage ? projects[9].thumbnailImage.asset.url : null}
                    imageWidth={projects[9].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[9].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[9].title}
                    disciplines={projects[9].disciplines}
                  />
                </div>

                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-4 xl:col-start-5 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[10].slug.current}
                    imageSrc={projects[10].thumbnailImage ? projects[10].thumbnailImage.asset.url : null}
                    imageWidth={projects[10].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[10].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[10].title}
                    disciplines={projects[10].disciplines}
                    inverse
                  />
                </div>
              </div>

              {/* LAYER 7 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-1 xl:col-start-1 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[11].slug.current}
                    imageSrc={projects[11].thumbnailImage ? projects[11].thumbnailImage.asset.url : null}
                    imageWidth={projects[11].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[11].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[11].title}
                    disciplines={projects[11].disciplines}
                  />
                </div>

                <div className="w-9/12 md:w-full md:col-span-1 md:col-start-3 xl:col-start-3 mb-8 md:mb-12 xl:mb-1">
                  <Teaser
                    slug={projects[12].slug.current}
                    imageSrc={projects[12].thumbnailImage ? projects[12].thumbnailImage.asset.url : null}
                    imageWidth={projects[12].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[12].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[12].title}
                    disciplines={projects[12].disciplines}
                    inverse
                  />
                </div>
              </div>

              {/* LAYER 8 */}
              <div className="flex flex-wrap md:flex-none md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-6 xl:gap-12 2xl:gap-16">
                <div className="w-9/12 ml-auto md:w-full md:col-span-1 md:col-start-3 xl:col-start-3 mb-8 md:mb-12 xl:mb-16">
                  <Teaser
                    slug={projects[13].slug.current}
                    imageSrc={projects[13].thumbnailImage ? projects[13].thumbnailImage.asset.url : null}
                    imageWidth={projects[13].thumbnailImage.asset.metadata.dimensions.width / 2}
                    imageHeight={projects[13].thumbnailImage.asset.metadata.dimensions.height / 2}
                    title={projects[13].title}
                    disciplines={projects[13].disciplines}
                  />
                </div>
              </div>

              {/* {projects.map((item, i) => {

                let wrapperClasses = 'md:w-1/3 lg:w-1/4 2xl:w-1/5';
                let innerClasses = 'w-full';

                if (i === 0) {
                  wrapperClasses= 'md:w-9/12 lg:w-9/12 2xl:w-9/12';
                  innerClasses= 'w-1/4';
                }

                if (i === 1) {
                  wrapperClasses= 'md:w-3/12 lg:w-3/12 2xl:w-3/12';
                }

                if (i === 2) {
                  wrapperClasses= 'md:w-8/12 lg:w-8/12 2xl:w-8/12';
                }

                return (
                  <div key={i} className={`w-10/12 ${wrapperClasses} mb-8 md:mb-12 xl:mb-16 ${i%2 == 0 ? '' : 'ml-auto md:ml-0'}`}>
                    <Link href={`/projects/${item.slug.current}`}>
                      <a className="block w-full group">

                        <div className={`transform ${innerClasses} ${i%2 == 0 ? '-translate-x-3 md:translate-x-0' : 'translate-x-3 md:translate-x-0'} overflow-hidden mb-4`}>
                          <div className="transform group-hover:scale-[1.05] group-focus:scale-[1.05] transition-transform ease-in-out duration-500">
                            <ImageWrapper
                              src={item.thumbnailImage ? item.thumbnailImage.asset.url : null} 
                              layout="responsive"
                              className="w-full"
                              width={item.thumbnailImage.asset.metadata.dimensions.width / 2}
                              height={item.thumbnailImage.asset.metadata.dimensions.height / 2}
                            />
                          </div>
                        </div>

                        <span className="block font-sans text-2xl md:text-2xl xl:text-2xl tracking-tighter leading-none mb-1 group-hover:text-red group-focus:text-red transition-colors ease-in-out duration-300">{item.title}</span>
                        <span className="block tracking-tight text-xs md:text-sm font-serif italic">{item.disciplines}</span>
                      </a>
                    </Link>
                  </div>
                )
              })} */}
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