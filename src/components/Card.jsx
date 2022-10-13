import React from "react";

const Card = ({char_id, name, img}) => {
  return (
    <div className="">
      <div className="">
      <div className="">
            <h4 className="text-center">
              {char_id} - {name}
            </h4>
            <img id="imgCard"
              className="border border-warning"
              src={img}
              alt={name}
            />
          </div>
      </div>
    </div>
  );
};

export default Card;
