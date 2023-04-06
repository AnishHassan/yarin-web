import { InputText, InputTextProps } from 'primereact/inputtext';
import { ReactNode, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import warning from '../../assests/icons/error.png';
import { AdditionalInfo, ErrorContainer, FieldContainer } from './form.styles';
import Label from './Label';
import { getFormErrorMessage, isFormFieldValid } from './Validations';




interface FieldProps extends InputTextProps {
    label: string;
    children?: ReactNode;
    link?: string;
    linkText?: string;
    additionalInfo?: string;
    width?: string;
    className?: string;
    errors?: any;
    touched?: any;
    name: string;
    onClick?: () => void;
    fieldRef?: any;
    height?: any;
    marginTop?: any;
    marginSmTop?: any;
    marginSmBottom?: any;
    type?: React.HTMLInputTypeAttribute;
}

const FormField = ({
    label,
    children,
    link,
    linkText,
    additionalInfo,
    width,
    className,
    errors,
    touched,
    name,
    onClick,
    fieldRef,
    height,
    marginTop,
    marginSmTop,
    marginSmBottom,
    type = 'text',
    ...props
}: FieldProps) => {

    const [passwordVisibility, setPasswordVisible] = useState(false);

    return (
        <>
            <FieldContainer width={width} height={height} marginTop={marginTop} marginSmTop={marginSmTop} marginSmBottom={marginSmBottom}>
                <Label>{label}</Label>
                {children ? (
                    children
                ) : (
                    <span className={type === 'password' ? 'relative p-input-icon-right eye-icon w-full' : ''}>
                        {type === 'password' && <i className={`pi ${passwordVisibility ? 'pi-eye-slash' : 'pi-eye'} cursor-pointer`} onClick={() => setPasswordVisible(!passwordVisibility)} />}
                        <InputText
                            name={name}
                            className={className + ` inputField ${isFormFieldValid(errors, touched, name) && 'p-invalid'} `}
                            ref={fieldRef}
                            {...props}
                            autoComplete="off"
                            type={type === 'password' ? (passwordVisibility ? 'text' : 'password') : type}
                        />
                    </span>
                )}
                {additionalInfo && (
                    <AdditionalInfo className='text-left'>
                        {additionalInfo}{' '}
                        <Link to={`/${link}`} onClick={onClick}>
                            {linkText}
                        </Link>{' '}
                    </AdditionalInfo>
                )}
                {getFormErrorMessage(errors, touched, name) && (
                    <ErrorContainer className="error-log">
                        <img src={warning} alt="warning-icon" />
                        <p>{getFormErrorMessage(errors, touched, name)}</p>
                    </ErrorContainer>
                )}
            </FieldContainer>
        </>
    );
};

export default FormField;
