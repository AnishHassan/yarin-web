import styled, { css } from 'styled-components';

interface FieldLabelProps {
    color?: string;
    marginLeft?: string;
}


interface fileDropElement {
    children?: React.ReactNode;
}

export const FieldLabel = styled.h3<FieldLabelProps>`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-align: left;
  color:${({ color }) => color ? color : 'rgb(0, 70, 126)'}  !important;
  font-weight: 500;
  margin-bottom: 8px;
  @media(max-width:370px){
    font-size: 13px;
  }
  span{
    font-size:12px;
  }
`;


export const FileDropContainer = styled.div`
  height: 175px;
  border-radius: 4px;
  border: solid 1px #676767;
  background-color: #F2F2F2;
  cursor: pointer;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  border-style: dashed;

  img {
    width: 74px;
    height: 74px;
    flex-grow: 0;
    margin: 0 10px 0 0;
    object-fit: contain;
  }
`;
export const FileDropDetails = styled.div<fileDropElement>`
  align-items: center;
  vertical-align: middle;
  text-align: center;

  span {
    margin: 2px 0 0;
   font-family: 'Heebo', sans-serif;

    font-size: 14px;
    text-align: left;
    color: #0F0F0F;

  }

  .under{
 font-family: 'Heebo', sans-serif;

    font-size: 14px;
    text-align: left;
    color: #483EA8;
    text-decoration : underline;
  }

  h4{
     font-size: 10px;
    color : #676767;
  }
`;


export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
`;
