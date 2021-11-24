import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';


function App() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    mailPrefix: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function filtered(input) {
    return String(input).toLowerCase();
  }


  return (
    <div className="App">
      <header className="App-header">
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={filtered(values.mailPrefix)}
            onChange={handleChange('mailPrefix')}
            endAdornment={<InputAdornment position="end">@kth.se</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">KTH mail</FormHelperText>
        </FormControl>
        <QRCode value={filtered(values.mailPrefix)} />
        <p>
          Fyll i din KTH mejl här. Inga personuppgifter sparas.
        </p>
      </header>
    </div>
  );
}

export default App;
