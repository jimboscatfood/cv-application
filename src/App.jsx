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
