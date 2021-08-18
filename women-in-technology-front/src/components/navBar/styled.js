import styled from "styled-components";

export const NavBarContainer = styled.div`
    justify-content:space-around;
    display: flex;
    align-items: center;
    width: 100vw;
    height:80px;
    background-color: rgba(226, 42, 156, 0.5);

    img{
        height:70px
    }

    p{
        font-family: 'Rajdhani', sans-serif;
        /* font-family: 'Lobster', cursive; */
        font-size:40px;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color:white;
    input {
        padding:10px;
        border:none;
        outline:none;
    }  
`
// export const  GoToFormButton = styled.button`
//   z-index: 1;
//   position: relative;
//   font-size: inherit;
//   font-family: inherit;
//   color: black;
//   padding: 0.5em 1em;
//   outline: none;
//   border: none;
//   background-color: rgba(169, 42, 241);
//   overflow: hidden;
//   transition: color 0.4s ease-in-out;
//   font-family:'Rajdhani', sans-serif;


// ::before {
//   content: '';
//   z-index: -1;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 1em;
//   height: 1em;
//   border-radius: 50%;
//   background-color: rgba(212, 42, 243);
//   transform-origin: center;
//   transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
//   transition: transform 0.45s ease-in-out;
  
//  }

// :hover {
//   cursor: pointer;
//   color: #161616;
// }

// :hover::before {
//   transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
// }
    
// `