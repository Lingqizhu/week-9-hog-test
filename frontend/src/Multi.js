import React, { Component, useMemo } from 'react';
import Select from "react-select";

function Multi(){
const options = useMemo(
    () => [
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "js", label: "JS" },
      { value: "react", label: "React" },
      { value: "redux", label: "Redux" },
      { value: "sass", label: "Sass" },

    ],
    []
  );

  
  return (
    <div className="App">
      <Select options={options} defaultValue={options} isMulti />
    </div>
  );
}

export default Multi;
