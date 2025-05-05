import Button from "./components/Button";
import ExplanationWhatWeDid from "./components/ExplanationWhatWeDid";
import React, { useState } from 'react'

const button1Style = {
  backgroundColor: "cyan",
  display: "flex",
  margin : "5px"
}

const button2Style = {
  backgroundColor: "orange",
  display: "flex",
  margin : "5px"
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExplanationWhatWeDid explanation="used lifting state up for sharing the count state(common state) between child components" />
      <Button buttonText={"buttonlar'a"} count={count} handleClick={()=>setCount(count+1)} buttonStyle={button1Style}/>
      <Button buttonText={"buttonlar'a"} count={count} handleClick={() => setCount(count+1)} buttonStyle={button2Style} />
    </>
  )
}

