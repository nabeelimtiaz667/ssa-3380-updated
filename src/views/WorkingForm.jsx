import { useEffect, useRef, useState } from "react";
import { CheckboxGroup, Textbox, YesNoCheckbox } from "../shared/Inputs";
import FormLabel from "../shared/Label";
import FlattenData from "../utils/FlattenData";
import axios from "axios";
import DatePicker from "../shared/DatePicker";

export default function WorkingForm() {
  const [disableName, setDisableName] = useState("");
  const [yourName, setYourName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [date, setDate] = useState({});
  const [areacode, setAreacode] = useState("");
  const [phone, setPhone] = useState("");
  const [numberType, setNumberType] = useState(null); // Your Number | Message Number | None
  const [knowDisable, setKnowDisable] = useState("");
  const [timeWithDisable, setTimeWithDisable] = useState("");
  const [whereDisableLive, setWhereDisableLive] = useState(null);
  const [withWhomDisableLive, setWithWhomDisableLive] = useState(null);
  const [limitAbility, setLimitAbility] = useState("");
  const [whatDisableDo, setWhatDisableDo] = useState("");
  const [doesTakeCare, setDoesTakeCare] = useState([]);
  const [takeCareYes, setTakeCareYes] = useState("");
  const [takePetCare, setTakePetCare] = useState([]);
  const [petCareYes, setPetCareYes] = useState("");
  const [helpTakeCare, setHelpTakeCare] = useState([]);
  const [helpTakeCareYes, setHelpTakeCareYes] = useState("");
  const [whatDoBefore, setWhatDoBefore] = useState("");
  const [effectSleep, setEffectSleep] = useState([]);
  const [effectSleepYes, setEffectSleepYes] = useState("");
  const [takePersonalCare, setTakePersonalCare] = useState([]);
  const [takePersonalCareYesDress, setTakePersonalCareYesDress] = useState("");
  const [takePersonalCareYesBathe, setTakePersonalCareYesBathe] = useState("");
  const [takePersonalCareYesHair, setTakePersonalCareYesHair] = useState("");
  const [takePersonalCareYesShave, setTakePersonalCareYesShave] = useState("");
  const [takePersonalCareYesFeed, setTakePersonalCareYesFeed] = useState("");
  const [takePersonalCareYesToilet, setTakePersonalCareYesToilet] =
    useState("");
  const [takePersonalCareYesOther, setTakePersonalCareYesOther] = useState("");
  const [specialReminders, setSpecialReminders] = useState([]);
  const [specialRemindersYes, setSpecialRemindersYes] = useState("");
  const [medicineReminders, setMedicineReminders] = useState([]);
  const [medicineRemindersYes, setMedicineRemindersYes] = useState("");
  const [prepareMeals, setPrepareMeals] = useState([]);
  const [prepareMealsYesFoodKind, setPrepareMealsYesFoodKind] = useState("");
  const [prepareMealsYesFoodOften, setPrepareMealsYesFoodOften] = useState("");
  const [prepareMealsYesHowLong, setPrepareMealsYesHowLong] = useState("");
  const [prepareMealsYesHabitChange, setPrepareMealsYesHabitChange] =
    useState("");
  const [prepareMealsNo, setPrepareMealsNo] = useState("");
  const [doHousehold, setDoHousehold] = useState([]);
  const [doHouseholdYesListChores, setDoHouseholdYesListChores] = useState("");
  const [doHouseholdYesChoreTime, setDoHouseholdYesChoreTime] = useState("");
  const [doHouseholdYesEncourage, setDoHouseholdYesEncourage] = useState([]);
  const [doHouseholdYesEncourageYes, setDoHouseholdYesEncourageYes] =
    useState("");
  const [doesGoOutside, setDoesGoOutside] = useState([]);
  const [doesGoOutsideNo, setDoesGoOutsideNo] = useState("");
  const [howOftenOutside, setHowOftenOutside] = useState("");
  const [howdoesTravel, setHowdoesTravel] = useState(null);
  const [goOutAlone, setGoOutAlone] = useState([]);
  const [goOutAloneNo, setGoOutAloneNo] = useState("");
  const [disableDriving, setDisableDriving] = useState([]);
  const [disableDrivingNo, setDisableDrivingNo] = useState("");
  const [disableShopping, setDisableShopping] = useState([]);
  const [disableDoShopping, setDisableDoShopping] = useState(null);
  const [whatShops, setWhatShops] = useState("");
  const [howLongShop, setHowLongShop] = useState("");
  const [payBills, setPayBills] = useState([]);
  const [savingAccounts, setsavingAccounts] = useState([]);
  const [countChange, setcountChange] = useState([]);
  const [useCheckbook, setuseCheckbook] = useState([]);
  const [no_money, setNoMoney] = useState("");
  const [handleMoney, setHandleMoney] = useState([]);
  const [handleMoneyYes, setHandleMoneyYes] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [wellhobbies, setWellHobbies] = useState("");

  const jotformObject = {
    q190_1Name: disableName,
    q487_2Your: yourName,
    q488_3Relationship: relationship,
    q489_4Date: date,
    q327_primary327: {
      area: areacode,
      phone: phone,
    },
    q354_typeA354: numberType,
    q491_6A: knowDisable,
    q492_bHow492: timeWithDisable,
    q355_4aWheredoyouliveCheckone: whereDisableLive,
    q356_bWith: withWhomDisableLive,
    q358_8How: limitAbility,
    q360_9Describe: whatDisableDo,
    q361_10Does: doesTakeCare,
    q363_ifyes: takeCareYes,
    q362_11Does: takePetCare,
    q365_ifyes365: petCareYes,
    q364_12Does: helpTakeCare,
    q367_ifyes367: helpTakeCareYes,
    q368_13What: whatDoBefore,
    q366_14Do: effectSleep,
    q370_ifyes370: effectSleepYes,
    q369_15Personal: takePersonalCare,
    q373_dress: takePersonalCareYesDress,
    q374_bathe: takePersonalCareYesBathe,
    q375_careFor: takePersonalCareYesHair,
    q376_shave: takePersonalCareYesShave,
    q377_feedSelf: takePersonalCareYesFeed,
    q378_useThe: takePersonalCareYesToilet,
    q379_other: takePersonalCareYesOther,
    q372_12Do372: specialReminders,
    q385_ifyes385: specialRemindersYes,
    q384_cDoes: medicineReminders,
    q387_ifyes387: medicineRemindersYes,
    q386_aDoes: prepareMeals,
    q394_bIf: prepareMealsNo,
    q390_ifyes390: prepareMealsYesFoodKind,
    q391_howOften: prepareMealsYesFoodOften,
    q393_howLong: prepareMealsYesHowLong,
    q392_anyChanges: prepareMealsYesHabitChange,
    q485_doThe: doHousehold,
    q396_a: doHouseholdYesListChores,
    q397_bHow: doHouseholdYesChoreTime,
    q389_cDo389: doHouseholdYesEncourage,
    q398_ifyes398: doHouseholdYesEncourageYes,
    q404_doesThis: doesGoOutside,
    q405_ifHeshe: doesGoOutsideNo,
    q403_aHow: howOftenOutside,
    q406_bWhen: howdoesTravel,
    q407_cWhen: goOutAlone,
    q409_ifno: goOutAloneNo,
    q408_dDoes: disableDriving,
    q410_ifYou410: disableDrivingNo,
    q486_doesThe: disableShopping,
    q412_aIf: disableDoShopping,
    q413_bDescribe: whatShops,
    q414_cHow: howLongShop,
    q416_payBills: payBills,
    q417_handleA: savingAccounts,
    q418_countChange: countChange,
    q419_useA: useCheckbook,
    q421_explainAll: no_money,
    q420_useA420: handleMoney,
    q422_ifyes422: handleMoneyYes,
    q425_aWhat: hobbies,
  };

  // If checkbox yes with textbox has no, then remove the answers of yes textbox
  useEffect(() => {
    if (doesTakeCare.includes("No")) {
      setTakeCareYes("");
    }
  }, [doesTakeCare]);
  useEffect(() => {
    if (takePetCare.includes("No")) {
      setPetCareYes("");
    }
  }, [takePetCare]);
  useEffect(() => {
    if (helpTakeCare.includes("No")) {
      setHelpTakeCareYes("");
    }
  }, [helpTakeCare]);
  useEffect(() => {
    if (effectSleep.includes("No")) {
      setEffectSleepYes("");
    }
  }, [effectSleep]);
  useEffect(() => {
    // Remove all textbox answers of personal care if no
    if (takePersonalCare.includes("No")) {
      setTakePersonalCareYesDress("");
      setTakePersonalCareYesBathe("");
      setTakePersonalCareYesHair("");
      setTakePersonalCareYesShave("");
      setTakePersonalCareYesFeed("");
      setTakePersonalCareYesToilet("");
      setTakePersonalCareYesOther("");
    }
  }, [takePersonalCare]);
  useEffect(() => {
    if (specialReminders.includes("No")) {
      setSpecialRemindersYes("");
    }
  }, [specialReminders]);
  useEffect(() => {
    if (medicineReminders.includes("No")) {
      setMedicineRemindersYes("");
    }
  }, [medicineReminders]);
  useEffect(() => {
    if (prepareMeals.includes("No")) {
      setPrepareMealsYesFoodKind("");
      setPrepareMealsYesFoodOften("");
      setPrepareMealsYesHowLong("");
      setPrepareMealsYesHabitChange("");
    }
  }, [prepareMeals]);
  useEffect(() => {
    if (doHousehold.includes("No")) {
      setDoHouseholdYesListChores("");
      setDoHouseholdYesChoreTime("");
      setDoHouseholdYesEncourage([]);
      setDoHouseholdYesEncourageYes("");
    }
  }, [doHousehold]);
  useEffect(() => {
    if (doHouseholdYesEncourage.includes("No")) {
      setDoHouseholdYesEncourageYes("");
    }
  }, [doHouseholdYesEncourage]);
  useEffect(() => {
    if (doesGoOutside.includes("No")) {
      setHowOftenOutside("");
      setHowdoesTravel(null);
      setGoOutAlone([]);
      setGoOutAloneNo("");
      setDisableDriving([]);
      setDisableDrivingNo("");
    }
  }, [doesGoOutside]);
  useEffect(() => {
    if (disableShopping.includes("No")) {
      setDisableDoShopping(null);
      setWhatShops("");
      setHowLongShop("");
    }
  }, [disableShopping]);
  useEffect(() => {
    if (handleMoney.includes("No")) {
      setHandleMoneyYes("");
    }
  }, [handleMoney]);

  // If checkbox no with textbox has yes, then remove the answers of no textbox
  useEffect(() => {
    if (prepareMeals.includes("Yes")) {
      setPrepareMealsNo("");
    }
  }, [prepareMeals]);

  useEffect(() => {
    if (doesGoOutside.includes("Yes")) {
      setDoesGoOutsideNo("");
    }
  }, [doesGoOutside]);
  useEffect(() => {
    if (goOutAlone.includes("Yes")) {
      setGoOutAloneNo("");
    }
  }, [goOutAlone]);
  useEffect(() => {
    if (disableDriving.includes("Yes")) {
      setDisableDrivingNo("");
    }
  }, [disableDriving]);

  useEffect(() => {
    const everyYes = [
      ...payBills,
      ...savingAccounts,
      ...countChange,
      ...useCheckbook,
    ];
    // Check if every item is yes
    if (everyYes.every((item) => item === "Yes")) {
      setNoMoney("");
    }
  }, [payBills, savingAccounts, countChange, useCheckbook]);

  const convertObject = () => {
    const data = FlattenData(jotformObject);
    sessionStorage.setItem("JotFormData", JSON.stringify(data));
    console.log("Following data has been stored in session storage:", data);
  };
  const sendData = async () => {
    const data = JSON.parse(sessionStorage.getItem("JotFormData"));
    const formValues = new FormData();
    for (const key in data) {
      formValues.append(key, data[key]);
    }
    try {
      const response = await axios.post(
        "https://submit.jotform.com/submit/242508927461461/",
        formValues,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        console.log("Data sent successfully:", response.data);
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to JotForm:", error);
    }
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
      <DatePicker
        id="form_filling_date"
        dateRange="future"
        dateState={date}
        setDateState={setDate}
        labelText="4. Date of Form Filling"
        required
      />
      <div className="flex flex-col gap-2">
        <FormLabel id="primary_number">
          5. Your Primary <span className="text-red-500">*</span>
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
          checkboxObject={setNumberType}
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
        limit={45}
        required
      />
      <Textbox
        id="timeWithDisable"
        name="timeWithDisable"
        state={timeWithDisable}
        setState={setTimeWithDisable}
        labelText="b. How much time do you spend with the disabled person and what do you do together?"
        textarea
        limit={100}
      />
      <CheckboxGroup
        options={[
          "House",
          "Apartment",
          "Boarding House",
          "Nursing Home",
          "Shelter",
          "Group Home",
        ]}
        name="whereDisableLive"
        checkboxObject={setWhereDisableLive}
        labelText="7. a. Where does the disabled person live? (Check one.)"
        singleSelect
        other
        required
      />
      <CheckboxGroup
        options={["Alone", "With Family", "With Friends"]}
        name="withWhomDisableLive"
        checkboxObject={setWithWhomDisableLive}
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
        rows={4}
        textarea
        limit={400}
        required
      />
      <Textbox
        id="limitAbility"
        name="limitAbility"
        state={whatDisableDo}
        setState={setWhatDisableDo}
        labelText="9. Describe what the disabled person does from the time he/she wakes up until going to bed."
        rows={4}
        textarea
        limit={400}
        required
      />
      <YesNoCheckbox
        checkboxObject={setDoesTakeCare}
        labelText="10. Does this person take care of anyone else such as a wife/husband, children, grandchildren, parents, friend, other?"
        textBoxOnYes={
          <Textbox
            state={takeCareYes}
            setState={setTakeCareYes}
            id="q363_ifyes"
            name="q363_ifyes"
            labelText='If "YES," for whom does he/she care, and what does he/she do for them?'
            textarea
            limit={300}
            rows={3}
            required
          />
        }
        required
      />
      <YesNoCheckbox
        checkboxObject={setTakePetCare}
        labelText="11. Does he/she take care of pets or other animals?"
        textBoxOnYes={
          <Textbox
            state={petCareYes}
            setState={setPetCareYes}
            id="what_does_he_do"
            name="what_does_he_do"
            labelText='If "YES," what does he/she do for them?'
            textarea
            limit={200}
            rows={2}
            required
          />
        }
        required
      />
      <YesNoCheckbox
        checkboxObject={setHelpTakeCare}
        labelText="12. Does anyone help this person care for other people or animals?"
        textBoxOnYes={
          <Textbox
            state={helpTakeCareYes}
            setState={setHelpTakeCareYes}
            id="help_take_care"
            name="help_take_care"
            labelText='If "YES," who helps, and what do they do to help?'
            textarea
            limit={300}
            rows={3}
            required
          />
        }
        required
      />
      <Textbox
        id="whatDoBefore"
        name="whatDoBefore"
        state={whatDoBefore}
        setState={setWhatDoBefore}
        labelText="13. What was the disabled person able to do before his/her illnesses, injuries, or conditions that he/she can't do now?"
        rows={3}
        textarea
        limit={300}
        required
      />
      <YesNoCheckbox
        checkboxObject={setEffectSleep}
        labelText="14. Do the illnesses, injuries, or conditions affect his/her sleep?"
        textBoxOnYes={
          <Textbox
            state={effectSleepYes}
            setState={setEffectSleepYes}
            id="do_effect_sleep"
            name="do_effect_sleep"
            labelText='If "YES," how?'
            textarea
            limit={300}
            rows={3}
            required
          />
        }
        required
      />
      <YesNoCheckbox
        checkboxObject={setTakePersonalCare}
        labelText="14. a. Do the illnesses, injuries, or conditions affect his/her sleep?"
        textBoxOnYes={
          <>
            <FormLabel id="take_personal_care">
              a. Explain how the illnesses, injuries, or conditions affect this
              person's ability to:
            </FormLabel>
            {[
              {
                state: takePersonalCareYesDress,
                setState: setTakePersonalCareYesDress,
                label: "Dress:",
              },
              {
                state: takePersonalCareYesBathe,
                setState: setTakePersonalCareYesBathe,
                label: "Bathe:",
              },
              {
                state: takePersonalCareYesHair,
                setState: setTakePersonalCareYesHair,
                label: "Care for Hair:",
              },
              {
                state: takePersonalCareYesShave,
                setState: setTakePersonalCareYesShave,
                label: "Shave:",
              },
              {
                state: takePersonalCareYesFeed,
                setState: setTakePersonalCareYesFeed,
                label: "Feed Self:",
              },
              {
                state: takePersonalCareYesToilet,
                setState: setTakePersonalCareYesToilet,
                label: "Use the Toilet:",
              },
              {
                state: takePersonalCareYesOther,
                setState: setTakePersonalCareYesOther,
                label: "Other:",
              },
            ].map((item, index) => {
              return (
                <Textbox
                  key={"q369_options_on_yes_" + index}
                  state={item.state}
                  setState={item.setState}
                  id={`q369_${item.label}_${index}`}
                  name={`q369_${item.label}_${index}`}
                  labelText={item.label}
                  textarea
                  limit={80}
                />
              );
            })}
          </>
        }
        required
      />
      <YesNoCheckbox
        checkboxObject={setSpecialReminders}
        labelText="b. Does he/she need any special reminders to take care of personal needs and grooming?"
        textBoxOnYes={
          <Textbox
            state={specialRemindersYes}
            setState={setSpecialRemindersYes}
            id="special_reminder_need"
            name="special_reminder_need"
            labelText='If "YES," what type of help or reminders are needed?'
            textarea
            limit={276}
            rows={3}
            required
          />
        }
        required
      />
      <YesNoCheckbox
        checkboxObject={setMedicineReminders}
        labelText="c. Does he/she need help or reminders taking medicine?"
        textBoxOnYes={
          <Textbox
            state={medicineRemindersYes}
            setState={setMedicineRemindersYes}
            id="medicne_reminder_need"
            name="medicne_reminder_need"
            labelText='If "YES," what kind of help does he/she need?'
            textarea
            limit={276}
            rows={3}
            required
          />
        }
        required
      />

      <FormLabel id="meals">16. MEALS</FormLabel>

      <YesNoCheckbox
        checkboxObject={setPrepareMeals}
        labelText="a. Does the disabled person prepare his/her own meals?"
        textBoxOnYes={[
          {
            state: prepareMealsYesFoodKind,
            setState: setPrepareMealsYesFoodKind,
            label:
              'If "Yes," what kind of food is prepared? (For example, sandwiches, frozen dinners, or complete meals with several courses.)',
          },
          {
            state: prepareMealsYesFoodOften,
            setState: setPrepareMealsYesFoodOften,
            label:
              "How often does he/she prepare food or meals? (For example, daily, weekly, monthly.)",
          },
          {
            state: prepareMealsYesHowLong,
            setState: setPrepareMealsYesHowLong,
            label: "How long does it take him/her?",
          },
          {
            state: prepareMealsYesHabitChange,
            setState: setPrepareMealsYesHabitChange,
            label:
              "Any changes in cooking habits since the illness, injuries, or conditions began?",
          },
        ].map((item, index) => {
          return (
            <Textbox
              key={"q386_options_on_yes_" + index}
              state={item.state}
              setState={item.setState}
              id={`q386_${item.label}_${index}`}
              name={`q386_${item.label}_${index}`}
              labelText={item.label}
              textarea
              limit={92}
              required
            />
          );
        })}
        textBoxOnNo={
          <Textbox
            state={prepareMealsNo}
            setState={setPrepareMealsNo}
            id="doesnt_prepare_meals"
            name="doesnt_prepare_meals"
            labelText='b. If "No," explain why he/she cannot or does not prepare meals.'
            textarea
            limit={200}
            rows={2}
            required
          />
        }
        required
      />

      <FormLabel id="house_and_work">17. HOUSE AND YARD WORK</FormLabel>

      <YesNoCheckbox
        checkboxObject={setDoHousehold}
        labelText="Do the disabled person do household and yard work?"
        name="q485_doThe"
        textBoxOnYes={
          <>
            <Textbox
              state={doHouseholdYesListChores}
              setState={setDoHouseholdYesListChores}
              id="do_household_yes_list_chores"
              name="do_household_yes_list_chores"
              labelText="a . List household chores, both indoors and outdoors, that the disabled person is able to do . (For example, cleaning, laundry, household repairs, ironing, mowing, etc.)"
              textarea
              limit={200}
              rows={2}
              required
            />
            <Textbox
              state={doHouseholdYesChoreTime}
              setState={setDoHouseholdYesChoreTime}
              id="do_household_yes_chore_time"
              name="do_household_yes_chore_time"
              labelText="b. How much time do chores take, and how often does he/she do each of these things?"
              textarea
              limit={200}
              rows={2}
              required
            />
            <YesNoCheckbox
              checkboxObject={setDoHouseholdYesEncourage}
              labelText="c. Does he/she need help or encouragement doing these things?"
              name="need_encouragement"
              textBoxOnYes={
                <Textbox
                  state={doHouseholdYesEncourageYes}
                  setState={setDoHouseholdYesEncourageYes}
                  id="do_household_yes_encourage_yes"
                  name="do_household_yes_encourage_yes"
                  labelText='If "YES," what help is needed?'
                  textarea
                  limit={100}
                  required
                />
              }
              required
            />
          </>
        }
        required
      />

      <FormLabel id="house_and_work">18. GETTING AROUND</FormLabel>

      <YesNoCheckbox
        checkboxObject={setDoesGoOutside}
        labelText="Does this person go outside?"
        name="does_go_outside"
        textBoxOnNo={
          <Textbox
            state={doesGoOutsideNo}
            setState={setDoesGoOutsideNo}
            id="not_go_outside"
            name="not_go_outside"
            labelText="If he/she doesn't go out at all, explain why not."
            textarea
            limit={198}
            rows={2}
            required
          />
        }
        required
      />

      {doesGoOutside.includes("Yes") && (
        <>
          <Textbox
            id="how_often_outside"
            name="how_often_outside"
            state={howOftenOutside}
            setState={setHowOftenOutside}
            labelText="a. How often does this person go outside?"
            required
          />
          <CheckboxGroup
            options={[
              "Walk",
              "Drive a car",
              "Ride in a car",
              "Ride a bicycle",
              "Use public transportation",
            ]}
            labelText="b. When going out, how does he/she travel? (Check all that apply.)"
            checkboxObject={setHowdoesTravel}
            name="how_does_travel"
            singleSelect
            other
            required
          />
          <YesNoCheckbox
            checkboxObject={setGoOutAlone}
            name="can_go_out_alone"
            labelText="c. When going out, can he/she go out alone?"
            textBoxOnNo={
              <Textbox
                state={goOutAloneNo}
                setState={setGoOutAloneNo}
                id="why_not_go_out_alone"
                name="why_not_go_out_alone"
                labelText={`If "NO," explain why he/she can't go out alone.`}
                textarea
                limit={99}
                required
              />
            }
            required
          />
          <YesNoCheckbox
            checkboxObject={setDisableDriving}
            name="can_go_out_alone"
            labelText="d. Does the disabled person drive?"
            textBoxOnNo={
              <Textbox
                state={disableDrivingNo}
                setState={setDisableDrivingNo}
                id="why_not_go_out_alone"
                name="why_not_go_out_alone"
                labelText="If he/she doesn't drive, explain why not."
                textarea
                limit={200}
                required
              />
            }
            required
          />
        </>
      )}

      <FormLabel id="house_and_work">19. SHOPPING</FormLabel>

      <YesNoCheckbox
        checkboxObject={setDisableShopping}
        labelText="Does the disabled person do shopping?"
        required
        name="disable_shopping"
      />
      {disableShopping.includes("Yes") && (
        <>
          <CheckboxGroup
            checkboxObject={setDisableDoShopping}
            options={["In stores", "By phone", "By mail", "By computer"]}
            labelText="a. If the disabled person does any shopping, does he/she shop: (Check all that apply.)"
            name="disable_do_shopping"
            required
          />
          <Textbox
            id="what_shops"
            name="what_shops"
            state={whatShops}
            setState={setWhatShops}
            labelText="b. Describe what he/she shops for."
            textarea
            limit={200}
            rows={2}
            required
          />
          <Textbox
            id="how_long_shop"
            name="how_long_shop"
            state={howLongShop}
            setState={setHowLongShop}
            labelText="c. How often does he/she shop and how long does it take?"
            textarea
            limit={300}
            rows={3}
            required
          />
        </>
      )}

      <FormLabel id="money_questions">20. MONEY</FormLabel>
      <FormLabel id="able_money">a. Is he/she able to:</FormLabel>

      <YesNoCheckbox
        checkboxObject={setPayBills}
        labelText="Pay bills:"
        name="pay_bills"
        required
      />
      <YesNoCheckbox
        checkboxObject={setsavingAccounts}
        labelText="Handle a savings account:"
        name="saving_account"
        required
      />
      <YesNoCheckbox
        checkboxObject={setcountChange}
        labelText="Count change:"
        name="count_change"
        required
      />
      <YesNoCheckbox
        checkboxObject={setuseCheckbook}
        labelText="Use a checkbook/money orders:"
        name="checkbook"
        required
      />

      {[
        ...payBills,
        ...savingAccounts,
        ...countChange,
        ...useCheckbook,
      ].includes("No") && (
        <Textbox
          id="money_questions_no"
          name="money_questions_no"
          state={no_money}
          setState={setNoMoney}
          labelText='Explain all "NO" answers.'
          textarea
          limit={200}
          rows={2}
          required
        />
      )}

      <YesNoCheckbox
        checkboxObject={setHandleMoney}
        labelText="b. Has the disabled person's ability to handle money changed since the illnesses, injuries, or conditions began?"
        name="handle_money"
        textBoxOnYes={
          <Textbox
            state={handleMoneyYes}
            setState={setHandleMoneyYes}
            id="handle_money_yes"
            name="handle_money_yes"
            labelText='If "YES," explain how the ability to handle money has changed'
            textarea
            limit={300}
            rows={3}
            required
          />
        }
        required
      />

      <FormLabel id="hobbies_interests">21. HOBBIES AND INTERESTS</FormLabel>
      <Textbox
        id="hobbies"
        name="hobbies"
        state={hobbies}
        setState={setHobbies}
        labelText="a. What are his/her hobbies and interests? (For example, reading, watching TV, sewing, playing sports, etc.)"
        textarea
        limit={300}
        rows={3}
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
