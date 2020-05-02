import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import TeamPhotoSection from '../components/Reuseable/About/TeamPhotoSection'
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About Company"
    subtitle=""
    heroclass="about-backgrund"
    />
     <DualInfoBlock heading="A Message from CEO" connect="Connect Me"/>
    <InfoBlock heading="About Vision"/>
    <TeamPhotoSection/>
    
  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
    
}
`
export default AboutPage
