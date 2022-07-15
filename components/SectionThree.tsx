import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import carImg from "../public/Imgs/carPoster.png";
import "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fbf2e9"
            fill-opacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,90.7C672,64,768,96,864,122.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <Grid container bgcolor="#fbf2e9" marginY={-5}>
          <Grid item width="40%" sm={6}>
            <Image src={carImg} objectFit="cover" />
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
          >
            <h2 className="sec__heading">
              We provide premium car with high quality
            </h2>{" "}
            <p className="sec__pergraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem
              ducimus quod! Dolorem nesciunt nihil iure exercitationem ab
              voluptates quasi corrupti voluptatibus! Error exercitationem iure
              possimus id. Obcaecati, adipisci illum
            </p>
            <p className="sec__detail">certificated by gurus</p>
          </Grid>
        </Grid>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fbf2e9"
            fill-opacity="1"
            d="M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,138.7C420,149,480,203,540,218.7C600,235,660,213,720,186.7C780,160,840,128,900,138.7C960,149,1020,203,1080,229.3C1140,256,1200,256,1260,234.7C1320,213,1380,171,1410,149.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </Box>
    </div>
  );
};

export default SectionThree;
