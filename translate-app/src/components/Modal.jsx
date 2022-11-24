import React, { useState } from 'react';

const Modal = ({
  setShowModal,
  languagesList,
  chosenLanguage,
  setChosenLanguage,
  chosenInput,
  setChosenInput,
}) => {
  const [searchedLanguage, setSearchedLanguage] = useState('');

  const handleChange = (e) => {
    setSearchedLanguage(e.target.value);
    setChosenLanguage(e.target.value);
  };

  const handleClick = (e) => {
    setChosenLanguage(e.target.textContent);
    setChosenInput(e.target.id);
    setShowModal(false);
  };

  return (
    <div className="option-list">
      <div className="search-bar">
        <input
          value={chosenLanguage}
          onChange={handleChange}
          id={chosenInput}
        />
        <div className="close-button" onClick={() => setShowModal(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>

      <div className="option-container">
        <ul>
          {languagesList?.map((language, _index) => (
            <div className="list-item">
              <div className="icon">
                {chosenLanguage === language.name ? '✓' : ''}
              </div>
              <li
                key={_index}
                onClick={handleClick}
                id={language.code}
                style={{
                  color: chosenLanguage === language.name ? '#8ab4f8' : null,
                }}
              >
                {language.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
