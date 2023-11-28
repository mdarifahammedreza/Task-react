import Card from "./Card";
import PropTypes from "prop-types";
const Cards = ({ cardinfo, searchitem }) => {
  return (
    <div className="w-2/3">
      <Card cardinfo={cardinfo} searchitem={searchitem}></Card>
    </div>
  );
};
Cards.propTypes = {
  cardinfo: PropTypes.object.isRequired,
  searchitem: PropTypes.object.isRequired,
};
export default Cards;
