import React from 'react';
import { ButtonSite, ReversedButton } from './Button.style';
const Button = ({ title, type }) => {
    return (
        <div>
            <ButtonSite type={type}>
                {title}
            </ButtonSite>
        </div>
    );
}

export default Button;
