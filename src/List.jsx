import React from 'react'

const List = ({people}) => {
  return (
    <>
    {people.map((person)=>{
        let{id,image,name,age}=person;
        return(
            <article key={id} className="list-items">
                
                <img src={image} alt={name} />
                <div>
                    <h1>{name}</h1>
                    <p>{age} years</p>
                </div>
               
            </article>
        )
    })}

</>
  )
}

export default List