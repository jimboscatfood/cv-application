// the Section component will be getting the labelArray prop from the whole Form component
export default function Section({
  sectionInfo,
  handleSubmit,
  handleChange,
  className,
}) {
  return (
    <section className={className}>
      <h2>{sectionInfo.sectionName}</h2>
      {/* // based on the prop, create the Input components */}
      {sectionInfo.inputs.map((inputObj) => (
        <Input
          label={inputObj.inputLabel}
          type={inputObj.inputType}
          handleChange={handleChange}
          name={inputObj.name}
        />
      ))}
      <button className="add" onClick={handleSubmit}>
        Add
      </button>
    </section>
  );
}

function Input({ label, type, handleChange, name }) {
  return (
    <p className="input-container">
      <label>
        {label}
        {type === "textarea" ? (
          <textarea onChange={handleChange} name={name} />
        ) : (
          <input type={type} onChange={handleChange} name={name} />
        )}
      </label>
    </p>
  );
}
