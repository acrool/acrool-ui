import React, {Children, useState} from 'react';
import {SettingContextProvider, IParams} from './context';


interface IProps extends IParams{
    children: JSX.Element
}

const SettingProvider = ({
    iconSvg,
    loadingImage,
    children
}: IProps) => {
    const [isPageSliderVisible, setPageSliderVisible] = useState(true);

    return <SettingContextProvider value={{
        // all props
        iconSvg,
        loadingImage,

        isPageSliderVisible,
        setPageSliderVisible,
    }}>
        {Children.only(children)}
    </SettingContextProvider>;
};

export default SettingProvider;
