import i18next from "i18next";
import { useTranslation } from "react-i18next"
import LanguageOption from "./language-dropdown";

const MainComp = () => {
    const {t} = useTranslation();

    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value);
    }

    return(
        <div>
            <LanguageOption onChange = {(e) => handleClick(e)}/>
                <h1>{t('Welcome')} {t('To')} {t('React')} {t('Training')}</h1>
        </div>
    )
 }

 export default MainComp;