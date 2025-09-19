import './App.css';

// 2 - Importando componente
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';

// 4 - Template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - Hierarquia de componentes

function App() {
  // 3 - comentários
  return (
    <div className='App'>
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent/>
    </div>
  );
}

export default App;
