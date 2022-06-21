import {React,useState } from "react";
import ReactDOM from 'react-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from "react-i18next";
const Header = function(){
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    let location = useLocation();
    let headerStyleVar = 0;
    const [isActive, setActive] = useState(false);
    const [isLangActive, setLangActive] = useState(1);
    const [isMenuActive, setMenuActive] = useState(false);
    let temp = location.pathname;
    if (temp.indexOf('roadmap') == -1)
    headerStyleVar = 0;
    else 
    headerStyleVar = 1;
   
return(
<div>
    {headerStyleVar == 0 &&
        <div class="main_bg"></div>
    }
    {headerStyleVar == 0 &&
   <div class="main_bg_blur"></div>
}
    <div class="header_blur"></div>
    
    <div class="h_w">
        <header className={`container ${isMenuActive==true ? "menu_active" : ""}`}>
            <div class="header_logo">
      
                <Link to="/#bdy">
                    <img src="img/logo.svg" alt=""/>
                </Link>
            </div>
            <div class="header_menu pc">
                <div class="header_menu_item">
                
                    <Link to="/#partners">
                        {t("header_menu_item1")}
                    </Link>
                </div>
                <div class="header_menu_item">
                   
                    <Link to="/#participation">
                    {t("header_menu_item2")}
                </Link>
                </div>
                <div class="header_menu_item">
                    <Link to="/#what_talk">
                    {t("header_menu_item3")}
                    </Link>
                </div>
                <div class="header_menu_item">
                <Link to="/roadmap">
                    Roadmap
                </Link>
                </div>
            </div>
            <div class="header_lang pc">
                <div class="header_lang_active" onClick={() => setActive(!isActive)}>
                    <span class="firstWord">{i18n.language}</span>
                    <img src="img/arrow_down.svg" alt="" className={`${isActive ? "img_rotate" : ""}`}/>
                </div>
                <div className={`header_lang_select ${isActive ? "active" : ""}`}>
                    {i18n.language == 'ru' &&
                     <span class="firstWord" onClick={(e) => 
                        {
                        i18n.changeLanguage('en');
                        setLangActive(1);
                        setActive(!isActive);
                        }}>EN</span>
                    }
                    {i18n.language == 'en' &&
                     <span class="firstWord" onClick={(e) => 
                        {
                        i18n.changeLanguage('ru');
                        setLangActive(2);
                        setActive(!isActive);
                        }}>RU</span>
                    }
                  
                </div>
            </div>
            <div class="btn_connect_wallet header_btn_connect_wallet pc">
                <img src="img/wallet.svg" alt=""/>
                <span>{t("btn_connect_wallet")}</span>
            </div>
            <div class="menu mob">
                <div class="menu_show"  onClick={() => setMenuActive(!isMenuActive)}>
               
                    <img src="img/menu.svg" alt=""  className={`menu_show_hidden ${isMenuActive==false ? "active" : ""}`} />
                    <img src="img/close.svg" alt="" className={`menu_show_active ${isMenuActive==true ? "active" : ""}`}/>
                </div>
            </div>
        </header>
        <div className={`menu_hidden mob ${isMenuActive==true ? "active" : ""}`}>
            <div class="header_menu" onClick={() => setMenuActive(!isMenuActive)}>
                <div class="header_menu_item">
                    <Link to="/#partners">
                    
                    {t("header_menu_item1")}
                    </Link>
                </div>
                <div class="header_menu_item">
                    <Link to="/#participation">
                    {t("header_menu_item2")}
                </Link>
                </div>
                <div class="header_menu_item">
                    <Link to="/#what_talk">
                    {t("header_menu_item3")}
                    </Link>
                </div>
                <div class="header_menu_item">
                    <Link to="/roadmap">
                    Roadmap
                </Link>
                </div>
            </div>
            <div class="btn_connect_wallet header_btn_connect_wallet">
                <img src="img/wallet.svg" alt=""/>
                <span>{t("btn_connect_wallet")}</span>
            </div>
            <div class="header_lang">
            <div class="header_lang_active" onClick={() => setActive(!isActive)}>
                    <span class="firstWord">{i18n.language}</span>
                    <img src="img/arrow_down.svg" alt="" className={`${isActive ? "img_rotate" : ""}`}/>
                </div>
                <div className={`header_lang_select ${isActive ? "active" : ""}`}>
                    {i18n.language == 'ru' &&
                     <span class="firstWord" onClick={(e) => 
                        {
                        i18n.changeLanguage('en');
                        setLangActive(1);
                        setActive(!isActive);
                        setMenuActive(!isMenuActive);
                        }}>EN</span>
                    }
                    {i18n.language == 'en' &&
                     <span class="firstWord" onClick={(e) => 
                        {
                        i18n.changeLanguage('ru');
                        setLangActive(2);
                        setActive(!isActive);
                        setMenuActive(!isMenuActive);
                        }}>RU</span>
                    }
                  
                </div>
            </div>
        </div>
    </div>
</div>
)

}
export default Header;