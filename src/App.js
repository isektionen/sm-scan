import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';
import { motion } from "framer-motion";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Container } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Paper } from '@mui/material';
import { Flex, Spacer } from "@chakra-ui/react";
import VercelBanner from './components/VercelBanner'

function App() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    mailPrefix: '',
    weightRange: '',
    showPassword: false,
  });

  const pathVariants = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255,255,255,0)",
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255,255,255,1)",
    },
};

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function filtered(input) {
    var filteredString = String(input).toLowerCase();

    return filteredString;
  }

  function filter_for_qr_code(input) {
    var filteredString = String(input).toLowerCase();

    if (input.includes("@")) {
      filteredString = filteredString.split("@")[0];
    }

    return filteredString;
  }

  return (
    <div className="App">
      <Center>
        <Box maxW="20em">
        <Flex>
          <Box pt="0.3em">
          <Circle
                    bg="#7D5A3C"
                    size="10vh"
                >
                    <svg
                        stroke="white"
                        width="85%"
                        height="85%"
                        viewBox="0 0 228 362"
                        fill="none"
                    >
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
                            d="M89.4311 349.947C78.6612 352.101 72.1993 362.871 76.5072 360.717C80.8152 358.563 126.479 355.179 143.281 354.255C178.922 353.769 192.822 349.944 192.822 341.331C190.668 328.407 177.744 321.943 177.744 317.635C177.744 313.327 186.36 309.019 188.514 306.865C190.668 304.711 188.738 303.35 186.36 302.557L173.436 298.249C166.974 296.095 164.82 293.941 184.206 289.633C192.822 287.479 194.976 285.325 194.976 278.863C194.976 272.401 175.59 265.939 175.59 261.631C176.737 260.484 177.744 259.477 186.36 259.477C194.976 259.477 224.369 253.802 227.286 233.63L227.286 141.009C225.132 100.083 197.13 80.6972 158.358 80.6972H124.844L121.424 90.5395C134.296 90.7936 146.883 91.0994 158.358 91.4671C199.284 95.775 214.174 108.989 216.516 141.009V233.63C216.516 240.092 216.516 244.4 199.284 250.861C166.974 255.169 163.246 256.908 164.82 261.631C171.282 272.401 188.514 272.401 188.514 278.863C188.514 285.325 166.974 287.479 162.666 291.787C158.358 296.095 160.512 298.249 164.82 300.403C169.128 302.557 182.052 304.711 177.744 306.865C173.436 309.019 169.128 313.327 169.128 317.635C169.128 321.943 181.803 331.601 182.052 341.331C179.476 344.887 170.286 346.361 134.665 347.793C134.665 347.793 100.201 347.793 89.4311 349.947Z"
                        />
                        <motion.path
                            transition={{
                                default: { duration: 3, ease: "easeInOut" },
                                fill: { duration: 2.3 },
                            }}
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                            d="M104.201 90.2309C77.9875 166.45 28.1272 314.489 31.2737 317.635C33.4276 319.789 42.0435 313.327 48.5055 300.403L121.424 90.5395M104.201 90.2309C109.95 90.3242 115.715 90.4268 121.424 90.5395M104.201 90.2309C54.9979 89.4324 6.98654 89.3131 5.42598 89.3131C3.27201 89.3131 -2.83357 80.6972 4.52717 80.6972H107.486M104.201 90.2309C105.343 86.9107 106.44 83.7269 107.486 80.6972M121.424 90.5395C134.296 90.7936 146.883 91.0994 158.358 91.4671C199.284 95.775 214.174 108.989 216.516 141.009V233.63C216.516 240.092 216.516 244.4 199.284 250.861C166.974 255.169 163.246 256.908 164.82 261.631C171.282 272.401 188.514 272.401 188.514 278.863C188.514 285.325 166.974 287.479 162.666 291.787C158.358 296.095 160.512 298.249 164.82 300.403C169.128 302.557 182.052 304.711 177.744 306.865C173.436 309.019 169.128 313.327 169.128 317.635C169.128 321.943 181.803 331.601 182.052 341.331C179.476 344.887 170.286 346.361 134.665 347.793C134.665 347.793 100.201 347.793 89.4311 349.947C78.6612 352.101 72.1993 362.871 76.5072 360.717C80.8152 358.563 126.479 355.179 143.281 354.255C178.922 353.769 192.822 349.944 192.822 341.331C190.668 328.407 177.744 321.943 177.744 317.635C177.744 313.327 186.36 309.019 188.514 306.865C190.668 304.711 188.738 303.35 186.36 302.557L173.436 298.249C166.974 296.095 164.82 293.941 184.206 289.633C192.822 287.479 194.976 285.325 194.976 278.863C194.976 272.401 175.59 265.939 175.59 261.631C176.737 260.484 177.744 259.477 186.36 259.477C194.976 259.477 224.369 253.802 227.286 233.63L227.286 141.009C225.132 100.083 197.13 80.6972 158.358 80.6972H124.844M121.424 90.5395L124.844 80.6972M124.844 80.6972H107.486M124.844 80.6972L136.819 46.2341C141.127 33.3103 123.895 35.4637 119.587 46.2341C118.686 48.4874 114.114 61.4953 107.486 80.6972M154.05 11.7699C154.05 17.7179 144.921 22.5398 138.973 22.5398C133.025 22.5398 126.049 17.7179 126.049 11.7699C126.049 5.82184 137.333 1 143.281 1C149.229 1 154.05 5.82184 154.05 11.7699Z"
                        />
                    </svg>
                </Circle>
            </Box>

            <Heading as="h2" pl="1em" mt="0" textAlign="left" size="3xl">
              Vänligen fyll i din KTH mejl nedan och visa vid incheckning
            </Heading>
          </Flex>


          <Box alignContent="left" textAlign="left" p="0" m="0">
            <FormControl sx={{ m: 0, width: '19em' }} style={{marginLeft:"0em"}} variant="outlined">
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
            </FormControl>
          </Box>
          <h4>
            Inga personuppgifter sparas!
          </h4>
          {/* set elevation to 1 or 2 for a "paper" that contains the qr code*/}
          <Paper elevation={0} style={{padding:"1em", marginTop:"1em",}}>
            <Center>
              <QRCode size="290" value={filter_for_qr_code(values.mailPrefix)} />
            </Center>
          </Paper>
          <Center>
            <p style={{fontSize: "0.8em", color:"#333333", paddingTop:"0.7em",}}>Utvecklad av Oliver Midbrink</p>
          </Center>
          <Box pt="30em">
            <Center>
              <Heading as="h2" mt="0" textAlign="left" size="3xl">Sponsor</Heading>
            </Center>
            <a target="_blank" rel="noopener noreferrer" href="https://www.vercel.com/?utm_source=isektionen&utm_campaign=oss">
              <VercelBanner />
            </a>
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default App;
