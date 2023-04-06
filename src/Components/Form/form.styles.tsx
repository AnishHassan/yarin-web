import styled, { css } from 'styled-components';

interface widthProp {
    width?: string;
    height?: string;
    marginTop?: string;
    marginSmTop?: string;
    marginSmBottom?: string;
}
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

export const FormLable = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #00467e;
  margin-bottom: 0.5rem;
  display: block;
`;


export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  border-radius: 8px;
  background-color: #fff0f2;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  img {
    width: 19px;
    height: 19px;
    margin-right: 8px;
  }
  p {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: normal;
    text-align: left;
    color: #c42f3e;
    letter-spacing: normal;
  }

   @media(max-width:510px){
     
  }
   @media(max-width:510px){
     
  }
`;



export const FieldContainer = styled.div<widthProp>`
  margin-bottom: 1rem;
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '')};
  @media(max-width:767px){
    margin-top: ${({ marginSmTop }) => (marginSmTop ? marginSmTop : '')};
    margin-bottom: ${({ marginSmBottom }) => (marginSmBottom ? marginSmBottom : '')};
  }
  ${props =>
        props.width &&
        css`
      width: ${props.width};
    `}

  label {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    text-align: left;
    color: rgb(0, 70, 126) !important;
    font-weight: 500 !important;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .sc,
  textarea {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #222b3a !important;

    line-height: normal;
    letter-spacing: normal;
    text-align: left;
  }
  .textarea {
    color: #222b3a !important;
  }
  .inputField {
    border-radius: 8px;
    border: solid 1px #dfe6eb;
    background-color: #fff;
    width: 100%;
    height: ${({ height }) => (height ? height : '38px')};
    color: #222b3a !important;
    padding: 10px 10px 10px 10px !important;

    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .inputField.pr-5 {
    padding: 10px 2rem 10px 10px !important;
  }
  .p-autocomplete-input {
    color: #222b3a !important;
  }
  .calender {
    width: 386.5px;
    height: 38px;
  }
  .PhoneInputInput {
    color: #222b3a !important;
  }
  .PhoneInputInput::placeholder {
    color: #636465;
  }
  .p-inputtext {
    color: #222b3a !important;
  }
  .p-inputnumber {
    .p-disabled,
    .p-component:disabled {
      opacity: 0.8;
    }
  }

  .p-inputtext::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #636465;
  }
  .p-calendar {
    input {
      border: none !important;
    }
    .p-inputtext {
      padding: 0;
    }
  }
  .p-button.p-button-icon-only {
    background-color: white !important;
    border: none !important;
    /* width: 0rem !important;
    padding: 0rem 0 !important;
   
    color:black !important */
    .pi {
      color: black !important;
    }
  }
  error-log {
    width: 100%;
    border-radius: 8px;

    font-family: 'Inter', sans-serif;
  }
  .calendarContainer {
    position: relative;
    overflow: hidden;
    .p-inputmask {
      position: absolute;
      top: 2px;
      left: 3px;
      border: none !important;
      height: 34px;
    }
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 14px;
  font-size: 14px;
  color: #636465;
  a {
    color: #3ee1c7;
    font-family: 'Inter', sans-serif;
    text-decoration: underline;
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
