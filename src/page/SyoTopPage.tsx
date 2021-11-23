import React, { Component } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Path } from "./../Router";

type PropsTypes = RouteComponentProps;

const SyoTopPage = ({ history }: PropsTypes): JSX.Element => {
  return (
    <div>
      <div>しょーシステム</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={Path.TopPage}
        >
          HOME
        </Button>
        <Button variant="contained" color="secondary" onClick={history.goBack}>
          BACK
        </Button>
      </div>
    </div>
  );
};

export default SyoTopPage;