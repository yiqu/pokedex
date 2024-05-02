'use client';

import Button from "@mui/material/Button";

export default function ReloadButton() {

  const handleOnClick = () => {
    location.reload();
  };

  return (
    <Button variant="outlined" onClick={ handleOnClick }>
      Go to details
    </Button>
  );
}