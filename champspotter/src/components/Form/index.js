import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const classes = [
    "Controller",
    "Fighter",
    "Mage",
    "Marksman",
    "Slayer",
    "Tank",
  ];

  const rangeTypes = ["Melee", "Ranged"];

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [position, setPosition] = useState("");
  const [rangeType, setRangeType] = useState("");
  const [championClass, setChampionClass] = useState("");

  const onCreate = (event) => {
    event.preventDefault();
    props.onSubmittingChampion({
      name, 
      image,
      position, 
      rangeType, 
      championClass
    })
  };

  return (
    <section className="form">
      <form onSubmit={onCreate}>
        <h2>Fill in the fields to create the champion card:</h2>
        <TextField
          onEdit={(value) => setName(value)}
          value={name}
          required={true}
          label="Name"
          placeholder="Name of the champion here..."
        />
        <TextField
          onEdit={(value) => setImage(value)}
          value={image}
          required={true}
          label="Image"
          placeholder="Champion image address here..."
        />
        <DropdownList
          onEdit={(value) => setPosition(value)}
          value={position}
          required={true}
          label="Position"
          itens={props.positions}
        />
        <DropdownList
          onEdit={(value) => setChampionClass(value)}
          value={championClass}
          required={true}
          label="classes"
          itens={classes}
        />
        <DropdownList
          onEdit={(value) => setRangeType(value)}
          value={rangeType}
          required={true}
          label="rangeTypes"
          itens={rangeTypes}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
