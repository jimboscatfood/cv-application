// the Section component will be getting the labelArray prop from the whole Form component
export default function Section({
  sectionInfo,
  handleSubmit,
  handleChange,
  handleEdit,
  className,
  infoEntries,
}) {
  return (
    <section className={className}>
      <h2>{sectionInfo.sectionName}</h2>
      {/* {if there is any existing entry, show them here as a list of entries which they can choose to edit or delete} */}
      <EntriesList infoEntries={infoEntries} handleEdit={handleEdit} />
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

function EntriesList({ infoEntries, handleEdit }) {
  return (
    <ul className="entries-container">
      {infoEntries.length > 0 &&
        infoEntries.map((entry) => (
          <li key={entry.id} id={entry.id}>
            <h4>{entry.username || entry.school || entry.company}</h4>
            <h4>{entry.titleOfStudy || entry.position}</h4>
            <button onClick={handleEdit}>Edit</button>
            <button>Delete</button>
          </li>
        ))}
    </ul>
  );
}
