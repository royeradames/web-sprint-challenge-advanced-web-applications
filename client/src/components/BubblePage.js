import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get('/api/colors')
      .then( resp => {
        console.log(resp.data)
        setColorList(resp.data)
      })
      .catch( error => console.error(error))
  }, [])
  return (
    <>
    <h1>
      Bubble Page
    </h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
