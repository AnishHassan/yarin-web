import { ReactNode } from 'react';
import styled from 'styled-components';
import { FormLable } from './form.styles';


interface LabelProps {
    children: ReactNode;
}


const Label = ({ children }: LabelProps) => {
    return <FormLable>{children}</FormLable>;
};

export default Label;
