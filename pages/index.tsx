import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div
      style={{
        maxWidth: 1100,
        overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default Home;

// className={styles.container}
