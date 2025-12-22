export default function Preview({
  generalInfoEntries,
  educationInfoEntries,
  practicalInfoEntries,
}) {
  return (
    <div className="preview">
      <Header generalInfoEntries={generalInfoEntries} />
      <Education educationInfo={educationInfoEntries} />
      <Practical practicalInfo={practicalInfoEntries} />
    </div>
  );
}

function Header({ generalInfoEntries }) {
  return (
    <div className="cv-header">
      <h1 className="name">
        {generalInfoEntries[0] && generalInfoEntries[0].username}
      </h1>
      <h3 className="email">
        {generalInfoEntries[0] && generalInfoEntries[0].email}
      </h3>
      <h3 className="phone">
        {generalInfoEntries[0] && generalInfoEntries[0].phone}
      </h3>
    </div>
  );
}

function Education({ educationInfo }) {
  return (
    <div className="cv-education">
      <h2>Educational Experience</h2>
      <div>
        <h3 className="school">{educationInfo.school}</h3>
        <h4 className="title">{educationInfo.title}</h4>
        <h5 className="date">{educationInfo.startDate}</h5>
        <h5 className="date">{educationInfo.endDate}</h5>
      </div>
    </div>
  );
}

function Practical({ practicalInfo }) {
  return (
    <div className="cv-practical">
      <h2>Practical Experience</h2>
      <div>
        <h3 className="company">{practicalInfo.company}</h3>
        <h4 className="position">{practicalInfo.position}</h4>
        <p className="responsibility">{practicalInfo.responsibility}</p>
        <h5 className="date">{practicalInfo.startDate}</h5>
        <h5 className="date">{practicalInfo.endDate}</h5>
      </div>
    </div>
  );
}
