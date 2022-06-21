import React from 'react';
import { useTranslation } from "react-i18next";

function Roadmap() {
    const { t } = useTranslation();
    return ( 
        <div>
              <section class="roadmap_main container">
        <h1>{t("roadmap_main_h1")}</h1>
        <h2>
        {t("roadmap_main_h2")}
            <f>#Metaverse</f>
        </h2>
        <div class="roadmap_main_w">
            <div class="roadmap_main_text">
                <span>
                    {t("roadmap_main_text_span")} <f> Metahero </f> {t("roadmap_main_text_span_2")} 
                </span>
                <p>
                    {t("roadmap_main_text_p")}
                </p>

                <div class="btn_connect_wallet roadmap_btn_connect_wallet">
                    <img src="img/wallet.svg" alt=""/>
                    <span> {t("btn_connect_wallet")}</span>
                </div>
            </div>
            <div class="roadmap_main_img">
                <img src="img/roadmap_main_img.png" alt=""/>
            </div>

        </div>
    </section>

    <section class="tokemonics container">
        <div class="tokemonics_text">
            <h2>
            {t("tokemonics_text_h2")}
            </h2>
            <h3>
            {t("tokemonics_text_h3")}
            </h3>
            <h4>
            {t("tokemonics_text_h4")}
            </h4>
            <img src="img/chart.svg" alt=""/>
        </div>
        <div class="tokemonics_lists">
            <div class="tokemonics_item before_blue">
                <div class="column">
                    <span>
                       <f> 15% </f> {t("tokemonics_item1_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item1_h5")}
                    </h5>
                    <h6>
                        15,000,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_pink">
                <div class="column">
                    <span>
                        <pi>21.5% </pi> {t("tokemonics_item2_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item2_h5")}
                    </h5>
                    <h6>
                        21,500,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_blue">
                <div class="column">
                    <span>
                        <f>12%</f> {t("tokemonics_item3_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item3_h5")}
                    </h5>
                    <h6>
                        12,000,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_white">
                <div class="column">
                    <span>
                    {t("tokemonics_item4_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item4_h5")}
                    </h5>
                    <h6>
                        24,500,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_blue">
                <div class="column">
                    <span>
                        <f>0.5%</f> {t("tokemonics_item5_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item5_h5")}
                    </h5>
                    <h6>
                        500,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_pink">
                <div class="column">
                    <span>
                        <pi>10% </pi> {t("tokemonics_item6_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item6_h5")}
                    </h5>
                    <h6>
                        10,000,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_blue">
                <div class="column">
                    <span>
                        <f>3%</f> {t("tokemonics_item7_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item7_h5")}
                    </h5>
                    <h6>
                        3,000,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_white">
                <div class="column">
                    <span>
                    {t("tokemonics_item8_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                    {t("tokemonics_item8_h5")}
                    </h5>
                    <h6>
                        7,500,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_blue">
                <div class="column">
                    <span>
                        <f>5%</f> Tenset Gem Launchpad (TGLP)
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                     {t("tokemonics_item9_h5")}
                    </h5>
                    <h6>
                        5,000,000,000
                    </h6>
                </div>
            </div>
            <div class="tokemonics_item before_pink">
                <div class="column">
                    <span>
                        <pi>1%</pi> {t("tokemonics_item10_span")}
                    </span>
                    <p>
                    {t("tokemonics_item_p")}
                    </p>
                </div>
                <div class="column">
                    <h5>
                        {t("tokemonics_item10_h5")}
                    </h5>
                    <h6>
                        1.000.000.000
                    </h6>
                </div>
            </div>
        </div>
    </section>
    <section class="roadmap_about container">
        <h2>
        {t("roadmap_about_h2")}
        </h2>
        <div class="roadmap_about_items">
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/1 6.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item1_span")}
                    </span>
                <p>
                {t("roadmap_about_item1_p")}
                </p>
            </div>
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/2 23.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item2_span")}
                    </span>
                <p>
                {t("roadmap_about_item2_p")}
                </p>
            </div>
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/3 1.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item3_span")}
                    </span>
                <p>
                {t("roadmap_about_item3_p")}
                </p>
            </div>
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/4 45.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item4_span")}
                    </span>
                <p>
                {t("roadmap_about_item4_p")}
                </p>
            </div>
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/5 556.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item5_span")}
                    </span>
                <p>
                {t("roadmap_about_item5_p")}
                </p>
            </div>
            <div class="roadmap_about_item">
                <div class="roadmap_about_item_img_w">
                    <div class="roadmap_about_item_img">
                        <img src="img/6 1.svg" alt=""/>
                    </div>
                </div>
                <span>
                {t("roadmap_about_item6_span")}
                    </span>
                <p>
                {t("roadmap_about_item6_p")}
                </p>
            </div>
        </div>
    </section>
    <section class="roadmap_house container">
        <div class="roadmap_house_img pc">
            <img src="img/house_img.png" alt=""/>
        </div>
        <div class="roadmap_house_text">
            <h2>
            {t("roadmap_house_text_h2")}
            </h2>
            <h3>
            {t("roadmap_house_text_h3")}
            </h3>
            <div class="roadmap_house_img mob">
                <img src="img/house_img.png" alt=""/>
            </div>
            <div class="roadmap_house_list_wrap">
                <div class="roadmap_house_list_item">
                    <h4>{t("roadmap_house_list_item1_h4")}</h4>
                    <span>
                    {t("roadmap_house_list_item1_span")}
                     </span>
                </div>
                <div class="roadmap_house_list_item">
                    <h4>{t("roadmap_house_list_item2_h4")}</h4>
                    <span>
                    {t("roadmap_house_list_item2_span")}
                                        </span>
                </div>
                <div class="roadmap_house_list_item">
                    <h4>{t("roadmap_house_list_item3_h4")}</h4>
                    <span>
                    {t("roadmap_house_list_item3_span")}
                    </span>
                </div>
                <div class="roadmap_house_list_item">
                    <h4>{t("roadmap_house_list_item4_h4")}</h4>
                    <span>
                    {t("roadmap_house_list_item4_h4")}
                    </span>
                </div>
            </div>
        </div>
    </section>  
        </div>
    );
}

export default Roadmap;