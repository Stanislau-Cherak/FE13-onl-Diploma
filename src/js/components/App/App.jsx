import React from 'react';

import Button from '../Button/Button.tsx';
import Select from '../Select/Select.tsx';


import './App.scss';

function App() {



    return (
        <div className='container'>
            <Select optionList={['3h','12h','1d','3d','7d']} onChange={(value)=>console.log(value)}/>
        </div>
    );
}

export default App;
