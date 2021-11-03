export const noFade = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const projectImage = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 1,
    x: -15,
    width: '100vw',
    height: '100vh',
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1], delay: 1 }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}