import React, { useContext } from 'react';
import { ContextTheme } from '../../Context/ThemeContext';

const User = () => {
    const { user } = useContext(ContextTheme)
    return (
        <div>
            <h1>Hello {user.displayName}</h1>
        </div>
    );
}

export default User;
