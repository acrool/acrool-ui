import React, {useCallback, useMemo, useState, useRef} from 'react';
import styled, {css} from 'styled-components/macro';
import {Dropdown} from 'bear-react-dropdown';
import {checkIsMobile} from 'bear-jsutils/browser';
import {getVisiblePosition} from 'bear-jsutils/dom';
import {FCProps} from '../../typings';



type TOption = {
    value: string;
    text: string;
    avatarUrl?: string,
}
interface IProps extends FCProps {
    title?: string;
    name?: string;
    value?: string|number;
    options?: TOption[];
    disabled?: boolean;
    onChange?: (value: string) => void;
    errorMessage?: string;
    remarkMessage?: string;
    placeholder?: string;
    isSearchEnable?: boolean,
}



/**
 * 下拉選單元件
 *
 * @param style
 * @param className
 * @param title 標題
 * @param options 下拉選單項目
 * @param disabled 是否禁用
 * @param value
 * @param onChange
 */
const Select = ({
                    style,
                    className,
                    options = [],
                    disabled = false,
                    value,
                    onChange,
                    placeholder= '',
                    isSearchEnable = false,
                }: IProps) => {
    const menuRef = useRef<HTMLDivElement|null>(null);
    const inputContainerRef = useRef<HTMLDivElement|null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const isMobile = useMemo(() => checkIsMobile(), []);
    const isVisiblePicker = useMemo(() => !isMobile && !disabled, [disabled, isMobile]);


    /**
     * 處理點擊遮罩
     */
    const handleClickOutSite = useCallback((evt: MouseEvent) => {
        if (menuRef && menuRef.current && menuRef.current.contains(evt.target as Node)) return;

        handleDropdownVisible(false);
    }, [menuRef]);

    /**
     * 取得顯示位置
     */
    const getPosition = () => {
        if(inputContainerRef.current){
            return getVisiblePosition(inputContainerRef.current);
        }
        return 'bottom';
    };

    /**
     * 處理控制 Picker顯示隱藏
     */
    const handleDropdownVisible = useCallback((isVisible = false) => {
        setIsDropdownVisible(isVisible);

        setTimeout(() => {
            if(isVisible){
                document.addEventListener('click', handleClickOutSite);
            }else{
                document.removeEventListener('click', handleClickOutSite);
            }
        }, 0);


    }, []);

    /**
     * 處理值改變
     */
    const handleOnChange = useCallback((currentValue: string) => {
        handleDropdownVisible(false);
        if(onChange){
            onChange(currentValue);
        }
    }, [onChange]);


    const getText = useMemo(() => {
        const current = options.find(row => String(row.value) === String(value));
        if(current){
            return current.text;
        }
        return placeholder;


    }, [value, options, placeholder]);


    return (<Select2Content className={className} style={style}>

            <PanelButton
                type="button"
                onClick={() => handleDropdownVisible(true)}
                disabled={disabled}
            >
                <span className="flex-grow-1 text-left text-ellipsis">{getText}</span>
            </PanelButton>


            {isVisiblePicker && (<DropdownContainer
                ref={menuRef}
                isVisible={isDropdownVisible}
                position={getPosition()}
            >
                <Dropdown isDark options={options} value={value} onChange={handleOnChange} isSearchEnable={isSearchEnable}/>
            </DropdownContainer>)}

        </Select2Content>

    );
};

export default Select;



const PanelButton = styled.button`
  justify-content: flex-start;
  white-space:nowrap;
  overflow: hidden;
  color: #fff;
  padding: 0;
`;

const DropdownContainer = styled.div<{
    isVisible: boolean,
    position: 'top'|'bottom';
}>`
  position: absolute;
  left: 0;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  z-index: ${props => (props.isVisible ? 10 : -1)};
  transition: opacity .3s ease;

  ${props => props.position === 'top' && css`
    bottom: calc(100% - 1px);
  `}
  ${props => props.position === 'bottom' && css`
    top: calc(100% - 1px);
  `}
`;


const Select2Content = styled.div`
  position: relative;
`;
