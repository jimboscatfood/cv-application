import Section from "./Section";

export default function FullForm({
  handleGeneralInfoAdd,
  handleEducationInfoAdd,
  handlePracticalInfoAdd,
}) {
  const sections = [
    {
      sectionName: "General Information",
      inputs: [
        {
          inputLabel: "Name",
          inputType: "text",
        },
        {
          inputLabel: "Email",
          inputType: "email",
        },
        {
          inputLabel: "Phone number",
          inputType: "tel",
        },
      ],
    },
    {
      sectionName: "Educational Experience",
      inputs: [
        {
          inputLabel: "School name",
          inputType: "text",
        },
        {
          inputLabel: "Title of study",
          inputType: "text",
        },
        {
          inputLabel: "Starting date",
          inputType: "month",
        },
        { inputLabel: "Ending date", inputType: "month" },
      ],
    },
    {
      sectionName: "Practical Experience",
      inputs: [
        { inputLabel: "Company name", inputType: "text" },
        { inputLabel: "Position title", inputType: "text" },
        { inputLabel: "Main responsibilities", inputType: "textarea" },
        { inputLabel: "Starting date", inputType: "month" },
        { inputLabel: "Ending date", inputType: "month" },
      ],
    },
  ];

  return (
    <>
      <Section
        sectionInfo={sections[0]}
        className="general"
        handleSubmit={handleGeneralInfoAdd}
      />
      <Section
        sectionInfo={sections[1]}
        className="education"
        handleSubmit={handleEducationInfoAdd}
      />
      <Section
        sectionInfo={sections[2]}
        className="practical"
        handleSubmit={handlePracticalInfoAdd}
      />
    </>
  );
}
