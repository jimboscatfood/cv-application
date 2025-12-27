import { useState } from "react";

import "./styles/App.css";
import "./styles/form.css";
import "./styles/preview.css";
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

  const [generalEditMode, setGeneralEditMode] = useState(false);
  const [educationEditMode, setEducationEditMode] = useState(false);
  const [practicalEditMode, setPracticalEditMode] = useState(false);

  const [generalEditId, setGeneralEditId] = useState(null);
  const [educationEditId, setEducationEditId] = useState(null);
  const [practicalEditId, setPracticalEditId] = useState(null);

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

  function toggleShowUI() {
    const generalInputUI = document.querySelector(
      "section.general > div.user-input"
    );
    generalInputUI.classList.add("hide");
  }

  function handleGeneralInfoAdd() {
    if (generalInfo.username !== "") {
      if (generalEditMode === false) {
        setGeneralInfoEntries([
          ...generalInfoEntries,
          { ...generalInfo, id: `G-${generalCounter}` },
        ]);
        setGeneralCounter(generalCounter + 1);
      } else {
        const updatedEntries = generalInfoEntries.map((entry) => {
          if (entry.id === generalEditId) {
            return { ...generalInfo, id: entry.id };
          }
          return entry;
        });
        setGeneralInfoEntries(updatedEntries);
      }
      toggleShowUI();
    }
    // reset input value and info state
    const generalInputs = document.querySelectorAll("section.general input");
    generalInputs.forEach((input) => (input.value = ""));
    setGeneralInfo({
      username: "",
      email: "",
      phone: "",
    });
    setGeneralEditMode(false);
  }
  function handleEducationInfoAdd() {
    if (educationInfo.school !== "" || educationInfo.titleOfStudy !== "") {
      if (educationEditMode === false) {
        setEducationInfoEntries([
          ...educationInfoEntries,
          { ...educationInfo, id: `E-${educationCounter}` },
        ]);
        setEducationCounter(educationCounter + 1);
      } else {
        const updatedEntries = educationInfoEntries.map((entry) => {
          if (entry.id === educationEditId) {
            return { ...educationInfo, id: entry.id };
          }
          return entry;
        });
        setEducationInfoEntries(updatedEntries);
      }
    }
    const educationInputs = document.querySelectorAll(
      "section.education input"
    );
    educationInputs.forEach((input) => (input.value = ""));
    setEducationInfo({
      school: "",
      titleOfStudy: "",
      startDate: "",
      endDate: "",
    });
    setEducationEditMode(false);
  }
  function handlePracticalInfoAdd() {
    if (practicalInfo.company !== "" || practicalInfo.position !== "")
      if (practicalEditMode === false) {
        setPracticalInfoEntries([
          ...practicalInfoEntries,
          { ...practicalInfo, id: `P-${practicalCounter}` },
        ]);
        setPracticalCounter(practicalCounter + 1);
      } else {
        const updatedEntries = practicalInfoEntries.map((entry) => {
          if (entry.id === practicalEditId) {
            return { ...practicalInfo, id: entry.id };
          }
          return entry;
        });
        setPracticalInfoEntries(updatedEntries);
      }
    const practicalInputs = document.querySelectorAll(
      "section.practical input"
    );
    practicalInputs.forEach((input) => (input.value = ""));
    const practicalTextarea = document.querySelector(
      "section.practical textarea"
    );
    practicalTextarea.value = "";
    setPracticalInfo({
      company: "",
      position: "",
      responsibility: "",
      startDate: "",
      endDate: "",
    });
    setPracticalEditMode(false);
  }

  function handleEdit(e) {
    const targetID = e.currentTarget.parentNode.id;
    if (targetID.includes("G")) {
      const generalInputUI = document.querySelector(
        "section.general > div.user-input"
      );
      generalInputUI.classList.add("edit");
      if (generalInputUI.classList.contains("hide")) {
        generalInputUI.classList.remove("hide");
      }
      setGeneralEditMode(true);
      setGeneralEditId(targetID);
      const selectedEntry = generalInfoEntries.find(
        (entry) => entry.id === targetID
      );
      setGeneralInfo(selectedEntry);
      const generalInputs = document.querySelectorAll("section.general input");
      generalInputs[0].value = selectedEntry.username;
      generalInputs[1].value = selectedEntry.email;
      generalInputs[2].value = selectedEntry.phone;
    } else if (targetID.includes("E")) {
      setEducationEditMode(true);
      setEducationEditId(targetID);
      const selectedEntry = educationInfoEntries.find(
        (entry) => entry.id === targetID
      );
      setEducationInfo(selectedEntry);
      const educationInputs = document.querySelectorAll(
        "section.education input"
      );
      educationInputs[0].value = selectedEntry.school;
      educationInputs[1].value = selectedEntry.titleOfStudy;
      educationInputs[2].value = selectedEntry.startDate;
      educationInputs[3].value = selectedEntry.endDate;
    } else if (targetID.includes("P")) {
      setPracticalEditMode(true);
      setPracticalEditId(targetID);
      const selectedEntry = practicalInfoEntries.find(
        (entry) => entry.id === targetID
      );
      setPracticalInfo(selectedEntry);
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

  function handleDelete(e) {
    const targetID = e.currentTarget.parentNode.id;
    if (targetID.includes("G")) {
      const updatedArr = generalInfoEntries.filter(
        (entry) => entry.id !== targetID
      );
      setGeneralInfoEntries(updatedArr);
    } else if (targetID.includes("E")) {
      const updatedArr = educationInfoEntries.filter(
        (entry) => entry.id !== targetID
      );
      setEducationInfoEntries(updatedArr);
    } else if (targetID.includes("P")) {
      const updatedArr = practicalInfoEntries.filter(
        (entry) => entry.id !== targetID
      );
      setPracticalInfoEntries(updatedArr);
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
        handleDelete={(e) => handleDelete(e)}
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
