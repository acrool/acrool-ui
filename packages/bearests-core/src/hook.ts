import {useContext} from 'react';
import {SettingContext} from './SettingProvider';


export const usePageSlider = () => useContext(SettingContext);