import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
import image from './images/light blue creative modern medical clinic presentation.jpg'

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [isHeight, setIsHeight] = useState(true);
  const [isWeight, setIsWeight] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');

  const getvalidate = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === "height") {
        setHeight(value);
        setIsHeight(true);
      } else {
        setWeight(value);
        setIsWeight(true);
      }
    } else {
      if (name === "height") {
        setHeight(value);
        setIsHeight(false);
      } else {
        setWeight(value);
        setIsWeight(false);
      }
    }
  };

  const calc = (e) => {
    e.preventDefault();

    const Mheight = height / 100;
    const bmiValue = (weight / (Mheight * Mheight)).toFixed(2);
    setBmi(bmiValue);

    let feedbackText = '';
    let feedbackColor = '';

    if (bmiValue < 18.5) {
      feedbackText = 'Underweight';
      feedbackColor = 'blue'; // Set your desired color for Underweight
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      feedbackText = 'Normal Weight';
      feedbackColor = 'green'; // Set your desired color for Normal Weight
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      feedbackText = 'Overweight';
      feedbackColor = 'orange'; // Set your desired color for Overweight
    } else {
      feedbackText = 'Obese';
      feedbackColor = 'red'; // Set your desired color for Obese
    }

    setFeedback(feedbackText);
    setFeedbackColor(feedbackColor);
  };

  const reset = (e) => {
    setBmi('');
    setHeight('');
    setWeight('');
    setFeedback('');
    setFeedbackColor('');
  };

  return (
    <div className="App" >
      <img src={image} width={'100%'} style={{position:'relative'}} className='d-flex justify-content-center align-items-center align-items-center' alt="" />

      <div className='bg-light p-5 rounded ' style={{ width: "400px" ,marginTop:'-700px' ,marginLeft:'750px',position:'absolute'}}>
          <div style={{ height: '200px' }} className='border rounded  d-flex justify-content-center align-items-center align-items-center w-100 p-4 rounded flex-column'>
            <h3 style={{ color: 'black' }}>BMI Calculator</h3>
            <h1>{bmi}</h1>
            <p style={{ color: feedbackColor }}>{feedback}</p>
          </div>
          <form action="" onSubmit={calc}>
            <div className='d-flex mt-5'>
              <div className='me-3  d-flex justify-content-center align-items-center  w-50 p-4  rounded flex-column'>
                <TextField name='height' onChange={(e) => getvalidate(e)} className='  w-100' id="outlined-basic" label="Height in cm" variant="outlined" />
                {
                  !isHeight &&
                  <p style={{ color: 'red' }}>*Invalid Input</p>
                }
              </div>
              <div className='bg-grey d-flex justify-content-center align-items-center  w-50 p-4 rounded flex-column'>
                <TextField name='weight' onChange={(e) => getvalidate(e)} className='  w-100' id="outlined-basic" label="Weight in Kg" variant="outlined" />
                {
                  !isWeight &&
                  <p style={{ color: 'red' }}>*Invalid Input</p>
                }
              </div>
            </div>
            <Stack className='mt-4' direction="row" spacing={1}>
              <div className='d-flex justify-content-center align-items-center ' ><Button type='submit' className='bg-success' style={{ width: "200px", height: "50px" }} variant="contained">Calculate</Button></div>
              <Button onClick={reset} className='' style={{ width: "200px", height: "50px" }} variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      {/* <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center align-items-center w-100 bg-dark'>
       
      </div> */}
    </div>
  );
}

export default App;
