"use client"

import './cards.css';

const pathsImagesCards =[
    { img: "./images/aquario.jpg" },
    { img: "./images/corais.jpg" },
    { img: "./images/limpeza.jpg" },
    { img: "./images/peixes.jpg" },
    { img: "./images/reff.jpg" },
    { img: "./images/substrato.jpg" }
];
export default function Cards() {

  return (
    <div className="contentCards">
      <div className='cards' >
        {pathsImagesCards.map((item,i)=>{
          return <img className='imageCard'  key={i} src={item.img}/>
        })}
      </div>
    </div>
  );
}
