import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const introEnabled = true;

  return (
    <>
    { pageProps.preview && <><div className={'fixed bottom-0 w-full p-1 bg-red bg-opacity-100 text-white justify-center flex z-30'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a></div></> }

    { introEnabled && (
      <div className="fixed inset-0 z-[10000] w-full h-full bg-white flex items-center justify-center overflow-hidden pointer-events-none intro-fade-out">
        <div className="">
          <span className="block text-2xl lg:text-3xl font-sans tracking-tighter leading-tight px-2 md:px-4 mb-8 md:mb-0 overflow-hidden">
            <span className="block overflow-hidden relative">
              <span className="block intro-words-wrap">
                <span className="block intro-words">Interaction, Brand, Art Direction</span>
              </span>
            </span>
          </span>
        </div>
      </div>
    )}

    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    </>
  )
}