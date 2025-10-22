// import React from "react";
// import styled from "styled-components";

// const Card = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="content">
//           <div className="back">
//             <div className="back-content">
//               <svg
//                 stroke="#ffffff"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 50 50"
//                 height="50px"
//                 width="50px"
//                 fill="#ffffff"
//               >
//                 {/* SVG do gato aqui */}
//                 <path d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 46.5c-11.8 0-21.5-9.7-21.5-21.5S13.2 3.5 25 3.5 46.5 13.2 46.5 25 36.8 46.5 25 46.5z" />
//                 {/* Adicione o restante do SVG do gato aqui */}
//               </svg>
//               <strong>Hover Me</strong>
//             </div>
//           </div>
//           <div className="front">
//             <div className="img">
//               <div className="circle"></div>
//               <div className="circle" id="right"></div>
//               <div className="circle" id="bottom"></div>
//             </div>
//             <div className="front-content">
//               <small className="badge">Gato</small>
//               <div className="description">
//                 <div className="title">
//                   <p className="title">
//                     <strong>Gato Fofo</strong>
//                   </p>
//                 </div>
//                 <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Amigo</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     overflow: visible;
//     width: 190px;
//     height: 254px;
//   }

//   .content {
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     transition: transform 300ms;
//     box-shadow: 0px 0px 10px 1px #000000ee;
//     border-radius: 5px;
//   }

//   .front,
//   .back {
//     background-color: #8b4513; /* Tom marrom */
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     border-radius: 5px;
//     overflow: hidden;
//   }

//   .back {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .back-content {
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 30px;
//   }

//   .card:hover .content {
//     transform: rotateY(180deg);
//   }

//   .front {
//     transform: rotateY(180deg);
//     color: white;
//   }

//   .front .front-content {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   .front-content .badge {
//     background-color: #00000055;
//     padding: 2px 10px;
//     border-radius: 10px;
//     width: fit-content;
//   }

//   .description {
//     box-shadow: 0px 0px 10px 5px #00000088;
//     width: 100%;
//     padding: 10px;
//     background-color: #00000099;
//     border-radius: 5px;
//   }

//   .title {
//     font-size: 11px;
//     max-width: 100%;
//     display: flex;
//     justify-content: space-between;
//   }

//   .card-footer {
//     color: #ffffff88;
//     margin-top: 5px;
//     font-size: 8px;
//   }

//   .front .img {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
//   }

//   .circle {
//     width: 90px;
//     height: 90px;
//     border-radius: 50%;
//     background-color: #ffbb66;
//     position: relative;
//     filter: blur(15px);
//     animation: floating 2600ms infinite linear;
//   }

//   #bottom {
//     background-color: #ff8866;
//     left: 50px;
//     top: 0px;
//     width: 150px;
//     height: 150px;
//     animation-delay: -800ms;
//   }

//   #right {
//     background-color: #ff2233;
//     left: 160px;
//     top: -80px;
//     width: 30px;
//     height: 30px;
//     animation-delay: -1800ms;
//   }

//   @keyframes floating {
//     0% {
//       transform: translateY(0px);
//     }
//     50% {
//       transform: translateY(10px);
//     }
//     100% {
//       transform: translateY(0px);
//     }
//   }
// `;

// export default Card;
