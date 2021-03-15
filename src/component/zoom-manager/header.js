const Header = ({ title, onFullSchedule, setFullSchedule }) => {
  const onClick = () => {
    setFullSchedule(!onFullSchedule);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button className="btn" onClick={onClick}>
        {onFullSchedule ? "Create Meeting" : "Full Schedule"}
      </button>
    </div>
  );
};

export default Header;
