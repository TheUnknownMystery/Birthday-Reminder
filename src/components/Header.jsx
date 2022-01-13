const Header = ({ BirthDayNumber }) => (
  <h1 className="Header">
    {BirthDayNumber === 0 ? 'No' : BirthDayNumber} Birthdays today
  </h1>
);

Header.defaultProps = {
  BirthDayNumber: 0,
};

export default Header;
