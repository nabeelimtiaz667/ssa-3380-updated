import { useEffect, useRef, useState } from "react";
import { CheckboxGroup, Textbox, YesNoCheckbox } from "../shared/Inputs";
import FormLabel from "../shared/Label";
import FlattenData from "../utils/FlattenData";
import axios from "axios";
import DatePicker from "../shared/DatePicker";

export default function WorkingForm() {
  const disableConditions = [
    "Lifting",
    "Standing",
    "Sitting",
    "Hearing",
    "Memory",
    "Understanding",
    "Getting Along With Others",
    "Squatting",
    "Reaching",
    "Kneeling",
    "Stair Climbing",
    "Completing Tasks",
    "Following Instructions",
    "Bending",
    "Walking",
    "Talking",
    "Seeing",
    "Concentration",
    "Using Hands",
  ];
  const disableUseCases = [
    "Crutches",
    "Walker",
    "Wheelchair",
    "None",
    "Cane",
    "Brace/Splint",
    "Artificial Limb",
    "Hearing Aid",
    "Glasses/Contact Lenses",
    "Artificial Voice Box",
  ];

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
  const [activityChange, setActivityChange] = useState("");
  const [disableSpentTime, setDisableSpentTime] = useState(null);
  const [doingThingsWithOthers, setDoingThingsWithOthers] = useState("");
  const [doingThingsOften, setDoingThingsOften] = useState("");
  const [listVisitingPlaces, setListVistingPlaces] = useState("");
  const [needReminder, setNeedReminder] = useState([]);
  const [needAccommodation, setNeedAccommodation] = useState([]);
  const [oftenVisit, setOftenVisit] = useState("");
  const [problemGettingAlong, setProblemGettingAlong] = useState([]);
  const [problemGettingAlongYes, setProblemGettingAlongYes] = useState("");
  const [changeInSocial, setChangeInSocial] = useState("");
  const [disableCondition, setDisableCondition] = useState([]);
  const [explainConditions, setExplainConditions] = useState("");
  const [isDisabled, setIsDisabled] = useState([]);
  const [payAttention, setPayAttention] = useState("");
  const [doesFinish, setDoesFinish] = useState([]);
  const [wrritenInstructions, setWrritenInstructions] = useState("");
  const [spokenInstructions, setSpokenInstructions] = useState("");
  const [wellWithAuthorities, setWellWithAuthorities] = useState("");
  const [firedFromJob, setFiredFromJob] = useState([]);
  const [firedFromJobYesExplain, setFiredFromJobYesExplain] = useState("");
  const [firedFromJobYesEmployer, setFiredFromJobYesEmployer] = useState("");
  const [handleStress, setHandleStress] = useState("");
  const [handleChangeRoutine, setHandleChangeRoutine] = useState("");
  const [unusual, setUnusual] = useState([]);
  const [unusualYes, setUnusualYes] = useState("");
  const [disableUses, setDisableUses] = useState(null);
  const [disableUsesYesWhich, setDisableUsesYesWhich] = useState("");
  const [disableUsesYesWhenPrescribed, setDisableUsesYesWhenPrescribed] =
    useState("");
  const [disableUsesYesWhenNeed, setDisableUsesYesWhenNeed] = useState("");
  const [disableTakeMedicine, setDisableTakeMedicine] = useState([]);
  const [medicineSideeffect, setMedicineSideeffect] = useState([]);
  const [nameOfMedicine_1, setNameOfMedicine_1] = useState("");
  const [nameOfMedicine_2, setNameOfMedicine_2] = useState("");
  const [nameOfMedicine_3, setNameOfMedicine_3] = useState("");
  const [nameOfMedicine_4, setNameOfMedicine_4] = useState("");
  const [nameEffectOfMedicine_1, setNameEffectOfMedicine_1] = useState("");
  const [nameEffectOfMedicine_2, setNameEffectOfMedicine_2] = useState("");
  const [nameEffectOfMedicine_3, setNameEffectOfMedicine_3] = useState("");
  const [nameEffectOfMedicine_4, setNameEffectOfMedicine_4] = useState("");
  const [remarks, setRemarks] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  const disableUseCondition = () => {
    if (disableUses) {
      if (Object.keys(disableUses).length > 0) {
        if (!Object.values(disableUses).includes("None")) {
          return true;
        }
        return false;
      }
      return false;
    }
    return false;
  };

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
    q426_bHow426: wellhobbies,
    q427_cDescribe: activityChange,
    q429_aHow429: disableSpentTime,
    q430_bDescribe430: doingThingsWithOthers,
    q431_howOften431: doingThingsOften,
    q432_cList: listVisitingPlaces,
    q433_doesHeshe: needReminder,
    q434_doYou434: needAccommodation,
    q435_howOften435: oftenVisit,
    q436_dDo436: problemGettingAlong,
    q438_ifyes438: problemGettingAlongYes,
    q439_eDescribe439: changeInSocial,
    q442_23A: disableCondition,
    q444_pleaseExplain: explainConditions,
    q445_bIs: isDisabled,
    q449_dFor: payAttention,
    q450_eDoes: doesFinish,
    q451_fHow: wrritenInstructions,
    q452_gHow: spokenInstructions,
    q453_hHow: wellWithAuthorities,
    q455_iHas: firedFromJob,
    q454_ifyes454: firedFromJobYesExplain,
    q456_ifyes456: firedFromJobYesEmployer,
    q457_jHow: handleStress,
    q460_kHow: handleChangeRoutine,
    q461_lHave: unusual,
    q462_ifyes462: unusualYes,
    q463_24Does: disableUses,
    q464_whichOf: disableUsesYesWhich,
    q465_whenWas: disableUsesYesWhenPrescribed,
    q466_whenDoes: disableUsesYesWhenNeed,
    q467_25Does: disableTakeMedicine,
    q470_if: medicineSideeffect,
    // The upcoming 8 enteries will be of medicine names and its side effects
    q472_1Name472: nameOfMedicine_1,
    q474_2Name: nameOfMedicine_2,
    q476_3Name: nameOfMedicine_3,
    q478_4Name: nameOfMedicine_4,
    q473_1Side: nameEffectOfMedicine_1,
    q475_2Side: nameEffectOfMedicine_2,
    q477_3Side: nameEffectOfMedicine_3,
    q479_4Side: nameEffectOfMedicine_4,
    q313_typeA: remarks,
    q317_name317: yourName,
    q483_date: date,
    q484_emailAddress: email,
    q319_mailingAddress: {
      addr_line1: address,
      addr_line2: "",
      city: city,
      state: province,
      postal: postal,
    },
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
  useEffect(() => {
    if (problemGettingAlong.includes("No")) {
      setProblemGettingAlongYes("");
    }
  }, [problemGettingAlong]);
  useEffect(() => {
    if (firedFromJob.includes("No")) {
      setFiredFromJobYesExplain("");
      setFiredFromJobYesEmployer("");
    }
  }, [firedFromJob]);
  useEffect(() => {
    if (unusual.includes("No")) {
      setUnusualYes("");
    }
  }, [unusual]);
  useEffect(() => {
    if (disableTakeMedicine.includes("No")) {
      setMedicineSideeffect([]);
      setNameOfMedicine_1("");
      setNameOfMedicine_2("");
      setNameOfMedicine_3("");
      setNameOfMedicine_4("");

      setNameEffectOfMedicine_1("");
      setNameEffectOfMedicine_2("");
      setNameEffectOfMedicine_3("");
      setNameEffectOfMedicine_4("");
    }
  }, [disableTakeMedicine]);
  useEffect(() => {
    if (medicineSideeffect.includes("No")) {
      setNameOfMedicine_1("");
      setNameOfMedicine_2("");
      setNameOfMedicine_3("");
      setNameOfMedicine_4("");

      setNameEffectOfMedicine_1("");
      setNameEffectOfMedicine_2("");
      setNameEffectOfMedicine_3("");
      setNameEffectOfMedicine_4("");
    }
  }, [medicineSideeffect]);

  // Custom conditions
  useEffect(() => {
    if (!disableCondition.length > 0) setExplainConditions("");
  }, [disableCondition]);
  useEffect(() => {
    if (!disableUseCondition()) {
      setDisableUsesYesWhich("");
      setDisableUsesYesWhenPrescribed("");
      setDisableUsesYesWhenNeed("");
    }
  }, [disableUses]);

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
        placeholder="First, Middle, Last, Suffix"
        required
      />
      <Textbox
        id="your_name"
        name="your_name"
        state={yourName}
        setState={setYourName}
        labelText="2. Your Name"
        placeholder="Person completing this form"
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
      <Textbox
        id="well_hobbies"
        name="well_hobbies"
        state={wellhobbies}
        setState={setWellHobbies}
        labelText="b. How often and how well does he/she do these things?"
        textarea
        limit={300}
        rows={3}
        required
      />
      <Textbox
        id="activityChange"
        name="activityChange"
        state={activityChange}
        setState={setActivityChange}
        labelText="c. Describe any changes in these activities since the illnesses, injuries, or conditions began."
        textarea
        limit={300}
        rows={3}
        required
      />
      <FormLabel id="hobbies_interests">22. SOCIAL ACTIVITIES</FormLabel>
      <CheckboxGroup
        checkboxObject={setDisableSpentTime}
        options={[
          "In person",
          "On the phone",
          "Email",
          "Texting",
          "Mail",
          "Video Chat (for example Skype or Facetime)",
        ]}
        labelText="a. How does the disabled person spend time with others? (Check all that apply.)"
        name="disable_spent_time"
        other
        required
      />
      <Textbox
        id="doingThingsWithOthers"
        name="doingThingsWithOthers"
        state={doingThingsWithOthers}
        setState={setDoingThingsWithOthers}
        labelText="b. Describe the kinds of things he/she does with others."
        textarea
        limit={100}
        rows={2}
        required
      />
      <Textbox
        id="doingThingsOften"
        name="doingThingsOften"
        state={doingThingsOften}
        setState={setDoingThingsOften}
        labelText="How often does he/she do these things?"
        textarea
        limit={48}
        required
      />
      <Textbox
        id="listVisitingPlaces"
        name="listVisitingPlaces"
        state={listVisitingPlaces}
        setState={setListVistingPlaces}
        labelText="c. List the places he/she goes on a regular basis. (For example, church, community center, sports events, social groups, etc.)"
        textarea
        limit={276}
        rows={3}
        required
      />
      <YesNoCheckbox
        checkboxObject={setNeedReminder}
        name="need_reminder"
        labelText="Does he/she need to be reminded to go places?"
        required
      />
      <Textbox
        id="oftenVisit"
        name="oftenVisit"
        state={oftenVisit}
        setState={setOftenVisit}
        labelText="How often does he/she go and how much does he/she take part?"
        textarea
        limit={276}
        rows={3}
        required
      />
      <YesNoCheckbox
        checkboxObject={setNeedAccommodation}
        name="need_accommodation"
        labelText="Does he/she need someone to accompany him/her?"
        required
      />
      <YesNoCheckbox
        checkboxObject={setProblemGettingAlong}
        name="problem_getting_along"
        labelText="d. Does this person have any problems getting along with family, friends, neighbors, or others?"
        textBoxOnYes={
          <Textbox
            state={problemGettingAlongYes}
            setState={setProblemGettingAlongYes}
            id="problem_getting_along_yes"
            name="problem_getting_along_yes"
            labelText='If "YES," explain.'
            textarea
            limit={98}
            rows={2}
            required
          />
        }
        required
      />
      <Textbox
        id="changeInSocial"
        name="changeInSocial"
        state={changeInSocial}
        setState={setChangeInSocial}
        labelText="e. Describe any changes in social activities since the illnesses, injuries, or conditions began."
        textarea
        limit={276}
        rows={3}
        required
      />
      <CheckboxGroup
        checkboxObject={setDisableCondition}
        options={disableConditions}
        labelText="23. a. Check any of the following items the disabled person's illnesses, injuries, or conditions affect:"
        name="disable_condition"
        required
      />
      {disableCondition.length > 0 && (
        <Textbox
          labelText="Please explain how his/her illnesses, injuries, or conditions affect each of the items you checked. (For example, he/she can only lift [how many pounds], or he/she can only walk [how far])"
          state={explainConditions}
          setState={setExplainConditions}
          id="explain_conditions"
          name="explain_conditions"
          textarea
          limit={368}
          rows={4}
          required
        />
      )}
      <CheckboxGroup
        checkboxObject={setIsDisabled}
        options={["Right Handed?", "Left Handed?"]}
        labelText="b. Is the disabled person:"
        name="is_disabled"
        id="is_disabled"
        required
      />
      <Textbox
        labelText="d. For how long can the disabled person pay attention?"
        state={payAttention}
        setState={setPayAttention}
        id="pay_attention"
        name="pay_attention"
        textarea
        limit={37}
        required
      />
      <YesNoCheckbox
        checkboxObject={setDoesFinish}
        labelText="e. Does the disabled person finish what he/she starts? (For example, a conversation, chores, reading, watching a movie.)"
        name="does_finish"
        required
      />
      <Textbox
        id="wrritenInstructions"
        name="wrritenInstructions"
        state={wrritenInstructions}
        setState={setWrritenInstructions}
        labelText="f. How well does the disabled person follow written instructions? (For example, a recipe.)"
        textarea
        limit={276}
        rows={3}
        required
      />
      <Textbox
        id="spokenInstructions"
        name="spokenInstructions"
        state={spokenInstructions}
        setState={setSpokenInstructions}
        labelText="g. How well does the disabled person follow spoken instructions?"
        textarea
        limit={276}
        rows={3}
        required
      />
      <Textbox
        state={wellWithAuthorities}
        setState={setWellWithAuthorities}
        labelText="h. How well does the disabled person get along with authority figures? (For example, police, bosses, landlords or teachers.)"
        id="wellWithAuthorities"
        name="wellWithAuthorities"
        textarea
        limit={95}
        required
      />
      <YesNoCheckbox
        checkboxObject={setFiredFromJob}
        labelText="i. Has he/she ever been fired or laid off from a job because of problems getting along with other people?"
        name="fired_from_job"
        textBoxOnYes={
          <>
            <Textbox
              id="firedFromJobYesExplain"
              name="firedFromJobYesExplain"
              state={firedFromJobYesExplain}
              setState={setFiredFromJobYesExplain}
              labelText='If "YES," please explain.'
              limit={92}
              rows={2}
              textarea
              required
            />
            <Textbox
              id="firedFromJobYesEmployer"
              name="firedFromJobYesEmployer"
              state={firedFromJobYesEmployer}
              setState={setFiredFromJobYesEmployer}
              labelText='If "YES," please give name of employer.'
              limit={53}
              textarea
              required
            />
          </>
        }
        required
      />
      <Textbox
        state={handleStress}
        setState={setHandleStress}
        id="handleStress"
        name="handleStress"
        labelText="j. How well does the disabled person handle stress?"
        textarea
        limit={188}
        rows={3}
        required
      />
      <Textbox
        state={handleChangeRoutine}
        setState={setHandleChangeRoutine}
        id="handleChangeRoutine"
        name="handleChangeRoutine"
        labelText="k. How well does he/she handle changes in routine?"
        textarea
        limit={188}
        rows={3}
        required
      />
      <YesNoCheckbox
        checkboxObject={setUnusual}
        labelText="l. Have you noticed any unusual behavior or fears in the disabled person?"
        name="unusual_behavior_or_fear"
        textBoxOnYes={
          <Textbox
            id="list_unusual_behavior_or_fear"
            name="list_unusual_behavior_or_fear"
            state={unusualYes}
            setState={setUnusualYes}
            labelText='If "YES," please explain.'
            limit={270}
            rows={3}
            textarea
            required
          />
        }
        required
      />
      <CheckboxGroup
        checkboxObject={setDisableUses}
        options={disableUseCases}
        labelText="24. Does the disabled person use any of the following? (Check all that apply.)"
        name="disable_uses"
        other
        required
      />
      {disableUseCondition() && (
        <>
          <Textbox
            labelText="Which of these were prescribed by a doctor? If you do not know or do not recall, please write that."
            state={disableUsesYesWhich}
            setState={setDisableUsesYesWhich}
            id="which_prescribed"
            name="which_prescribed"
            textarea
            limit={184}
            rows={3}
          />
          <Textbox
            labelText="When was it prescribed? If you do not know or do not recall, please write that."
            state={disableUsesYesWhenPrescribed}
            setState={setDisableUsesYesWhenPrescribed}
            id="when_prescribed"
            name="when_prescribed"
            textarea
            limit={276}
            rows={4}
          />
          <Textbox
            labelText="When does this person need to use these aids?"
            state={disableUsesYesWhenNeed}
            setState={setDisableUsesYesWhenNeed}
            id="when_need"
            name="when_need"
            textarea
            limit={368}
            rows={4}
          />
        </>
      )}
      <YesNoCheckbox
        checkboxObject={setDisableTakeMedicine}
        labelText="25. Does the disabled person currently take any medicines for his/her illnesses, injuries, or conditions?"
        name="disable_take_medicine"
        textBoxOnYes={
          <YesNoCheckbox
            checkboxObject={setMedicineSideeffect}
            labelText='If " YES," do any of the medicines cause side effects?'
            name="disable_take_medicine_yes"
            required
          />
        }
        required
      />
      {medicineSideeffect.includes("Yes") && (
        <>
          <div className="">
            If "YES," please explain. (Do not list all of the medicines that the
            disabled person takes. List only the medicines that cause side
            effects for the disabled person.)
          </div>
          <div className="flex flex-row gap-2">
            <Textbox
              id="medicine_1"
              name="medicine_name"
              containerClass="flex-1"
              state={nameOfMedicine_1}
              setState={setNameOfMedicine_1}
              labelText="1. Name of Medicine"
            />
            <Textbox
              id="effect_1"
              name="effect_name"
              containerClass="flex-1"
              state={nameEffectOfMedicine_1}
              setState={setNameEffectOfMedicine_1}
              labelText="Side effect Person has"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Textbox
              id="medicine_2"
              name="medicine_name"
              containerClass="flex-1"
              state={nameOfMedicine_2}
              setState={setNameOfMedicine_2}
              labelText="2. Name of Medicine"
            />
            <Textbox
              id="effect_2"
              name="effect_name"
              containerClass="flex-1"
              state={nameEffectOfMedicine_2}
              setState={setNameEffectOfMedicine_2}
              labelText="Side effect Person has"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Textbox
              id="medicine_3"
              name="medicine_name"
              containerClass="flex-1"
              state={nameOfMedicine_3}
              setState={setNameOfMedicine_3}
              labelText="3. Name of Medicine"
            />
            <Textbox
              id="effect_3"
              name="effect_name"
              containerClass="flex-1"
              state={nameEffectOfMedicine_3}
              setState={setNameEffectOfMedicine_3}
              labelText="Side effect Person has"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Textbox
              id="medicine_4"
              name="medicine_name"
              containerClass="flex-1"
              state={nameOfMedicine_4}
              setState={setNameOfMedicine_4}
              labelText="4. Name of Medicine"
            />
            <Textbox
              id="effect_4"
              name="effect_name"
              containerClass="flex-1"
              state={nameEffectOfMedicine_4}
              setState={setNameEffectOfMedicine_4}
              labelText="Side effect Person has"
            />
          </div>
        </>
      )}
      <div className="">
        Use this section for any added information you did not show in earlier
        parts of this form. When you are done with this section (or if you
        didn't have anything to add), be sure to complete the fields at the
        bottom of this page.
      </div>
      <Textbox
        id="remarks"
        state={remarks}
        setState={setRemarks}
        textarea
        limit={1748}
        rows={15}
      />
      <Textbox
        type="email"
        id="user_email"
        name="user_email"
        state={email}
        setState={setEmail}
        labelText="Email address of the person who is completing this form:"
        placeholder="example@example.com"
      />
      <div className="flex flex-col gap-2">
        <FormLabel>
          MAILING ADDRESS (Street or PO Box) Include the apartment number, if
          applicable.
          <span className="text-red-500">*</span>
        </FormLabel>
        <Textbox
          id="addressLine"
          name="addressLine"
          state={address}
          setState={setAddress}
          hint="Number and Street"
          required
        />
        <div className="flex flex-row space-x-4 w-full">
          <Textbox
            id="cityName"
            name="cityName"
            containerClass="flex-1"
            state={city}
            setState={setCity}
            hint="City"
            required
          />
          <Textbox
            id="provinceName"
            name="provinceName"
            containerClass="flex-1"
            state={province}
            setState={setProvince}
            hint="State / Province"
            required
          />
        </div>
        <Textbox
          id="postal"
          name="postal"
          state={postal}
          setState={setPostal}
          hint="Postal / Zip Code"
          required
        />
      </div>

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
