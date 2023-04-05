import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import styles from "../styles/Home.module.css";
import bitgreenGreen from "../assets/images/logos/bitgreen-green.png";
import MenuDrawer from "./MenuDrawer";

//App header component
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Grid container direction="row" width="100%" alignItems="center">
        <Grid item width="70%">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item>
              <a href="/">
                <img
                  src={bitgreenGreen.src}
                  height={20}
                  style={{ margin: "auto" }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="/">
                <h4
                  style={{
                    paddingTop: "5px",
                    fontWeight: 500,
                    letterSpacing: 1.5,
                  }}
                >
                  POLKADOT DASHBOARD
                </h4>
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item width="30%">
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            textAlign="right"
          >
            <Grid item>
              <MenuDrawer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
