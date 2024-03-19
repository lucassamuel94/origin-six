export const fadeUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
}

export const fadeDownAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
