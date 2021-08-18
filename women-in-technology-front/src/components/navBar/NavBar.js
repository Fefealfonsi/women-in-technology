import { NavBarContainer, SearchContainer } from './styled'
import feminism from '../../assets/feminism_simbol.png'
import SearchIcon from '@material-ui/icons/Search';
function NavBar(props) {

    return (
        <NavBarContainer>
            <img src={feminism} alt='logo' />
            <p>Mulheres na Tecnologia</p>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Busque pelo nome"
                    value={props.search}
                    onChange={props.onChangeSearch}
                />
                <SearchIcon />
            </SearchContainer>
        </NavBarContainer>
    )
}
export default NavBar