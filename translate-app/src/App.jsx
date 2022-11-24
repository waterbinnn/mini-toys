import './index.css';
import TextBox from './components/TextBox';
import Arrows from './components/Arrows';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <TextBox style={'input'} />
      <TextBox style={'output'} />
    </div>
  );
}

export default App;
