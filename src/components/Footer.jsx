import {React,useState } from "react";
import ReactDOM from 'react-dom';

import { useTranslation } from "react-i18next";
const Footer = function(){
    const { t } = useTranslation();
return(
    <footer>
        <div class="container">
            <h3>
                ©  {t("footer")} 2022
            </h3>

            <div class="footer_w">
                <div class="footer_logo">
                    <img src="img/logo.svg" alt=""/>
                </div>
                <div class="footer_logo_text">
                    2022 Web3 Foundation l Impressum l Disclaimer l Privacy l Cookie Settings
                </div>
            </div>
        </div>

        <div class="footer_bg">
            <div class="footer_bg_btns">
                <div class="footer_bg_btn">
                    <img src="img/inst.svg" alt=""/>
                </div>
                <div class="footer_bg_btn">
                    <img src="img/facebook.svg" alt=""/>
                </div>
                <div class="footer_bg_btn">
                    <img src="img/twitter.svg" alt=""/>
                </div>
            </div>
        </div>
    </footer>
)

}
export default Footer;