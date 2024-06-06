import { Grid } from '@mui/material'
import React, { useState } from 'react'


const SizeChart = ({ size }: any) => {
  const [hover, setHover] = useState(false);

  const styles = {
    height: "50px",
    width: "50px",
    border: !hover ? "1px solid darkgray" : "1px solid black",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "border 0.3s",
  };
  return (
    <Grid item
      style={styles}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      {size.type} 
    </Grid>
  )
}

export default SizeChart