import { useState } from "react";

import "./App.css";
import FullForm from "./components/FullForm";
import Preview from "./components/Preview";

const generalInputs = document.querySelectorAll("section.general input");
const educationalInputs = document.querySelectorAll("section.education input");
const practicalInputs = document.querySelectorAll("section.practical input");
const practicalTextarea = document.querySelector("section.practical textarea");

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

  function handleEducationInfoAdd() {
    const schoolValue = educationalInputs[0].value;
    const titleValue = educationalInputs[1].value;
    const startDateValue = educationalInputs[2].value;
    const endDateValue = educationalInputs[3].value;
    setEducationInfo({
      school: schoolValue,
      titleOfStudy: titleValue,
      startDate: startDateValue,
      endDate: endDateValue,
    });
  }

  function handlePracticalInfoAdd() {
    const companyValue = practicalInputs[0].value;
    const positionValue = practicalInputs[1].value;
    const responsibilityValue = practicalTextarea.value;
    const startDateValue = practicalInputs[2].value;
    const endDateValue = practicalInputs[3].value;
    setPracticalInfo({
      company: companyValue,
      position: positionValue,
      responsibility: responsibilityValue,
      startDate: startDateValue,
      endDate: endDateValue,
    });
  }

  return (
    <>
      <FullForm
        handleGeneralInfoAdd={() => handleGeneralInfoAdd()}
        handleEducationInfoAdd={() => handleEducationInfoAdd()}
        handlePracticalInfoAdd={() => handlePracticalInfoAdd()}
      />
      <Preview
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      />
    </>
  );
}

export default App;
