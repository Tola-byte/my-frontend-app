import React from "react";
import {Routes, Route} from 'react-router-dom';
import InputForm from "./components/InputForm/InputForm"
import UpdatedForm from "./components/InputForm/InputForm"

function App() {
  return (
    <>
    <Routes>
        <Route path="/"
          element={<InputForm />} />
        <Route path="updatedForm"
          element={<InputForm />} />
      </Routes>
     
    </>
  );
}

export default App;
