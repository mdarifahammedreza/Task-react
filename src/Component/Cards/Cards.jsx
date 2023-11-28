import Card from "./Card";

const Cards = ({ cardinfo, searchitem }) => {
  return (
    <div className="w-2/3">
      <Card cardinfo={cardinfo} searchitem={searchitem}></Card>
    </div>
  );
};

export default Cards;
