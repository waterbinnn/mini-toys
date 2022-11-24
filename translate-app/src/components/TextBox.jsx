import React from 'react';
import SelectDropDown from './SelectDropDown';

const TextBox = ({
  selectedLanguage,
  style,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {
  const handleClick = () => {
    setTextToTranslate('');
    setTranslatedText('');
  };

  return (
    <>
      <div className={style}>
        <SelectDropDown
          style={style}
          setShowModal={setShowModal}
          selectedLanguage={selectedLanguage}
        />
        <textarea
          disabled={style === 'output'}
          className={style}
          placeholder={style == 'input' ? 'Enter text' : 'Translation'}
          onChange={(e) => setTextToTranslate(e.target.value)}
          value={style === 'input' ? textToTranslate : translatedText}
        />
        {style === 'input' && (
          <strong className="delete" onClick={handleClick}>
            ˟
          </strong>
        )}
      </div>
    </>
  );
};

export default TextBox;
