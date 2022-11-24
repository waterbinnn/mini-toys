import { useState } from 'react';
import './index.css';
import TextBox from './components/TextBox';
import Arrows from './components/Arrows';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Polish');

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="App">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style={'input'}
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style={'output'}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal />}
    </div>
  );
}

export default App;
