import React , {useState} from "react";
import axios from 'axios'
import {Routes, Route} from 'react-router-dom';
import InputForm from "./components/InputForm/InputForm"
import UpdatedForm from "./components/UpdatedForm/UpdatedForm"
import {  FormContextProvider } from "./Contexts/FormContext";

function App() {
  return (
    <FormContextProvider>

    <Routes>

        <Route path="/"
          element={<InputForm />} />

        <Route path="updatedForm"
          element={<UpdatedForm />} />
      </Routes>
    </FormContextProvider>
  );
}

export default App;
