import react from "react"
import {NavBarContainer,GoToFormButton}from './styled'
import feminism from '../../assets/feminism_simbol.png'
function NavBar (){

    return(
        <NavBarContainer>
            <img src={feminism} alt='logo'/>
            <p>Mulheres na Tecnologia</p>
            <GoToFormButton>Colabore</GoToFormButton>
        </NavBarContainer>
    )
}
export default NavBar 