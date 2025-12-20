// the Section component will be getting the labelArray prop from the whole Form component
export default function Section({ sectionInfo }) {
  return (
    <section>
      <h2>{sectionInfo.sectionName}</h2>
      {/* // based on the prop, create the Input components */}
      {sectionInfo.inputs.map((inputObj) => (
        <Input label={inputObj.inputLabel} type={inputObj.inputType} />
      ))}
      <button className="add">Add</button>
    </section>
  );
}

function Input({ label, type }) {
  return (
    <div className="input-container">
      <label>
        {label}
        {type === "textarea" ? <textarea /> : <input />}
      </label>
    </div>
  );
}
