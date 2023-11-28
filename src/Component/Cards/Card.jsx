import PropTypes from "prop-types";

const Card = ({ cardinfo }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-5">{cardinfo?.name}</h1>
            <p className="py-1">{"description : " + cardinfo?.description}</p>
            <p className="py-1 text-xl font-semibold">
              {"Location : " + cardinfo?.location}
            </p>
            <p className="py-1 text-sm font-medium">
              {"Last result : " + cardinfo?.lastResult}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  cardinfo: PropTypes.object.isRequired,
};
export default Card;
