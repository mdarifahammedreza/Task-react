import PropTypes from "prop-types";
const Item = ({ item, ButtonHandeler }) => {
  const { name } = item;
  const clasn = `btn w-full border-b-4 border-sky-500 mb-1
  }`;
  return (
    <div>
      <button
        className={clasn}
        onClick={() => {
          ButtonHandeler(item);
        }}>
        {name}
      </button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  ButtonHandeler: PropTypes.func.isRequired,
};

export default Item;
