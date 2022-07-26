import React from 'react';
import {GridThemeProvider} from 'bear-react-grid';
import {DateField} from '@bearests/from';

import 'bear-react-grid/dist/index.css';
import MyIcon from './MyIcon';


function App() {
    const defaultTheme = {
        gridColumns: 24,
        gridGutterWidth: 15,
        gridBreakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1540,
        },
        containerMaxWidths: {
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1540,
        },
        gridGutterWidthMedia: {
            sm: 15,
            md: 15,
            lg: 15,
            xl: 15,
            xxl: 15,
        }
    };

    return (
        <GridThemeProvider gridTheme={defaultTheme}>
            test icon

            <DateField/>



        </GridThemeProvider>
    );
}

export default App;


