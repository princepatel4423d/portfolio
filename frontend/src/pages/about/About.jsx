import React from 'react'
import Intro from './_components/Intro'
import StatGrid from './_components/StatGrid'
import Knowledge from './_components/Knowledge'
import Experience from './_components/Experience'
import SocialLinks from './_components/SocialLinks'
import Academic from './_components/Academic'

const About = () => {
  return (
    <>
      <Intro />
      <StatGrid />
      <Knowledge />
      <Experience />
      <Academic />
      <SocialLinks />
    </>
  )
}

export default About