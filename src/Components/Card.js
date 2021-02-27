import React from 'react'

const Card = ({id, name, email}) =>{
    return(
        <div className="bg-blue dib br3 pa1 ma2 grow tc bw2 shadow-5">
            <img alt="Robot Face" src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card