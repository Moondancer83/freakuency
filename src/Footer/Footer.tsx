import React from "react";
import { useNamedStyles } from "../core/useStyles";

const styles = {
  root: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
    color: "#ddd",
    "& .add": {
      color: "red"
    }
  }
};

export default function Footer() {
  const classes = useNamedStyles("Footer", styles);
  return (
    <footer className={classes.root}>
      <span>Dedicated to Freakuency FRPG</span> | <span>Created by Moondancer</span>
    </footer>
  );
}
