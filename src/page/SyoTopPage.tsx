import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import '../App.css';
import MainLogoimg from '../img/srmn_factory_logo.png';
import SyoSystemLogoimg from '../img/syo_system_logo.png';
import ComingSoonLogo from '../img/coming_soon_logo.png';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Path } from "./../Router";
import TextField from '@mui/material/TextField';

type PropsTypes = RouteComponentProps;

const SyoTopPage = ({ history }: PropsTypes): JSX.Element => {
    
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
          gridTemplateAreas: `"header""main""footer"`,
        }}>
            <Box sx={{ gridArea: 'header'}}>
                <img
                    src={SyoSystemLogoimg}
                    className="Main_Logo"
                    alt="logo"
            />
            </Box>

            <Box sx={{ gridArea: 'main'}}>
                <TextField
                id="text_area_deckcode"
                label="デッキコード"
                helperText="こちらにデッキコードを入力してください。"
                />
            </Box>
        </Box>
    </Box>
    </div>
    );
}
    
export default SyoTopPage;