import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Title = ({ color, title, subtitle, children }) => {
  return (
    <>
      <Link to="/about">About</Link>
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
