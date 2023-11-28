import { useState } from "react";
import Cards from "../../Component/Cards/Cards";
import Items from "../../Component/Items/Items";
import PropTypes from "prop-types";
const Home = ({ items }) => {
  const [cardinfo, setcardinfo] = useState({
    name: "Welcome",
    description: "tap a device to see des",
    location: "unknown",
  });
  const ButtonHandeler = (itm) => {
    setcardinfo(itm);
  };

  return (
    <div className="flex mt-5">
      <Items items={items} ButtonHandeler={ButtonHandeler}></Items>
      <Cards cardinfo={cardinfo}></Cards>
    </div>
  );
};
Home.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Home;
