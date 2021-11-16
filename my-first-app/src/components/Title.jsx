import PropTypes from "prop-types";

const Title = ({ color, title, subtitle, children }) => {
  return (
    <>
      <h1 style={{ color }}>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{children}</p>
    </>
  );
};

Title.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Title;
