import React from 'react'
import './Card.css'
// import Logo2 from '../../Images/Logo2'

// function Card() {
//   return (
//     <div className='Card' style={{backgroundColor:"white"}}>
//         {/* <Logo2 /> */}
        
//         <div className="Card-main">
//           <div className="Card-main-top">
//           <Logo2 />
//           </div>
//           <div className="Card-main-bottom">
// <span>100followers</span>
//           </div>
        
//         </div>
//       <div className='Card-bottom'>
//         <span>NewBollywoodsongs</span>
        
//       </div>
//     </div>
//   )
// }
const Card = ({follows,title,image}) => {
  return (
   <div >
      <div className='card'>
        <img src={image} />
         <div className='followers'>
          <span className='text'>{follows} Follows </span>
        </div>
        </div>

        <p className='catagory'> {title} </p>
      </div>
      
  )
}

export default Card