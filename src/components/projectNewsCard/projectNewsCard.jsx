import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import GradientBox from 'components/gradientBox';

import styles from 'assets/jss/components/projectNewsCardStyles';
const useStyles = makeStyles(styles);

const ProjectNewsCard = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <GradientBox borderWidth='large'>
      <Box className={classes.projectNews}>
        <GradientBox borderWidth='small'>
          <Box className={classes.newsTitle}>
            <Typography variant='h3' align='center'>
              {data.title}
            </Typography>
          </Box>
        </GradientBox>
        <Typography variant='body1'>
          {data.text}
        </Typography>
      </Box>
    </GradientBox>
  )
}

export default ProjectNewsCard;
