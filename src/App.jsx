import { useState } from "react";

import "./App.css";
import FullForm from "./components/FullForm";
import Preview from "./components/Preview";

const generalInputs = document.querySelectorAll("section.general input");
const educationalInputs = document.querySelectorAll("section.education input");
const practicalInputs = document.querySelectorAll("section.practical input");

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });
  const [practicalInfo, setPracticalInfo] = useState({
    company: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  function handleGeneralInfoAdd() {
    const nameValue = generalInputs[0].value;
    const emailValue = generalInputs[1].value;
    const phoneValue = generalInputs[2].value;
    setGeneralInfo({ name: nameValue, email: emailValue, phone: phoneValue });
  }

  return (
    <>
      <FullForm handleGeneralInfoAdd={() => handleGeneralInfoAdd()} />
      <Preview generalInfo={generalInfo} />
    </>
  );
}

export default App;
