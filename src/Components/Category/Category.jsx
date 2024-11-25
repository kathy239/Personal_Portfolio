import PropTypes from "prop-types";

const Category = ({ title, items }) => {
  return (
    <div className="category">
      <h2 className="attri">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired, // Ensures title is a required string
  items: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures items is an array of strings
};

export default Category;
