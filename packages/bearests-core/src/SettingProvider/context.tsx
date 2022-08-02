import React from 'react';


/** -----------------------------------------
 |               Interface                   |
 /** ---------------------------------------*/
export interface IIConSvg {
    idPrefix?: string,
    symbolsPath: string
}

export interface IParams {
    iconSvg: IIConSvg,
    loadingImage: string,

    isPageSliderVisible?: boolean,
    setPageSliderVisible?: (isVisible: boolean) => void,
}

/** -----------------------------------------
 |            Initial State                 |
 /** ---------------------------------------*/
const params: IParams = {
    iconSvg: {
        symbolsPath: '/default-static/plugins/iconsvg/index.svg',
        idPrefix: 'default_icon_'
    },
    loadingImage: '/default-static/images/loading.gif',

    isPageSliderVisible: true,
    setPageSliderVisible: () => {},
};

const SettingContext = React.createContext<IParams>(params);
SettingContext.displayName = 'SettingProvider';
const SettingContextConsumer = SettingContext.Consumer;
const SettingContextProvider = SettingContext.Provider;


export {
    SettingContext,
    SettingContextConsumer,
    SettingContextProvider,
};
