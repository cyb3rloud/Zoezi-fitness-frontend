import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = (props) => {
  return (
    <Button
      onClick={props.backItems}
      startIcon={<ArrowBackIcon />}
      variant="contained"
      color="primary"
      style={{ fontFamily: '' }}
    >
      Previous
    </Button>
  );
};
export default BackButton;
