import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import fancyLink from '../components/fancyLink'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div data-scroll-container id="scroll-container">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  )
}