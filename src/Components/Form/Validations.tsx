import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';


export const isFormFieldValid = (errors: any, touched: any, name: string) => {
    return !!(touched[name] && errors[name]);
};

export const getFormErrorMessage = (errors: any, touched: any, name: string) => {
    return (
        isFormFieldValid(errors, touched, name) && <small className="p-error">{errors[name]}</small>
    );
};


export const PropertyFormValidationSchema = () => {
    return Yup.object({
        expense_cost: Yup.string().required('Expense Cost is required'),
       
    });
};

