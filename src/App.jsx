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
    username: "",
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

  const [generalInfoEntries, setGeneralInfoEntries] = useState([]);
  const [educationInfoEntries, setEducationInfoEntries] = useState([]);
  const [practicalInfoEntries, setPracticalInfoEntries] = useState([]);

  function handleGeneralInfoChange(e) {
    console.log(generalInfo);
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  function handleEducationInfoChange() {
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

  function handlePracticalInfoChange() {
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

  function handleGeneralInfoAdd() {
    setGeneralInfoEntries([...generalInfoEntries, generalInfo]);
  }
  function handleEducationInfoAdd() {
    setEducationInfoEntries([...educationInfoEntries, educationInfo]);
  }
  function handlePracticalInfoAdd() {
    setPracticalInfoEntries([...practicalInfoEntries, practicalInfo]);
  }

  return (
    <>
      <FullForm
        handleGeneralInfoChange={(e) => handleGeneralInfoChange(e)}
        handleEducationInfoChange={() => handleEducationInfoChange()}
        handlePracticalInfoChange={() => handlePracticalInfoChange()}
        handleGeneralInfoAdd={() => handleGeneralInfoAdd()}
        handleEducationInfoAdd={() => handleEducationInfoAdd()}
        handlePracticalInfoAdd={() => handlePracticalInfoAdd()}
      />
      <Preview
        generalInfoEntries={generalInfoEntries}
        educationInfoEntries={educationInfoEntries}
        practicalInfoEntries={practicalInfoEntries}
      />
    </>
  );
}

export default App;
