import React from 'react';
import '../App.css';
import MainLogoimg from '../img/srmn_factory_logo.png';
import SyoSystemLogoimg from '../img/syo_system_logo.png';
import ComingSoonLogo from '../img/coming_soon_logo.png';
import Box, { BoxProps } from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: '100%',
          height: '140px',
          color: '#fff',
          '& > .MuiBox-root > .MuiBox-root': {
            p: 1,
            borderRadius: 1,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header   "
          "main"
          "footer"`,
          }}
        >
          <Box sx={{ gridArea: 'header', bgcolor: '#000000' }}>
            <img
              src={MainLogoimg}
              className="Main_Logo"
              alt="logo"
            />
          </Box>
          <Box sx={{ gridArea: 'main', bgcolor: '#000000' }}>
            <p>
              選択してください。
            </p>
            <Box className="Service_Box">
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
          <Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }} className="Footer">
            Footer
          </Box>
        </Box>
      </Box>
    </div>
  );
}
export default App;
