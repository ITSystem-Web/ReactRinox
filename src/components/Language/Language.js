
import React, { useState } from "react";
import './Language.css'
import { useTranslation } from 'react-i18next';

function App() {

  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);

  }

  const [langActiv, setLang] = useState(false)

  const toggleLang = () => {
    setLang(!langActiv);
  };

  let Lang = ["RO", "RU"]

  const [selectedLang, setSelectedLang] = useState(Lang[0])


  return (
    <div className="LangMain"  >
      <div className="language" >
        <div onClick={toggleLang} className="langbtn">{selectedLang}</div>

        <div className={langActiv ? "langcontainer show  " : "langcontainer"} >
          {Lang.map((limba, index) => (
            <li key={index} onClick={() => { setSelectedLang(limba); toggleLang(); handleClick(limba) }}>{limba}  </li>))}


        </div>

      </div>
    </div>
  );
}

export default App;