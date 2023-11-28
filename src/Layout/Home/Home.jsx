import { useState } from "react";
import Cards from "../../Component/Cards/Cards";
import Items from "../../Component/Items/Items";

const Home = ({ items, searchitem }) => {
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

export default Home;
