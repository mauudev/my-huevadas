import { GreetingComponent, AlertButton, Welcome } from './components/allinone/ComponentsBoard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingComponent />


      </header>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />

      <AlertButton/>
    </div>
  );
}

export default App;
