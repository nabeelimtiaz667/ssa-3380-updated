import { useRef, useState } from "react";
import { CheckboxGroup, Textbox } from "../shared/Inputs";
import FormLabel from "../shared/Label";
import FlattenData from "../utils/FlattenData";

export default function WorkingForm() {
  const [disableName, setDisableName] = useState("");
  const [yourName, setYourName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [areacode, setAreacode] = useState("");
  const [phone, setPhone] = useState("");
  const numberType = useRef(null); // Your Number | Message Number | None
  const [knowDisable, setKnowDisable] = useState("");
  const [timeWithDisable, setTimeWithDisable] = useState("");
  const whereDisableLive = useRef(null);
  const withWhomDisableLive = useRef(null);
  const [limitAbility, setLimitAbility] = useState("");
  const jotformObject = {
    q190_1Name: disableName,
    q487_2Your: yourName,
    q488_3Relationship: relationship,
    q327_primary327: {
      area: areacode,
      phone: phone,
    },
    q354_typeA354: numberType.current,
    q491_6A: knowDisable,
    q492_bHow492: timeWithDisable,
    q355_4aWheredoyouliveCheckone: whereDisableLive.current,
    q356_bWith: withWhomDisableLive.current,
    q358_8How: limitAbility,
  };
  const convertObject = () => {
    const data = FlattenData(jotformObject);
    sessionStorage.setItem("JotFormData", JSON.stringify(data));
    console.log("Following data has been stored in session storage:", data);
  };
  const sendData = () => {
    const data = JSON.parse(sessionStorage.getItem("JotFormData"));
    const formValues = new FormData();
    for (const key in data) {
      formValues.append(key, data[key]);
    }
    console.log(formValues);
  };
  return (
    <div className="working-form flex flex-col gap-5" id="form-1">
      <Textbox
        id="disablePerson"
        name="disablePerson"
        state={disableName}
        setState={setDisableName}
        labelText="1. Name of Disabled Person"
        required
      />
      <Textbox
        id="your_name"
        name="your_name"
        state={yourName}
        setState={setYourName}
        labelText="2. Your Name"
        required
      />
      <Textbox
        id="relationship"
        name="relationship"
        state={relationship}
        setState={setRelationship}
        labelText="3. RELATIONSHIP (To disabled person)"
        required
      />
      <div className="flex flex-col gap-2">
        <FormLabel id="primary_number">
          Your Primary <span className="text-red-500">*</span>
        </FormLabel>
        <div className="flex flex-row gap-2">
          <Textbox
            id="areacode"
            name="areacode"
            state={areacode}
            setState={setAreacode}
            placeholder="212"
            hint="Area Code"
            required
          />
          <Textbox
            id="phone_num"
            name="phone_num"
            state={phone}
            setState={setPhone}
            containerClass="grow-[2]"
            placeholder="555-5555"
            hint="Phone Number"
            required
          />
        </div>
        <CheckboxGroup
          options={["Your Number", "Message Number", "None"]}
          name="primary_num_type"
          checkboxObject={numberType}
          singleSelect
          required
        />
      </div>
      <Textbox
        id="knowDisable"
        name="knowDisable"
        state={knowDisable}
        setState={setKnowDisable}
        labelText="6. a. How long have you known the disabled person?"
        textarea
        required
      />
      <Textbox
        id="timeWithDisable"
        name="timeWithDisable"
        state={timeWithDisable}
        setState={setTimeWithDisable}
        labelText="b. How much time do you spend with the disabled person and what do you do together?"
        textarea
      />
      <CheckboxGroup
        options={[
          "Housing",
          "Apartment",
          "Boarding House",
          "Nursing Home",
          "Shelter",
          "Group Home",
        ]}
        name="whereDisableLive"
        checkboxObject={whereDisableLive}
        labelText="7. a. Where does the disabled person live? (Check one.)"
        singleSelect
        other
        required
      />
      <CheckboxGroup
        options={["Alone", "With Family", "With Friends", "Nursing Home"]}
        name="withWhomDisableLive"
        checkboxObject={withWhomDisableLive}
        labelText="b. With whom does he/she live? (Check one.)"
        singleSelect
        other
        required
      />
      <Textbox
        id="limitAbility"
        name="limitAbility"
        state={limitAbility}
        setState={setLimitAbility}
        labelText="8. How does this person's illnesses, injuries, or conditions limit his/her ability to work?"
        rows={3}
        textarea
        required
      />
      <div className="flex flex-row justify-evenly">
        <button
          className="jotform-submit"
          onClick={() => console.log(jotformObject)}
        >
          Check object in console!
        </button>
        <button className="jotform-submit" onClick={convertObject}>
          Convert to form data!
        </button>
        <button className="jotform-submit" onClick={sendData}>
          Send data to JotForm!
        </button>
      </div>
    </div>
  );
}
