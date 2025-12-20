export default function Preview({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div>
      <Header generalInfo={generalInfo} />
      <Education educationInfo={educationInfo} />
      <Practical practicalInfo={practicalInfo} />
    </div>
  );
}

function Header({ generalInfo }) {
  return (
    <div className="cv-header">
      <h1 className="name">{generalInfo.name}</h1>
      <h3 className="email">{generalInfo.email}</h3>
      <h3 className="phone">{generalInfo.phone}</h3>
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
