import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";

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
    </div>
  );
};

export default Home;

// className={styles.container}
