import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat, recommendedFunc } from './api';

const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ prevInputData, setPrevInputData ] = useState("")
  const [ recommendedArr, setRecommendedArr ] = useState([])
   
  // useEffect is returning an array of recommended searches.
  // In return we are rendering that array with .map to create several <a>.
  // In CSS the <a> will be edited so that it shows neatly underneath like the codePen example.
  
  useEffect(() => {
    const fetchedData = async () => {
    const dataTransf = await recommendedFunc(inputData);
    setRecommendedArr(dataTransf)
   };
   fetchedData();
  }, [inputData]);

  const submitData = async (dataToFetch) => {
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      await newCat(dataToFetch.replace(/[" "]/g, "_"));
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
  }


  return (
    <div className={styles.container}>
      <TitleInput
        inputData={ inputData }
        handleChange={ (e) => setInputData(e.target.value) } 
        inputDataSubmit={ () => submitData(inputData) }
      />

      {/* Understand why the console.log is being exuted without requiring a click */}

      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
      The link in onclick events states that it is better to use the button element to execute javascript due to errors*/}

      {/* Need to convert the name to a slug before providing it as a link, aparently seems to work without but might be limted to certain browsers. Not sure what converts it. Probably browser specific */}
      <div className={styles.recContainer}> 
        { /* ternary to not attempt to render the initial undefined value */
        (recommendedArr !== undefined)
          ? ( recommendedArr.map( (curr, index) => (
              <button
                className={styles.recommendations}
                type="button"
                onClick={console.log("test")
                // onClick={setInputData(curr
                //   .replace(/Category:/g, "")
                //   .replace(/[" "]/g, "_"))
                }>
                {curr
                  .replace(/Category:/g, "")
                }
              </button>
            )) )
          : null
        }
      </div>
    </div>
  );
}


// App done whilst following a youtube video regarding a different app done with React
// Left off at ####
// https://www.youtube.com/watch?v=khJlrj3Y6Ls
// Compare with this one to understand
// https://www.youtube.com/watch?v=U9T6YkEDkMo

export default App;