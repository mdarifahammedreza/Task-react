import Item from "./Item";
import PropTypes from "prop-types";
const Items = ({ items, ButtonHandeler }) => {
  return (
    <div className="w-1/3">
      {items.map((item) => (
        <Item
          item={item}
          key={item.name}
          ButtonHandeler={ButtonHandeler}></Item>
      ))}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  ButtonHandeler: PropTypes.func.isRequired,
};

export default Items;
