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
                     </p>
                 </div>
                 {/* **************************Section second******************************** */}
                 <div className="col-4 mx-auto">
                 <div class="card bg-dark" >
                 <img class="card-img-top" src="https://images.pexels.com/photos/1115821/pexels-photo-1115821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image here"/>
                  <div class="card-body">
                       <h5 class="card-title text-success">Dipesh</h5>
                       <p class="card-text text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   <a href="#" class="btn btn-warning btn-block">{connect}</a>
                  </div>
                 </div>
                 </div>
               </div>
           </div>
        </section>
    )
}
