import React, { Component } from 'react'
import TopText from '../Reuseable/TopText'
import Img from 'gatsby-image'
export default class coursecard extends Component {
    constructor(props){
        super(props)
        this.state={
            Courses:props.courses.edges,
            Mycourses:props.courses.edges,
        }
    }
    render() {
       // console.log("********8data",this.state.Courses)
        return (
            <section className="py-5">
                <div className="container">
                     <TopText  toptexttitle="Courses"/>
                     <div className="row">
                         {
                             this.state.Mycourses.map(({node})=>{
                                    return(
                                        <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                            <Img fixed={node.image.fixed} />
                                            <div className="flex-grow-1 px-3">
                                                <div className="d-flex justify-content-between">
                                                     <h6 className="mb-0">{node.title}</h6>
                                                     <h6 className="mb-0 text-success"> $ {node.price}</h6>
                                                </div>
                                                <p className="text-muted">
                                                     <small>{node.description.description}</small>
                                                </p>
                                                <button 
                                                 data-item-id={node.id}
                                                 data-item-price={node.price}
                                                 data-item-url="https://learncodeonline.in"
                                                 data-item-image={node.image.fixed.src}
                                                 data-item-name={node.title}
                                                className="btn btn-warning snipcart-add-item">Join Now</button>
                                            </div>
                                        </div>
                                    )
                             })
                         }
                     </div>
                </div>              
            </section>
        )
    }
}
