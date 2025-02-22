import './App.css';
//importing component
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
     <h1 style={{margin:'30px', fontFamily:'Georgia, serif', color:'white' }}>FIFA ROASTER</h1>
     <PlayersList/>
    </div>
  );
}

export default App;
