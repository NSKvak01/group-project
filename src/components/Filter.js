import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHomeContext } from '../context/HomeContext';

export default function SelectVariants() {
  const {gender, setGender} = useHomeContext()
  // const [type, setType] = React.useState('');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  // const handleChangeType = (event) => {
  //   setType(event.target.value);
  // };

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleChangeGender}
          label="Gender"
        >
          <MenuItem value="Women">Women</MenuItem>
          <MenuItem value="Men">Men</MenuItem>
          <MenuItem value="Show all">
            Show all
          </MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={handleChangeType}
        >
          <MenuItem value={10}>Top</MenuItem>
          <MenuItem value={20}>Dress</MenuItem>
          <MenuItem value={30}>Pants</MenuItem>
          <MenuItem value={30}>Shirt</MenuItem>
          <MenuItem value={30}>Jacket</MenuItem>
          <MenuItem value={30}>T-Shirt</MenuItem>
          <MenuItem value="">
            Show all
          </MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}