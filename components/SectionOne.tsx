import { Box, Button, TextField } from "@mui/material";
import React from "react";
import style from "./SectionOne.module.css";
import car from "../public/Imgs/car3.png";
import Image from "next/image";

const SectionOne = () => {
  return (
    <>
      <Box className={style.divFirst}>
        <Box className={style.innerDev}>
          <h1>Now it's easy for you rent car</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus commodi quas consequuntur dolore asperiores magni? Facere
            quas aliquid impedit ea, velit porro laudantium tempora ipsam soluta
            obcaecati ad dicta?
          </p>
        </Box>
        <Box className={style.backdiv}>
          <Box className={style.secondInnerDiv}></Box>
          <Image
            className={style.car}
            src={car}
            width={500}
            height={400}
            objectFit="contain"
          />{" "}
        </Box>
      </Box>
      <Box width="100%" bgcolor={"white"}>
        <Box padding={10}>
          <h1>Make your Trip</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            eos aliquid neque tempora voluptates optio est vero nobis doloremque
            nam corporis fuga cupiditate iste maiores quia modi, voluptatem ea
            magnam.
          </p>
          <form style={{ paddingTop: 20 }}>
            <TextField variant="outlined" label="Where you from" />{" "}
            <TextField variant="outlined" label="Where You go" />{" "}
            <TextField variant="outlined" label="Journey Date" />{" "}
            <Button
              sx={{ padding: "15px", marginLeft: "10px" }}
              variant="contained"
            >
              {" "}
              search Vehicle
            </Button>
          </form>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default SectionOne;
