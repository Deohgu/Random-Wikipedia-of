import React, { useState, useEffect, useRef } from "react";

import { TitleInput } from "./components";
import styles from "./App.module.css";

import { newCat, newSubCat, recommendedFunc } from "./api";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [prevInputData, setPrevInputData] = useState("");
  const [recommendedArr, setRecommendedArr] = useState([]);
  const [recomPressed, setRecomPressed] = useState(false);
  const [randomPage, setRandomPage] = useState("Random");

  // useEffect is returning an array of recommended searches based on input and in return we are rendering that array with .map to create several recommendations in the form of buttons.
  useEffect(() => {
    const fetchedData = async () => {
      const dataTransf = await recommendedFunc(inputData);
      setRecommendedArr(dataTransf);
    };
    fetchedData();
  }, [inputData]);

  useEffect(() => {
    if (recomPressed === true) {
      submitData(inputData);
    }
    setRecomPressed(false);
  }, [recomPressed === true]);

  const submitData = async (dataToFetch) => {
    let fetchedData = "";
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      fetchedData = await newCat(dataToFetch.replace(/[" "]/g, "_"));
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      fetchedData = await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
    setRandomPage(fetchedData);
  };

  const searchInput = useRef(null);

  const handleFocus = () => {
    searchInput.current.focus();
  };

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        handleChange={(e) => setInputData(e.target.value)}
        inputDataSubmit={() => submitData(inputData)}
        randomPageTitle={randomPage}
        recommendedArr={recommendedArr}
        setInputData={setInputData}
        setRecomPressed={setRecomPressed}
        handleFocus={handleFocus}
        searchInput={searchInput}
      />
    </div>
  );
};

export default App;


// Delete after
// Done - Need to change the text to the planned one on evernote.
// Done - Need to change the top margin when on the phone
// Done - Need to change the bottom margin of the container where CATEGORY is, remove there and add to the recommendations container instead (mostly for the black bar at the moment)
// Need to have a way to search the results without a subcategory,maybe for now use a secrect key. that calls a funtion with sub cats just to use on things like COnspiracy Theories.
