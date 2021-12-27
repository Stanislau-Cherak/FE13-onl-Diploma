import React from 'react';

import Button from '../Button/Button.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';


import './App.scss';

function App() {



    return (
        <div className='container'>
            <Dropdown optionsList={['3h','12h','1d','3d','7d']} onChange={(value)=>console.log(value)}/>
        </div>
    );
}

export default App;
