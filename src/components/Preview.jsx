export default function Preview({
  generalInfoEntries,
  educationInfoEntries,
  practicalInfoEntries,
}) {
  return (
    <div className="preview">
      <Header generalInfoEntries={generalInfoEntries} />
      <Education educationInfoEntries={educationInfoEntries} />
      <Practical practicalInfoEntries={practicalInfoEntries} />
    </div>
  );
}

function Header({ generalInfoEntries }) {
  return (
    <div className="cv-header">
      {generalInfoEntries.length > 0 &&
        generalInfoEntries.map((entry) => (
          <div className="user-info" key={entry.id}>
            <h1 className="username">{entry.username}</h1>
            <h3 className="email">{entry.email}</h3>
            <h3 className="phone">{entry.phone}</h3>
          </div>
        ))}
    </div>
  );
}

function Education({ educationInfoEntries }) {
  return (
    <div className="cv-education">
      <h2>Educational Experience</h2>
      {educationInfoEntries.length > 0 &&
        educationInfoEntries.map((entry) => (
          <div>
            <h3 className="school">{entry.school}</h3>
            <h4 className="title">{entry.titleOfStudy}</h4>
            <h5 className="date">{entry.startDate}</h5>
            <h5 className="date">{entry.endDate}</h5>
          </div>
        ))}
    </div>
  );
}

function Practical({ practicalInfoEntries }) {
  return (
    <div className="cv-practical">
      <h2>Practical Experience</h2>
      {practicalInfoEntries.length > 0 &&
        practicalInfoEntries.map((entry) => (
          <div>
            <h3 className="company">{entry.company}</h3>
            <h4 className="position">{entry.position}</h4>
            <p className="responsibility">{entry.responsibility}</p>
            <h5 className="date">{entry.startDate}</h5>
            <h5 className="date">{entry.endDate}</h5>
          </div>
        ))}
    </div>
  );
}
