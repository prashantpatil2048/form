import { useState } from "react";


function ProjDemo() {
  const [result, setResult] = useState(0);
  const [field, setField] = useState('');
  const [numInputs, setNumInputs] = useState(0);
  const [inputValues, setInputValues] = useState(Array(5).fill(''));

  const handleNumInputChange = (event) => {
    const newNum = parseInt(event.target.value, 10);
    setNumInputs(newNum);
    setInputValues(Array(newNum).fill(''));
  };

  const handleInputValueChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  const handleCalculate = () => {
    try {
      setResult(eval(field).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className="m-5">
      <h1 className="text-center">Project</h1>
      <div className='flex flex-col sm:w-full'>
        <div className='my-2'>
          <lable>Formula Name:</lable> <input className='p-1 mx-2 ring-offset-2 ring-2'
            placeholder='eg:Enter Formula name' />
        </div>
        <div className='my-2'>
          <lable>Formula:</lable> <input className='p-1 mx-2 ring-offset-2 ring-2'

            placeholder='eg: Enter a formula' />
        </div>
        {/* <div className='my-2'>
          <lable>Input field:</lable> <input className='p-1 mx-2 ring-offset-2 ring-2'
            placeholder='eg:Enter Input field' />
        </div> */}
        <div>
          <label>
            Number of Inputs:
            <input
              type="number"
              className='p-1 m-2 ring-offset-2 ring-2'
              placeholder="enter a input"
              // value={numInputs}
              onChange={handleNumInputChange}
            />
          </label>

          {Array.from({ length: numInputs  }).map((_, index) => (
            <div key={index}>
              {index + 1}
              <input
                key={index}
                type="text"
                className='p-1 m-2 ring-offset-2 ring-2'
                value={inputValues[index]}
                onChange={(e) => handleInputValueChange(index, e.target.value)}
              />
               <input
                key={index}
                type="text"
                className='p-1 m-2 ring-offset-2 ring-2'
                value={inputValues[index]}
                onChange={(e) => handleInputValueChange(index, e.target.value)}
              /> <input
              key={index}
              type="text"
              className='p-1 m-2 ring-offset-2 ring-2'
              value={inputValues[index]}
              onChange={(e) => handleInputValueChange(index, e.target.value)}
            /> <input
            key={index}
            type="text"
            className='p-1 m-2 ring-offset-2 ring-2'
            value={inputValues[index]}
            onChange={(e) => handleInputValueChange(index, e.target.value)}
          />
              <br />
            </div>
          ))}
        </div>
        <div className='my-2'>
          <lable>calculate:</lable> <input className='p-1 mx-2 ring-offset-2 ring-2'
            onChange={(e) => {
              setField(e.target.value);
            }}
            placeholder='eg:Enter calculate field' />
        </div>
        <div className='my-2'>
          <button className='border w-80 shadow-xl ring-offset-2 ring-2'
            onClick={handleCalculate}
          >Sumit</button>
          <p className="mt-2">Answere= {result}</p>
        </div>
      </div>

    </div>





  );
}

export default ProjDemo;
