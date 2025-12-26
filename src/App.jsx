import { useState } from "react";

import "./App.css";
import FullForm from "./components/FullForm";
import Preview from "./components/Preview";

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

  // for setting up individual entry id for setting up keys
  const [generalCounter, setGeneralCounter] = useState(0);
  const [educationCounter, setEducationCounter] = useState(0);
  const [practicalCounter, setPracticalCounter] = useState(0);

  function handleGeneralInfoChange(e) {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  }

  function handlePracticalInfoChange(e) {
    const { name, value } = e.target;
    setPracticalInfo({ ...practicalInfo, [name]: value });
  }

  function handleGeneralInfoAdd() {
    setGeneralInfoEntries([
      ...generalInfoEntries,
      { ...generalInfo, id: `G-${generalCounter}` },
    ]);
    setGeneralCounter(generalCounter + 1);
    const generalInputs = document.querySelectorAll("section.general input");
    generalInputs.forEach((input) => (input.value = ""));
  }
  function handleEducationInfoAdd() {
    setEducationInfoEntries([
      ...educationInfoEntries,
      { ...educationInfo, id: `E-${educationCounter}` },
    ]);
    setEducationCounter(educationCounter + 1);
    const educationInputs = document.querySelectorAll(
      "section.education input"
    );
    educationInputs.forEach((input) => (input.value = ""));
  }
  function handlePracticalInfoAdd() {
    setPracticalInfoEntries([
      ...practicalInfoEntries,
      { ...practicalInfo, id: `P-${practicalCounter}` },
    ]);
    setPracticalCounter(practicalCounter + 1);
    const practicalInputs = document.querySelectorAll(
      "section.practical input"
    );
    practicalInputs.forEach((input) => (input.value = ""));
    const practicalTextarea = document.querySelector(
      "section.practical textarea"
    );
    practicalTextarea.value = "";
  }

  return (
    <>
      <FullForm
        handleGeneralInfoChange={(e) => handleGeneralInfoChange(e)}
        handleEducationInfoChange={(e) => handleEducationInfoChange(e)}
        handlePracticalInfoChange={(e) => handlePracticalInfoChange(e)}
        handleGeneralInfoAdd={() => handleGeneralInfoAdd()}
        handleEducationInfoAdd={() => handleEducationInfoAdd()}
        handlePracticalInfoAdd={() => handlePracticalInfoAdd()}
        generalInfoEntries={generalInfoEntries}
        educationInfoEntries={educationInfoEntries}
        practicalInfoEntries={practicalInfoEntries}
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
