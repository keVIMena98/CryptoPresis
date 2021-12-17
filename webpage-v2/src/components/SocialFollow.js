import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {IconButton} from '../ButtonElement'
import {
    faTwitter,
    faInstagram,
    faDiscord
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {

  return (
    <div class="social-container">
      <a href="https://www.twitter.com/CryptoPresis" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/cryptopresisnft" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://discord.gg/cryptopresis" className="discord social">
        <FontAwesomeIcon icon={faDiscord} size="1x" />
      </a>
    </div>
  );
}