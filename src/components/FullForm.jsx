import Section from "./Section";

export default function FullForm({
  handleGeneralInfoAdd,
  handleEducationInfoAdd,
  handlePracticalInfoAdd,
  handleGeneralInfoChange,
  handleEducationInfoChange,
  handlePracticalInfoChange,
  generalInfoEntries,
  educationInfoEntries,
  practicalInfoEntries,
}) {
  const sections = [
    {
      sectionName: "General Information",
      inputs: [
        {
          inputLabel: "Name",
          inputType: "text",
          name: "username",
        },
        {
          inputLabel: "Email",
          inputType: "email",
          name: "email",
        },
        {
          inputLabel: "Phone number",
          inputType: "tel",
          name: "phone",
        },
      ],
    },
    {
      sectionName: "Educational Experience",
      inputs: [
        {
          inputLabel: "School name",
          inputType: "text",
          name: "school",
        },
        {
          inputLabel: "Title of study",
          inputType: "text",
          name: "titleOfStudy",
        },
        {
          inputLabel: "Starting date",
          inputType: "month",
          name: "startDate",
        },
        { inputLabel: "Ending date", inputType: "month", name: "endDate" },
      ],
    },
    {
      sectionName: "Practical Experience",
      inputs: [
        { inputLabel: "Company name", inputType: "text", name: "company" },
        { inputLabel: "Position title", inputType: "text", name: "position" },
        {
          inputLabel: "Main responsibilities",
          inputType: "textarea",
          name: "responsibility",
        },
        { inputLabel: "Starting date", inputType: "month", name: "startDate" },
        { inputLabel: "Ending date", inputType: "month", name: "endDate" },
      ],
    },
  ];

  return (
    <div className="form">
      <Section
        sectionInfo={sections[0]}
        className="general"
        handleSubmit={handleGeneralInfoAdd}
        handleChange={handleGeneralInfoChange}
        infoEntries={generalInfoEntries}
      />
      <Section
        sectionInfo={sections[1]}
        className="education"
        handleSubmit={handleEducationInfoAdd}
        handleChange={handleEducationInfoChange}
        infoEntries={educationInfoEntries}
      />
      <Section
        sectionInfo={sections[2]}
        className="practical"
        handleSubmit={handlePracticalInfoAdd}
        handleChange={handlePracticalInfoChange}
        infoEntries={practicalInfoEntries}
      />
    </div>
  );
}
