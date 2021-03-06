import React, { useState, lazy, Suspense, FunctionComponent } from "react";
import Grid from "../components/Grid";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import night from "../images/night.webp";
import lamp from "../images/lamp.png";
import Colors from "../constants/colors";
import Arrow from "../components/Arrow";
import BeatLoader from "react-spinners/BeatLoader";
const Screens = lazy(() => import("../components/Screens"));

const Home: FunctionComponent = () => {
  const [mainStyle, setMainStyle] = useState(false);

  return (
    <div className={mainStyle ? "main-alt" : "main"}>
      <div id="up"></div>
      <Menu
        menuStyle={mainStyle ? "menu-alt" : "menu"}
        mainStyle={mainStyle}
        setMainStyle={setMainStyle}
        Pic={mainStyle ? lamp : night}
        ButtonDisplay={true}
      />
      <Grid
        BlogButtonColor={mainStyle ? "#DDDFE3" : Colors.blog}
        ButtonColor={mainStyle ? "#6C7073" : Colors.button}
        AfterHoverBlog={mainStyle ? "#DDDFE3" : Colors.blog}
        AfterHoverButtons={mainStyle ? "#6C7073" : Colors.button}
        OnHoverColor={mainStyle ? "#DDDFE3" : Colors.buttonBackground}
      />
      <Stats
        statsHeaders={mainStyle ? "underline-alt" : "underline"}
        TimelineColor={mainStyle ? "error" : "textPrimary"}
        ContainerColor={mainStyle ? "#6C7073" : ""}
        ChipColors={mainStyle ? "#DDDFE3" : Colors.header}
        StatsTextColor={mainStyle ? "white" : Colors.almostBlack}
      />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 100,
            }}
          >
            <BeatLoader color={Colors.blog} size={30} loading={true} />
          </div>
        }
      >
        <Screens statsHeaders={mainStyle ? "tesla-alt" : "tesla"} />
      </Suspense>
      <Footer
        footerStyle={mainStyle ? "footer-alt" : "footer"}
        footerTextStyle={mainStyle ? "a-alt" : "a"}
      />
      <Arrow />
    </div>
  );
};

export default Home;
