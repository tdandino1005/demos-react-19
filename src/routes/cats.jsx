import PropTypes from "prop-types";
import CatCard from "../components/CatCard";
import catsData from "../data/cats";

export default function Cats() {
  return (
    <main className="container mx-auto space-y-8">
      <section>
        <h2>🐱s</h2>
        <div className="cards-container grid-cols-4">
          {catsData.map((cat) => {
            return <CatCard cat={cat} key={cat.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

Cats.propTypes = {
  catsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
