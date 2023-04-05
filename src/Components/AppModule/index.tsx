import { useState } from "react"
import { data, MenuTabs } from "../../utils/data";
import { LocationContainer, MenuTab, MenuTabsContainer, PropertiesCategory, PropertiesLogo, PropertiesNum } from "./AppModule.style"
import DarkLogo from '../../assests/icons/house-dark.png'
import LightLogo from '../../assests/icons/house-light.png'
import LocationMapper from "../LocationMap";
import PropertiesData from "../PropertiesData";
import TablePropertiesData from "../PropertiesData/index2";

const AppModule = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    const [dataBuyer, setBuyerData] = useState(data);

    return (
        <>
            <MenuTabsContainer>
                {MenuTabs.map((item) => (
                    <MenuTab key={item.id} selected={selectedTab === item.id} onClick={() => setSelectedTab(item.id)}>
                        <PropertiesNum selected={selectedTab === item.id}>
                            {item.no_of_properties}
                        </PropertiesNum>
                        <PropertiesCategory selected={selectedTab === item.id}>
                            {item.category.toUpperCase()}
                        </PropertiesCategory>
                        <PropertiesLogo src={selectedTab === item.id ? LightLogo : DarkLogo} alt='home-logo'/>
                    </MenuTab>
                ))}
            </MenuTabsContainer>
            <LocationContainer>
                <LocationMapper/>
            </LocationContainer>
            <TablePropertiesData/>
        </>
    );
};

export default AppModule;
