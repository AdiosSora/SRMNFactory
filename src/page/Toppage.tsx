import React, { useState, useEffect } from 'react';
import '../App.css';
import MainLogoimg from '../img/srmn_factory_logo.png';
import SyoSystemLogoimg from '../img/syo_system_logo.png';
import ComingSoonLogo from '../img/coming_soon_logo.png';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Path } from "./../Router";

const TopPage = (): JSX.Element => {
    
  useEffect(() => {
      let title = 'しょーシステム - そらまん工房'
      document.title = title;
    });

  return (
    <div className="App">
      <Box>
        <Box
          sx={{
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header   "
          "main"
          "footer"`,
          }}
        >
          <Box sx={{ gridArea: 'header'}}>
            <img
              src={MainLogoimg}
              className="Main_Logo"
              alt="logo"
            />
          </Box>
          <Box sx={{ gridArea: 'main'}}>
            <p>
              選択してください。
            </p>
            <Box 
              className="Service_Box"
              component={Link}
              to={Path.SyoTopPage}
            >
              <img
              src={SyoSystemLogoimg}
              className="Service_Logo"
              alt="logo" />
            </Box>
            <Box className="Service_Box">
              <img
              src={ComingSoonLogo}
              className="Service_Logo"
              alt="logo" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
export default TopPage;
