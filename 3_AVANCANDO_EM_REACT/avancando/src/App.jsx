import "./App.css";

// 2 - imagem em assets
import night from './assets/night.jpg';

// 3 - useState
import Data from "./components/Data";

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
    </div>
  );
}

export default App;
