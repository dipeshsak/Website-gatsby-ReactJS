import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import CourseCart from '../components/Cart/coursecard'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I Write Code."
    subtitle="Dipeshchaitu.com"
    heroclass="hero-backgrund"
    />
    <InfoBlock heading="About Us"/>
    <CourseCart courses={data.courses}/>
    <DualInfoBlock heading="Our Team" connect="Connect Me"/>
    
  </Layout>
)
export const query=graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        catagory
        description{
          description
        }
        image{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
    
}
`
export default IndexPage
