import React from "react";
import IconButton from '@mui/material/IconButton';
import {WhatsApp as WhatsAppIcon}  from "@mui/icons-material/";
import RotatingCard from "@/ui/cards/RotatingCard";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


interface WhatsAppProps {
  phoneNumber: number
}
const WhatsAppButton: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  return (
    <RotatingCard>
      <IconButton
        href={`https://wa.me/${phoneNumber}?text=Hie%20gene20`}
      >
        <WhatsAppIcon sx={{ fontSize: "20px", color: "green" }} />
      </IconButton>
    </RotatingCard>
  );
};


export default WhatsAppButton;
