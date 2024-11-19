import React from 'react'


function CountNumber(properties) {

 const h2Style = {

 fontSize: '30px',

 color: 'gray'

 }


 return (

 <h2 style={h2Style}>{properties.count}</h2>

 )

}


export default CountNumber