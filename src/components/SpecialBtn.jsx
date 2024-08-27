import React from 'react'

function SpecialBtn(props) {
  return (
    <div style={{height:'250px',padding:'25px', backgroundColor:'white', margin:'0 10px', borderRadius:'10px'}}>
        <h4 style={{fontWeight:'700',color: 'rgb(223,0,0)', marginBottom:'20px'}}>{props.title}</h4>
        <p style={{marginBottom:'45px'}}>{props.text}</p>
        <p>{'>'} Más información</p>
    </div>
  )
}

export default SpecialBtn