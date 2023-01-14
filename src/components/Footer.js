import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <TwitterIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
            <InstagramIcon/>
            <p>&copy; 2023 IndianFood.com</p>
        </div>
    </div>
  )
}

export default Footer
