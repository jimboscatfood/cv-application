import Section from "./Section";

export default function FullForm() {
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
      <Section sectionInfo={sections[0]} />
      <Section sectionInfo={sections[1]} />
      <Section sectionInfo={sections[2]} />
    </>
  );
}
