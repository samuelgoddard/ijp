import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import fancyLink from '../components/fancyLink'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
    { pageProps.preview && <><div className={'fixed bottom-0 w-full p-1 bg-red bg-opacity-100 text-white justify-center flex z-30'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a></div></> }
    <div data-scroll-container id="scroll-container">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
    </>
  )
}