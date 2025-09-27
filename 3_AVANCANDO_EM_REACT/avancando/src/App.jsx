import "./App.css";

// 2 - imagem em assets
import night from './assets/night.jpg';

// 3 - useState
import Data from "./components/Data";

// 4 - Renderização de lista
import ListRender from "./components/ListRender";

// 7 - render condicional
import ConditionalRender from "./components/ConditionalRender";

//  8 - props
import ShowUserName from "./components/ShowUserName";

//  9 - desestruturando props
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <div className="App" style={{ paddigBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* render de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Vinicius" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho" />
    </div>
  );
}

export default App;
