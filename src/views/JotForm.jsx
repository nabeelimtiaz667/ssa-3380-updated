import { useState } from "react";
import { Textbox } from "../shared/Inputs";

export default function JotForm() {
  const [disableName, setDisableName] = useState("");
  const [yourName, setYourName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [areacode, setAreacode] = useState("");
  const [phone, setPhone] = useState("");
  const [jotformObject, setJotformObject] = useState({
    q190_1Name: disableName,
    q487_2Your: yourName,
    q488_3Relationship: relationship,
  });
  return (
    <div className="jotform flex flex-col w-2xl">
      <Textbox
        id="input_1"
        state={disableName}
        setState={setDisableName}
        labelText="Enter this"
        textarea
        required
      />
    </div>
  );
}
