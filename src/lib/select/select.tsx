import React, {useEffect, useRef, useState} from "react";
import {SelectProps} from './select.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, HOVER_COLORS, ROUNDED, SIZES, VARIANTS} from "./select.style";
import {Div, Text} from "@pezeshk-book/ui-kit";

export const Select = ({size = 'medium', defaultText = 'متن ورودی', optionsList, value, onChange, id, text, color = 'primary', variant = 'outlined', disabled, error, StartAdornment, helperText, rounded = 'medium'}: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (value) {
      optionsList && optionsList.length > 0 && typeof optionsList === 'object' && optionsList.map((item) => {
        if (item[id] == value) {
          setSelectedText(item[text])
        }
      });
    } else {
      setSelectedText('')
    }
  }, [value])

  // click outside to close dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
    const targets = event.target as HTMLDivElement
    if (wrapperRef.current && !wrapperRef.current.contains(targets) && dropDownRef.current && !dropDownRef.current.contains(targets)) {
      setShow(false)
    }
  };

  // prevState => !prevState
  const handleListDisplay = () => {
    setShow(prev => !prev)
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setShow(false)
    const input = e.target as HTMLDivElement
    setSelectedText(input.innerText)
    onChange(input.getAttribute("data-name"))
  };

  // if disabled close dropdown
  useEffect(() => {
    disabled && setShow(false)
  }, [disabled])

  return (
    <Div ref={wrapperRef} className={'flex flex-col items-start justify-between relative w-full h-auto'}>
      <Div className={'relative w-full'}>
        <Div
          onClick={handleListDisplay}
          className={classNames('flex items-center w-full border cursor-pointer p-4',
            !disabled && (`${VARIANTS[variant]}`),
            disabled ? 'border-0 text-control-200 !cursor-not-allowed !bg-control-100' : (error ? `border-danger !text-danger ${variant === 'filled' ? '!bg-danger-100 !text-danger-400' : ''}` :
              (show ? `${COLORS[color]}` : `${variant === 'filled' ? (`${COLORS[color]} border !border-transparent hover:border hover:!border-control-400`) : 'border-control-100 hover:border-control-400'}`)),
            SIZES[size],
            StartAdornment ? 'justify-between' : 'justify-end',
            ROUNDED[rounded]
          )}>

          {StartAdornment ? StartAdornment : null}

          <Text
            typography={`${show || selectedText !== '' ? 'xs' : 'sm'}`}
            color={'inherit'}
            className={classNames(
              "select-none h-auto px-2 absolute duration-200 flex items-center",
              StartAdornment ? 'right-8' : 'right-2',
              show || selectedText !== '' ? `translate-x-0 text-xs  ${variant === 'filled' ? '!top-0 !h-auto !leading-none bg-transparent !right-6' : `!right-2 !top-0 translate-y-[-50%] bg-white rounded-lg border-white `}` : '',
              disabled ? '!bg-transparent' : (error ? 'text-danger' : (show ? `${COLORS[color]}` : 'text-control-400'))
            )}
          >
            {defaultText}
          </Text>


          {selectedText !== '' && (
            <Div className={'px-2 grow flex select-none !leading-none'}>
              <Text className={'!leading-none'} typography={'base'} align={'right'} color={disabled ? 'grey.400' : 'grey.800'}>
                {selectedText}
              </Text>
            </Div>
          )}

          <svg className={classNames(``,
            show ? 'rotate-0 duration-150' : 'rotate-180 duration-150'
          )} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 8.04999L10.4 1.52999C9.63002 0.759987 8.37002 0.759987 7.60002 1.52999L1.08002 8.04999" stroke={'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Div>

        {/*  dropdown*/}

        <Div ref={dropDownRef} className={classNames('mt-2 flex flex-col absolute block w-full top-full bg-white border text-control-500 rounded-lg shadow-lg p-4',
          show ? "block h-fit z-10" : "hidden",
        )}
        >
          {optionsList && optionsList.length > 0 && typeof optionsList === 'object' && optionsList.map(option => (
            <Div
              className={classNames('px-2 flex justify-between items-center hover:bg-control-100 rounded cursor-pointer',
                option[text] === selectedText ? 'bg-control-100 hover:bg-control-100 !text-control-800 hover:!text-white hover:!fill-white' : 'bg-white',
                HOVER_COLORS[color]
              )}
              key={option[id]}
              data-name={option[id]}
            >
              <Text
                color={`${option[text] === selectedText ? 'grey.800' : 'grey.400'}`}
                align={'right'}
                type={`${option[text] === selectedText ? 'bold' : 'regular'}`}
                typography={'sm'}
                data-name={option[id]}
                key={option[id]}
                onClick={(event) => handleOptionClick(event)}
                className={classNames(`font-bold grow py-2 select-none hover:text-white`,
                  option[text] === selectedText ? 'grey.800' : '!red.600'
                )}>
                {option[text]}
              </Text>

              {option[text] === selectedText ?
                (
                  <svg
                    width="15" height="11" viewBox="0 0 15 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33336 8.64332L12.9934 0.982483L14.1725 2.16082L5.33336 11L0.0300293 5.69665L1.20836 4.51832L5.33336 8.64332Z"/>
                  </svg>
                ) : null}
            </Div>
          ))}
        </Div>
      </Div>

      {helperText ? (
        <Div className={'px-3 select-none'}>
          <Text color={disabled ? 'grey.500' : (error ? 'danger' : 'grey.400')} typography={'xs'}>
            {helperText}
          </Text>
        </Div>
      ) : null}

    </Div>

  )
}

export default Select;
