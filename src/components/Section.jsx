// the Section component will be getting the labelArray prop from the whole Form component
export default function Section({ sectionInfo, handleSubmit, className }) {
  return (
    <section className={className}>
      <h2>{sectionInfo.sectionName}</h2>
      {/* // based on the prop, create the Input components */}
      {sectionInfo.inputs.map((inputObj) => (
        <Input label={inputObj.inputLabel} type={inputObj.inputType} />
      ))}
      <button className="add" onClick={handleSubmit}>
        Add
      </button>
    </section>
  );
}

function Input({ label, type }) {
  return (
    <p className="input-container">
      <label>
        {label}
        {type === "textarea" ? <textarea /> : <input type={type} />}
      </label>
    </p>
  );
}
