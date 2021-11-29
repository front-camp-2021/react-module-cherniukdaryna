import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { GET_PRICE } from '../actions/priceAction';
import { useDispatch, useSelector } from 'react-redux';

function DoubleSlider() {

  const [value, setValue] = React.useState([0, 90000]);
  const dispath = useDispatch();
  const price = useSelector(state => state.price.price);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //console.log(value)
    dispath({
      type: GET_PRICE,
      payload: value
    });
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={90000}
      />
    </Box>
  );
}

export default DoubleSlider;
