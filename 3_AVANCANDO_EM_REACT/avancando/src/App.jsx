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

//  11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "Kia", color: "Branco", km: 20000 },
  { id: 3, brand: "Renault", color: "Azul", km: 150000 },
];

//  12 - fragments
import Fragment from "./components/Fragment";

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
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={150000} color="Azul" />
      <CarDetails brand="GM" km={199999} color="Verde" />
      {/* 11 -  renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - fragment */}
      <Fragment />
    </div>
  );
}

export default App;
