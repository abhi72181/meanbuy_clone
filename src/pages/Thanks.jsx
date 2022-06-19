// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "./Thanks.css"
// const Thanks = () => {
//     const navigate=useNavigate()
//     const handleThanksclick=()=>{
//       navigate("/")
//     }
//   return (
//     <div className='thanksbody'>
//         <div id="Thankscontainer">
//     <h1 className='h1'>Payment Successful</h1>
//     <h1 className='h1'>Thankyou for shopping with us .. !</h1>
//     </div>
//    <Link to="/">Back to Home</Link>
//     </div>
//   )
// }

// export default Thanks
import "./Thanks.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Thanks() {
  const clickho = useNavigate();
  const handlechangeclick = () => {
    clickho("/");
  };
  return (
    <>
      <div className="forupperspace"></div>
      <div className="thankscont">
        
        <div className="insidethankscont">
          <img style={{width:"70%" , margin:"auto"}}
            src="https://rukminim1.flixcart.com/image/416/416/k69ncsw0/card/r/9/n/60-6010522454483-greeting-for-u-enterprises-original-imafzrgza4bbbhux.jpeg?q=70"
            alt="image"
          />


            <div style={{width:"100%"}}>
          <Button
            style={{ marginTop: "40px", width:"20%", marginLeft:"40%",marginBottom:"50px"}}
            onClick={handlechangeclick}
            colorScheme="orange"
          >
            Continue Shopping
          </Button>

          </div>
          </div>
      </div>
    </>
  );
}

export default Thanks;
