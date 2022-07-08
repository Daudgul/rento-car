import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import carImg from "../public/Imgs/car4.png";

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
        <Box sx={{ display: "flex", background: "#fbf2e9", marginTop: "-5px" }}>
          <Box
            alignItems="center"
            display={"flex"}
            flexDirection="column"
            boxShadow={2}
            paddingX={3}
            margin={2}
          >
            <Box
              sx={{
                marginTop: "50px",
                width: 270,
                height: 275,
                backgroundColor: "orange",
                borderRadius: "80% 20% 76% 24% / 79% 25% 75% 21%",
              }}
            ></Box>
            <Box
              sx={{
                width: 270,
                height: 275,
                backgroundColor: "rgba(240, 109, 33, 0.7)",
                borderRadius: "17% 83% 15% 85% / 15% 85% 15% 85%",
                transform: "translateY(-100%)",
              }}
            >
              <Image
                src={carImg}
                width={300}
                height={300}
                style={{
                  transform: " translateX(5%)",
                  zIndex: 100,
                }}
              />
            </Box>
          </Box>
        </Box>
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
