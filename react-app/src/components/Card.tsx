import type { ReactNode } from "react";

interface Item {
  name: string;
  category: string;
}

interface Props {
  items: Item[];
}
const Card = ({ items }: Props) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-start">
        {items.map((item) => (
          <div className="card" style={{ width: "16rem" }}>
            <img
              src="https://placehold.co/600x400"
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
