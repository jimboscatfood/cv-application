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

  function handleEdit(e) {
    const targetID = e.currentTarget.parentNode.id;
    if (targetID.includes("G")) {
      const selectedEntry = generalInfoEntries.find(
        (entry) => entry.id === targetID
      );
      const generalInputs = document.querySelectorAll("section.general input");
      generalInputs[0].value = selectedEntry.username;
      generalInputs[1].value = selectedEntry.email;
      generalInputs[2].value = selectedEntry.phone;
    } else if (targetID.includes("E")) {
      const selectedEntry = educationInfoEntries.find(
        (entry) => entry.id === targetID
      );
      const educationInputs = document.querySelectorAll(
        "section.education input"
      );
      educationInputs[0].value = selectedEntry.school;
      educationInputs[1].value = selectedEntry.titleOfStudy;
      educationInputs[2].value = selectedEntry.startDate;
      educationInputs[3].value = selectedEntry.endDate;
    } else if (targetID.includes("P")) {
      const selectedEntry = practicalInfoEntries.find(
        (entry) => entry.id === targetID
      );
      const practicalInputs = document.querySelectorAll(
        "section.practical input"
      );
      const practicalTextarea = document.querySelector(
        "section.practical textarea"
      );
      practicalInputs[0].value = selectedEntry.company;
      practicalInputs[1].value = selectedEntry.position;
      practicalTextarea.value = selectedEntry.responsibility;
      practicalInputs[2].value = selectedEntry.startDate;
      practicalInputs[3].value = selectedEntry.endDate;
    }
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
        handleEdit={(e) => handleEdit(e)}
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
