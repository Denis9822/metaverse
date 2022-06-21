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
                    <a target="_blank" href="https://about.facebook.com/">
                        <img src="img/inst.svg" alt=""/>
                    </a>
                    
                </div>
                <div class="footer_bg_btn">
                <a target="_blank" href="https://www.instagram.com/meta/">
                    <img src="img/facebook.svg" alt=""/>
                    </a>
                </div>
                <div class="footer_bg_btn">
                    <a target="_blank" href="https://twitter.com/Meta?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <img src="img/twitter.svg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

}
export default Footer;