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
