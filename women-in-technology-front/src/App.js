import HomePage from './pages/homePage/HomePage'
import DetailPage from './pages/detailPage/DetailPage'
import NavBar from './components/navBar/NavBar'
import styled from 'styled-components'
import background from './assets/background9728.jpg'
const AppContainer = styled.div`
bottom:0px;
margin:0px;
width:100vw;
height:100%;
background-image:url(${background});
background-repeat:no-repeat;
background-size:cover;
`


function App() {
  return (
    <AppContainer>
      {/* <NavBar/> */}
      <HomePage/>
      {/* <DetailPage/> */}
    </AppContainer>
  );
}

export default App;
