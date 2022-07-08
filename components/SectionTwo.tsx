import { Box, Card } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaCar } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const SectionTwo = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "inherit",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginTop: "100px",
        }}
      >
        <h1>Three Simple Step</h1>

        <p>Signup in seconds, do the steps easily and start</p>
        <p style={{ marginTop: "-9px" }}>feeling your new experience</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "100px 0",
          flex: "wrap",
        }}
      >
        <Box
          width={300}
          height={300}
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
              width: 70,
              height: 75,
              backgroundColor: "orange",
              borderRadius: "80% 20% 76% 24% / 79% 25% 75% 21%",
            }}
          ></Box>
          <Box
            sx={{
              width: 70,
              height: 75,
              backgroundColor: "rgba(240, 109, 33, 0.7)",
              borderRadius: "17% 83% 15% 85% / 15% 85% 15% 85%",
              transform: "translateY(-100%)",
            }}
          ></Box>
          <LocationOnIcon
            sx={{
              color: "white",
              fontSize: "3rem",
              transform: "translateY(-280%) translateX(5%)",
            }}
          />
          <h2
            style={{
              marginTop: "-100px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            01. Search Location
          </h2>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            qui minus totam libero.
          </p>
        </Box>
        <Box
          width={300}
          height={300}
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
              width: 70,
              height: 75,
              backgroundColor: "orange",
              borderRadius: "80% 20% 76% 24% / 79% 25% 75% 21%",
            }}
          ></Box>
          <Box
            sx={{
              width: 70,
              height: 75,
              backgroundColor: "rgba(240, 109, 33, 0.7)",
              borderRadius: "17% 83% 15% 85% / 15% 85% 15% 85%",
              transform: "translateY(-100%)",
            }}
          ></Box>
          <GiTakeMyMoney
            style={{
              color: "white",
              fontSize: "2.5rem",
              transform: "translateY(-330%) translateX(5%)",
            }}
          />
          <h2
            style={{
              marginTop: "-100px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            02. Easy payment
          </h2>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            qui minus totam libero.
          </p>
        </Box>
        <Box
          width={300}
          height={300}
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
              width: 70,
              height: 75,
              backgroundColor: "orange",
              borderRadius: "80% 20% 76% 24% / 79% 25% 75% 21%",
            }}
          ></Box>
          <Box
            sx={{
              width: 70,
              height: 75,
              backgroundColor: "rgba(240, 109, 33, 0.7)",
              borderRadius: "17% 83% 15% 85% / 15% 85% 15% 85%",
              transform: "translateY(-100%)",
            }}
          ></Box>
          <FaCar
            style={{
              color: "white",
              fontSize: "2.5rem",
              transform: "translateY(-330%) translateX(5%)",
            }}
          />
          <h2
            style={{
              marginTop: "-100px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            03. Make Trip
          </h2>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
            qui minus totam libero.
          </p>
        </Box>
      </Box>
    </>
  );
};

export default SectionTwo;
