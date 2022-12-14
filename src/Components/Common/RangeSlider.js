import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([props.selectedVal[0], props.selectedVal[1]]);

  const handleChange = (event, newValue) => {
    props.handlePriceChange(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        // defaultValue={props.selectedVal}
        min={500}
        max={50000}
      />
    </Box>
  );
}
