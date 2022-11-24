import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import TextBox from './components/TextBox';
import Arrows from './components/Arrows';
import Modal from './components/Modal';
import Buttons from './components/Buttons';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Korean');
  const [input, setInput] = useState('en');
  const [output, setOutput] = useState('ko');
  const [chosenLanguage, setChosenLanguage] = useState('');
  const [chosenInput, setChosenInput] = useState('');
  const [languagesList, setLanguagesList] = useState([]);
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const getLanguages = async () => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguagesList(response.data);
    });
  };

  const translate = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append('q', textToTranslate);
    encodedParams.append('target', output);
    encodedParams.append('source', input);

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '732dced0demsh38aeb5aaede106ap104399jsn713837b502d8',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        setTranslatedText(response.data.data.translations[0].translatedText);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
    setInput(output);
    setOutput(input);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="App">
      {!showModal && (
        <>
          <TextBox
            style="input"
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            style="output"
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            translatedText={translatedText}
          />
          <div className="button-container" onClick={translate}>
            <Buttons />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          languagesList={languagesList}
          chosenInput={showModal === 'input' ? input : output}
          setChosenInput={showModal === 'input' ? setInput : setOutput}
          chosenLanguage={
            showModal === 'input' ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === 'input' ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
}

export default App;
