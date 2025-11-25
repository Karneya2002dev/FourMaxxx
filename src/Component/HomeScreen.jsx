import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import HeroSection from './HeroSection'
import WhatWeDoSection from './WhatWeDoSection'
import DiscoverSection from './DiscoverSection'
import Landing from './Pages/Landing'

const SectionWrapper = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const HomeScreen = () => {
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true,  });
  return (
    <>
      <div className="w-full">
        <Landing />
         <SectionWrapper>
        <ImageCarousel />
      </SectionWrapper>

        {/* <Carousel /> */}
      </div>

     

      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* <SectionWrapper>
        <WhatWeDoSection />
      </SectionWrapper> */}

      <SectionWrapper>
        <DiscoverSection />
      </SectionWrapper>
    </>
  )
}

export default HomeScreen
