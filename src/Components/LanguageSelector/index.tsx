import { LanguageSelector, LanguageText } from "./LanguageStyle";

const LanguageSelectorComponent: React.FC = () => {
    return (
        <LanguageSelector>
            <LanguageText>EN</LanguageText>
            <i className="pi pi-angle-down" style={{ color: 'slateblue' }}></i>
        </LanguageSelector>
    );
};

export default LanguageSelectorComponent;