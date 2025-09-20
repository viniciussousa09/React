import './App.css';

// 2 - Importando componente
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';

// 4 - Template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - Hierarquia de componentes

// 6 - eventos
import Events from './components/Events';

function App() {
  // 3 - comentários
  return (
    <div className='App'>
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
