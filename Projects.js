import React, { useState } from 'react'

export default function Projects() {
    const [projects,setProjects] = useState(

        [
         {id :"123abc" , name : "projet1" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg"},
         {id: "123bcd" , name : "projet2" ,desciption : "p2 react" , nbHeure : 12  , pic : "ashuhsa.jpg"},
         {id : "1232s" , name : "projet3" ,desciption : "p3 react" , nbHeure : 12  , pic : "ashuhsa.jpg"},
         {id : "153s" , name : "projet1" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg"}
        ]



    ) ;

  return (
    <div className='d-flex flex-wrap'>
        {
            projects && projects.map( item =>  (
                <div key={item.id} className="card" style={{width: '18rem'}}>
                <img src={item.pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desciption}</p>
                  <a href="#" className="btn btn-primary">{item.nbHeure}</a>
                </div>
              </div>
              
              
            ))
        }
    </div>
  )
}
