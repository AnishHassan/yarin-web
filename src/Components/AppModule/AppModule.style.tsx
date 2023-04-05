import styled from 'styled-components';



export const MenuTabsContainer = styled.div`
display: grid;
grid-template-columns: 23% 23% 23% 23%;
width : 100%;
gap : 47px;

`
export const MenuTab = styled.div<{selected:boolean}>`
cursor : pointer;
display : flex;
justify-content : space-around;
background-color ${props => (props.selected ? '#1B1A3A' : '#F8F8F8')}; 
padding : 10px;
align-items : center;
`

export const PropertiesNum = styled.p<{ selected: boolean }>`
color ${props => (props.selected ? '#F8F8F8' : '#1B1A3A')};
font-family: 'Heebo', sans-serif;
font-weight: bold;
font-size : 20px;

`
export const PropertiesCategory = styled.p<{ selected: boolean }>`
color ${props => (props.selected ? '#F8F8F8' : '#1B1A3A' )}; 
font-family: 'Heebo', sans-serif;
font-size : 20px;
`

export const PropertiesLogo = styled.img`
height : 50px;
width : 50px;

`

export const LocationContainer = styled.div`
margin-top : 20px;
`