import * as React from "react";

import List from "@mui/material/List";

import Dialog from "@mui/material/Dialog";

import { Box, CardMedia } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <CardMedia
          component="img"
          height="100%"
          image="images/shalaby.jpg"
          alt="green iguana"
          sx={{ zIndex: "10", position: "relative" }}
        />
      </List>
    </Dialog>
  );
}

export default function ImageDailog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Box 
        sx={{
          position: "relative",
          
          "&:before": {
            content: `''`,
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "350px",
            width: "15px",
            background: "#037FFF",
            zIndex: 20,
          },
          "&:after": {
            content: `''`,
            position: "absolute",
            bottom: "0px",
            right: "0px",
            height: "350px",
            width: "15px",
            background: "#037FFF",
            zIndex: 20,
          },
        }}
      >
        <CardMedia
          component="img"
          
          image="images/shalaby.jpg"
          alt=" personal image"
          sx={{
            zIndex: "10",
            position: "relative",

            cursor: "zoom-in",
          }}
          onClick={handleClickOpen}
        />
      </Box>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
