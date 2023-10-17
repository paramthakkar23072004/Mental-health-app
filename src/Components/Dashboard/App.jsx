import React, {useEffect} from 'react';
import {FiSettings} from 'react-icons/fi';
import {ToootipComponent} from '@syncfusion/ej2-react-popups';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex: 1000}}>
                <ToootipComponent content="Settings" position="Top">
                    
                </ToootipComponent>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App