import React from 'react'
import TopText from './TopText'

export default function DualInfoBlock({heading,connect}) {
    return (
        <section className="my-4 py-4 bg-theme">
           <div className="container">
               {/* **************************Heading******************************** */}
               <TopText toptexttitle={heading}/>
               <div className="row">
                   {/* **************************Section one******************************** */}
                 <div className="col-8 mx-auto">
                     <p className="lead text-white mb-5">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s with the release.
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s with the release.
                     </p>
                 </div>
                 {/* **************************Section second******************************** */}
                 <div className="col-4 mx-auto">
                 <div className="card bg-dark "  >
                 <img className="card-img-top img-thumbnail rounded float-left" src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=person-holding-node-text-1261427.jpg&fm=jpg" alt="image here"/>
                  <div className="card-body">
                       <h5 className="card-title text-success">Dipesh</h5>
                       <p className="card-text text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   <a href="#" className="btn btn-warning btn-block">{connect}</a>
                  </div>
                 </div>
                 </div>
               </div>
           </div>
        </section>
    )
}
