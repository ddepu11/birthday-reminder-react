const Persons = ({ name, age, avatar }) => {
  return (
    <div className="person flex">
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>{age}&nbsp;&nbsp;years</p>
      </div>
    </div>
  );
};

export default Persons;
