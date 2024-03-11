import Champ from "../Champ";
import "./Position.css";

const Position = (props) => {
  const cssSection = { backgroundColor: props.secondaryColor };
  const cssTitle = { borderColor: props.primaryColor };

  return (
    (props.champions.length > 0) && <section className="position" style={cssSection}>
      <h3 style={cssTitle}>{props.position}</h3>
      <div className="positions">
        {props.champions.map((champ) => (
          <Champ
            primaryColor={props.primaryColor}
            rangeType={champ.rangeType}
            championClass={champ.championClass}
            image={champ.image}
            name={champ.name}
            key={champ.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Position;
