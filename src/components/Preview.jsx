export default function Preview({ generalInfo }) {
  return (
    <div>
      <Header generalInfo={generalInfo} />
    </div>
  );
}

function Header({ generalInfo }) {
  return (
    <div className="header">
      <h1 className="name">{generalInfo.name}</h1>
      <h3 className="email">{generalInfo.email}</h3>
      <h3 className="phone">{generalInfo.phone}</h3>
    </div>
  );
}

function Section1({ entryObj }) {
  return (
    <div className="section1">
      <h2>Educational Experience</h2>
    </div>
  );
}
