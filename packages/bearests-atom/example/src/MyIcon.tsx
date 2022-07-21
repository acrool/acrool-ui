import React from 'react';
import IconSvg, {IIconSvgProps} from 'bear-react-iconsvg';
import styled from 'styled-components';


const idPrefix = 'icon_';
const path = 'static/plugins/iconsvg/index.svg';


interface IProps extends IIconSvgProps {
    code: IconCode,
}

/**
 * IconSvg
 * https://github.com/imagine10255/bearests-backdesk-comp
 */
const MyIcon = (props: IProps) => {
    return <ThemeIconSvg
        {...props}
        idPrefix={idPrefix}
        symbolsPath={path}
    />;
};

export default MyIcon;


const ThemeIconSvg = styled(IconSvg)`
  --primary-color: #00a3e0;
  --secondary-color: #ed1164;
`;
