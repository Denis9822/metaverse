import React from 'react';
import { useTranslation } from "react-i18next";

function Main() {
    const { t } = useTranslation();
    return ( 
    <div>
    <section class="main container">
        <h1>{t("main_h1")}</h1>
        <h2>
            <span>{t("main_h2_span")}</span> {t("main_h2")}
        </h2>
    </section>

    <div class="arrow_down">
        <a href="#about">
            <img src="img/arrow_down.svg" alt=""/>
        </a>
    </div>
    <section id="about" class="about container">
        <div class="about_text">
            <h2>
            {t("about_text_h2")}
                <f>Facebook</f>
            </h2>
            <span>{t("about_text_span")} <br/> {t("about_text_span2")} </span>
        </div>
        <div class="about_img">
            <img src="img/about_img.png" alt=""/>
        </div>
    </section>
    <section id="partners" class="partners container">
        <h2>{t("partners_h2")}</h2>
        <div class="partners_items">
            <div class="partners_item">
                <img src="img/partners/1.svg" alt=""/>
                <span>Wallet connect</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/2.svg" alt=""/>
                <span>MetaMask</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/3.svg" alt=""/>
                <span>Coinbase</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/4.svg" alt=""/>
                <span>Trust Wallet</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/5.svg" alt=""/>
                <span>Meta Facebook</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/6.svg" alt=""/>
                <span>Ebay</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/7.svg" alt=""/>
                <span>Instagram</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/8.svg" alt=""/>
                <span>Oculus</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/9.svg" alt=""/>
                <span>Visa</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/10.svg" alt=""/>
                <span>Mastercard</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/11.svg" alt=""/>
                <span>Farfetch</span>
            </div>
            <div class="partners_item">
                <img src="img/partners/12.svg" alt=""/>
                <span>Paypal</span>
            </div>
        </div>
    </section>
    <section id="participation" class="participation">
        <h2>{t("participation_h2")}</h2>
        <div class="participation_img">
            <img src="img/participation_img.png" alt=""/>
        </div>
        <div class="participation_wrap container">
            <div class="participation_text">
                <span>
                    {t("participation_text_span")} <f> Meta </f>Coin  от Meta<f>Facebook</f>
                        <br/>
                        {t("participation_text_span2")} <f>0.1$</f>
                    </span>

                <p>
                    
                    {t("participation_text_p")}
                    <f> 10 Meta Coin </f> {t("participation_text_p1")}
                    <f> 30$ </f>
                </p>

                <div class="btn_connect_wallet participation_btn_connect_wallet">
                    <img src="img/wallet.svg" alt=""/>
                    <span>{t("btn_connect_wallet")}</span>
                </div>
            </div>
        </div>
    </section>
    <section id="what_talk" class="what_talk container">
        <h2>
            {t("what_talk_h2")}
        </h2>
        <div class="what_talk_items">
            <div class="what_talk_item">
                <div class="what_talk_item_text">
                    <span>{t("what_talk_item_text_span1")} <br/> {t("what_talk_item_text_span1_1")} <br/><f> {t("what_talk_item_text_span1_2")} </f> - {t("what_talk_item_text_span1_3")}</span>

                    <h4>“Bill Gates”</h4>
                </div>
                <div class="what_talk_item_img what_talk_item_img1">
                    <img src="img/gates.png" alt="" class="pc"/>
                    <img src="img/gates2.png" alt="" class="mob"/>
                </div>
            </div>
            <div class="what_talk_item">
                <div class="what_talk_item_text">
                    <span>{t("what_talk_item_text_span2")} <f> MetaCoin </f> {t("what_talk_item_text_span2_1")}</span>

                    <h4>“Mark Zuckerberg”</h4>
                </div>
                <div class="what_talk_item_img what_talk_item_img2">
                    <img src="img/zucker.png" alt="" class="pc"/>
                    <img src="img/zucker2.png" alt="" class="mob"/>
                </div>
            </div>
            <div class="what_talk_item">
                <div class="what_talk_item_text">
                    <span>{t("what_talk_item_text_span3")} <f>MetaCoin </f>.{t("what_talk_item_text_span3_1")}</span>

                    <h4>“Robert Kiyosaki”</h4>
                </div>
                <div class="what_talk_item_img what_talk_item_img3">
                    <img src="img/kiyo.png" alt="" class="pc"/>
                    <img src="img/kiyo2.png" alt="" class="mob"/>
                </div>
            </div>
            <div class="what_talk_item">
                <div class="what_talk_item_text">
                    <span>{t("what_talk_item_text_span4")}</span>

                    <h4>“Uoren Buffett”</h4>
                </div>
                <div class="what_talk_item_img what_talk_item_img4">
                    <img src="img/buff.png" alt="" class="pc"/>
                    <img src="img/buff2.png" alt="" class="mob"/>
                </div>
            </div>
        </div>
        
    </section>
    </div>
    );
}

export default Main;