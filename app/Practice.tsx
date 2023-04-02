import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Practice() {
  return (
    <div>
      HELLO world
      <h1>h1</h1>
      <h2>h2</h2>
      <Heading color={"yellow"} fontSize="20px" fontWeight={"bold"}>
        {" "}
        this is default heading by chakra
      </Heading>
      <Heading as="h1"> this is h1 by chakra</Heading>
      <Heading>box</Heading>
      <div style={{color:"white", display:"flex", justifyContent:"center", background:"green", height:"150px", alignItems:"center"}}>
        <div style={{ background: "red", padding: "50px" , height:"50px"}}>1_</div>
        <div style={{ background: "blue", padding: "50px" , height:"50px"}}>2</div>
        <div style={{ background: "yellow", padding: "50px" , height:"50px"}}>3</div>
      </div>
    </div>
  );
}
// flexDirection:"column" div ko cloum wise arrange karny k leya
//align items move vertical
//justifycontent move horizontal
