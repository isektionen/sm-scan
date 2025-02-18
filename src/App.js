import './App.css';
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { motion } from "framer-motion";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import { Box, Heading, Center, Flex, Circle } from "@chakra-ui/react";
import VercelBanner from './components/VercelBanner';

// Extracted Logo component
const Logo = ({ pathVariants }) => (
  <Center pt="0.3em">
    <Circle bg="#7c5a3e" size="15vh">
      <svg stroke="white" width="80%" height="80%" viewBox="0 0 228 362" fill="none">
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M104.201 90.2309C77.9875 166.45 28.1272 314.489 31.2737 317.635C33.4276 319.789 42.0435 313.327 48.5055 300.403L121.424 90.5395C115.715 90.4268 109.95 90.3242 104.201 90.2309Z"
        />
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M124.844 80.6972H107.486C106.44 83.7269 105.343 86.9107 104.201 90.2309C109.95 90.3242 115.715 90.4268 121.424 90.5395L124.844 80.6972Z"
        />
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M136.819 46.2341C141.127 33.3103 123.895 35.4637 119.587 46.2341C118.686 48.4874 114.114 61.4953 107.486 80.6972H124.844L136.819 46.2341Z"
        />
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M154.05 11.7699C154.05 17.7179 144.921 22.5398 138.973 22.5398C133.025 22.5398 126.049 17.7179 126.049 11.7699C126.049 5.82184 137.333 1 143.281 1C149.229 1 154.05 5.82184 154.05 11.7699Z"
        />
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M4.52717 80.6972C-2.83357 80.6972 3.27201 89.3131 5.42598 89.3131C6.98654 89.3131 54.9979 89.4324 104.201 90.2309C105.343 86.9107 106.44 83.7269 107.486 80.6972H4.52717Z"
        />
        <motion.path
            transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 2.3 },
            }}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M89.4311 349.947C78.6612 352.101 72.1993 362.871 76.5072 360.717C80.8152 358.563 126.479 355.179 143.281 354.255C178.922 353.769 192.822 349.944 192.822 341.331C190.668 328.407 177.744 321.943 177.744 317.635C177.744 313.327 186.36 309.019 188.514 306.865C190.668 304.711 188.738 303.35 186.36 302.557L173.436 298.249C166.974 296.095 164.82 293.941 184.206 289.633C192.822 287.479 194.976 285.325 194.976 278.863C194.976 272.401 175.59 265.939 175.59 261.631C176.737 260.484 177.744 259.477 186.36 259.477C194.976 259.477 224.369 253.802 227.286 233.63L227.286 141.009C225.132 100.083 197.13 80.6972 158.358 80.6972H124.844M121.424 90.5395L124.844 80.6972M124.844 80.6972H107.486M124.844 80.6972L136.819 46.2341C141.127 33.3103 123.895 35.4637 119.587 46.2341C118.686 48.4874 114.114 61.4953 107.486 80.6972M154.05 11.7699C154.05 17.7179 144.921 22.5398 138.973 22.5398C133.025 22.5398 126.049 17.7179 126.049 11.7699C126.049 5.82184 137.333 1 143.281 1C149.229 1 154.05 5.82184 154.05 11.7699Z"
        />
      </svg>
    </Circle>
  </Center>
);

// Extracted LoginForm component
const LoginForm = ({ email, setEmail, pincode, setPincode, handleChange, filtered }) => (
  <Box>
    <FormControl sx={{ m: 0, width: '19em' }} variant="outlined">
      <OutlinedInput
        value={filtered(email)}
        onChange={handleChange('mailPrefix')}
        endAdornment={<InputAdornment position="end">@kth.se</InputAdornment>}
        placeholder='Din KTH-mail'
        inputProps={{ 'aria-label': 'mailPrefix', maxLength: 10 }}
      />
    </FormControl>
    <FormControl sx={{ m: 0, width: '19em', mt: '1em' }} variant="outlined">
      <OutlinedInput
        type="password"
        value={pincode}
        onChange={(e) => {
          const value = e.target.value;
          // allow only numbers and limit to 3 digits
          if (/^\d{0,3}$/.test(value)) {
            setPincode(value);
          }
        }}
        placeholder="Välj en 3-siffrig pinkod"
        inputProps={{ maxLength: 3, pattern: "[0-9]{3}" }}
        aria-label="pincode"
      />
    </FormControl>
  </Box>
);

function App() {
  const [values, setValues] = useState({ mailPrefix: '' });
  const [pincode, setPincode] = useState('');
  const pathVariants = {
    hidden: { pathLength: 0, fill: "rgba(255,255,255,0)" },
    visible: { pathLength: 1, fill: "rgba(255,255,255,1)" },
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const filtered = (input) => String(input).toLowerCase();

  // Combine email prefix and pincode into a string "emailPrefix:pincode"
  // The email is converted to lower case and only the part before "@" is used,
  // ensuring you can split the QR code string by ":" in your database.
  const filter_for_qr_code = (mail, pincode) => {
    let filteredMail = String(mail).toLowerCase();
    if (mail.includes("@")) {
      filteredMail = filteredMail.split("@")[0];
    }
    return `${filteredMail}:${pincode}`;
  };

  return (
    <div className="App">
      <Center>
        <Box maxW="25em">
          <Flex flexDir="column" align="center" mb="1em">
            <Logo pathVariants={pathVariants} />
            <Heading as="h2" mt="1em" textAlign="center" size="3xl">
              Fyll i din KTH-mail och välj en slumpmässig tresiffrig pinkod<br /><br />
              Skanna QR-koden vid incheckning
            </Heading>
          </Flex>
          <LoginForm 
            email={values.mailPrefix} 
            setEmail={(val) => setValues({ ...values, mailPrefix: val })}
            pincode={pincode} 
            setPincode={setPincode} 
            handleChange={handleChange} 
            filtered={filtered}
          />
          <Center>
          <p style={{ fontSize: "1.2em"}}>
            <h4>Inga personuppgifter sparas!</h4>
            </p>
          </Center>
          <Paper elevation={0} style={{ padding:"0", marginTop:"0" }}>
            <Center>
              <QRCode size="270" value={filter_for_qr_code(values.mailPrefix, pincode)} />
            </Center>
          </Paper>
          <Center mt="1em">
            <p style={{ fontSize: "0.8em", color:"#333333" }}>
              Utvecklad av Oliver Midbrink<br/>
              Uppdaterad av Sakarias Åman Rosengren
            </p>
          </Center>
        </Box>
      </Center>
    </div>
  );
}

export default App;
