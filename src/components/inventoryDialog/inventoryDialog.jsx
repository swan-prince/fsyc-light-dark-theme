import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import { Accordion, AccordionSummary, AccordionDetails } from 'components/customAccordion';
import CustomButton from 'components/customButton';

import closeIcon from 'assets/img/close-green.png';

import styles from 'assets/jss/components/dialogStyles';
const useStyles = makeStyles(styles);

const InventoryDialog = (props) => {

  const { open, handleClose, title } = props;
  const classes = useStyles();

  const [expanded, setExpanded] = useState('signTransaction');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Dialog onClose={() => { }} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents}>
        <Box className={classes.header} position='relative'>
          <Typography variant='h6' fontWeight={800} fontFamily='Inter'>
            {title}
          </Typography>
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <img src={closeIcon} width={14} height={14} alt="" />
          </IconButton>
        </Box>

        <Box>
          <Divider className={classes.whiteDivider} />
          <Accordion expanded={expanded === 'signTransaction'} onChange={handleChange('signTransaction')}>
            <AccordionSummary aria-controls="signTransaction-content" id="signTransaction-header">
              <Typography variant='body1' fontWeight={600} color='#01DE8E' fontSize={16} lineHeight='20px'>
                Sign Transaction
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' fontSize={14} lineHeight='18px' sx={{ marginBottom: '18px' }}>
                This will open your wallet to sign the request.
                Once the request is signed, you can confirm before sending it to the blockchain.
              </Typography>
              <CustomButton variant='gradientFill'>
                Sign In
              </CustomButton>
            </AccordionDetails>
          </Accordion>
          <Box className={classes.divider}></Box>
          <Accordion expanded={expanded === 'sendBlockchain'} onChange={handleChange('sendBlockchain')}>
            <AccordionSummary aria-controls="sendBlockchain-content" id="sendBlockchain-header">
              <Typography variant='body1' fontWeight={600} color='#01DE8E' fontSize={16} lineHeight='20px'>
                Send to Blockchain
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' fontSize={14} lineHeight='18px' sx={{ marginBottom: '18px' }}>
                This will open your wallet to sign the request.
                Once the request is signed, you can confirm before sending it to the blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box className={classes.divider}></Box>
          <Accordion expanded={expanded === 'waitResponse'} onChange={handleChange('waitResponse')}>
            <AccordionSummary aria-controls="waitResponse-content" id="waitResponse-header">
              <Typography variant='body1' fontWeight={600} color='#01DE8E' fontSize={16} lineHeight='20px'>
                Wait for Response
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' fontSize={14} lineHeight='18px' sx={{ marginBottom: '18px' }}>
                This will open your wallet to sign the request.
                Once the request is signed, you can confirm before sending it to the blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box className={classes.divider}></Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default InventoryDialog;
