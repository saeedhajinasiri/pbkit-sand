import React, {useEffect, useRef, useState} from "react";
import {SelectProps} from './select.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, HOVER_COLORS, LABEL_SIZES, SIZES, VARIANTS} from "./select.style";
import {Div, Text} from "@pezeshk-book/ui-kit";

export const Select = ({size = 'medium', defaultText = 'متن ورودی', optionsList, value, onChange, id, text, color = 'primary', variant = 'outlined', disabled, error, StartAdornment}: SelectProps) => {
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
    disabled ? setShow(false) : setShow(prev => !prev)
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
    <div ref={wrapperRef} className={classNames('flex flex-col items-start justify-between rounded-lg relative w-full h-auto',
    )}>
      <div
        onClick={handleListDisplay}
        className={classNames('flex items-center w-full border cursor-pointer rounded-lg px-4 py-4',
          !disabled && (`${VARIANTS[variant]}`),
          disabled ? 'border-0 text-control-200 !cursor-not-allowed !bg-control-100' : (error ? `border-danger !text-danger ${variant === 'filled' ? '!bg-danger-100 !text-danger-400' : ''}` :
            (show ? `${COLORS[color]}` : `${variant === 'filled' ? (`${COLORS[color]} border !border-transparent hover:border hover:!border-control-400`) : 'border-control-100 hover:border-control-400'}`)),
          SIZES[size],
          StartAdornment ? 'justify-between' : 'justify-end',
        )}>

        {StartAdornment ? StartAdornment : null}

        <Text
          typography={`${show || selectedText !== '' ? 'xs' : 'sm'}`}
          color={'inherit'}
          className={classNames(
            "select-none px-2 absolute !text-xl duration-200 flex items-center z-0",
            LABEL_SIZES[size],
            StartAdornment ? 'right-8' : 'right-2',
            show || selectedText !== '' ? `translate-x-0 text-xs  ${variant === 'filled' ? '!top-0 !h-auto !leading-none bg-transparent !right-6' : `!right-2 !top-0 translate-y-[-50%] bg-white rounded-lg border-white `}` : '',
            disabled ? '!bg-transparent' : (error ? 'text-danger' : (show ? `${COLORS[color]}` : 'text-control-400'))
          )}
        >
          {defaultText}
        </Text>


        {selectedText !== '' && (
          <Div className={'px-2 grow flex !flex-row select-none !leading-none'}>
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
      </div>

      {/*  dropdown*/}

      <div ref={dropDownRef} className={`flex flex-col w-full absolute top-full  w-full bg-white border text-[#6B6B6B] rounded-tr-lg rounded-tl-lg md:rounded-lg transition-all duration-200  shadow-lg z-40 px-4 py-4 
      ${show ? "block absolute h-fit" : "hidden"}`}>
        {optionsList && optionsList.length > 0 && typeof optionsList === 'object' && optionsList.map(option => (
          <div
            data-name={option[id]}
            className={classNames('px-2 flex justify-between items-center hover:bg-control-100 rounded cursor-pointer',
              option[text] === selectedText ? 'bg-control-100 hover:bg-control-100 !text-control-800 hover:!text-white hover:!fill-white' : 'bg-white',
              HOVER_COLORS[color]
            )}
            key={option[id]}>
            <Text
              color={`${option[text] === selectedText ? 'grey.800' : 'grey.400'}`}
              align={'right'}
              type={`${option[text] === selectedText ? 'bold' : 'regular'}`}
              typography={'sm'}
              data-name={option[id]}
              key={option[id]}
              onClick={(event) => handleOptionClick(event)}
              className={classNames(`font-bold grow py-2 select-none`,
                option[text] === selectedText ? 'grey.800 hover:text-white' : '!red.600'
              )
              }
            >
              {option[text]}
            </Text>

            {option[text] === selectedText &&
              (
                <svg
                  width="15" height="11" viewBox="0 0 15 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33336 8.64332L12.9934 0.982483L14.1725 2.16082L5.33336 11L0.0300293 5.69665L1.20836 4.51832L5.33336 8.64332Z"/>
                </svg>
              )
            }
          </div>
        ))}
      </div>
      <Div className={'px-3 select-none'}>
        {!disabled && error ? (
          <Text color={'danger'} typography={'xs'}>
            متن خطا
          </Text>
        ) : (
          <Text color={disabled ? 'grey.500' : 'grey.400'} typography={'xs'}>
            متن راهنما
          </Text>
        )}
      </Div>
    </div>

  )
}

export default Select;
