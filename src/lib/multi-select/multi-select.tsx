import React, {useEffect, useRef, useState} from "react";
import {MultiSelectProps} from './multi-select.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, HOVER_COLORS, ROUNDED, SELECTED_ITEMS_ICON, SIZES, VARIANTS, TEXT_SIZE, DROPDOWN_BORDER_COLOR} from "./multi-select.style";
import {Checkbox, Div, Text} from "@pezeshk-book/ui-kit";
import Tag from '../tag/tag'

export const MultiSelect = ({size = 'medium', label = "label", placeholder, optionsList, value, onChange, id, text, color = 'primary', variant = 'outlined', disabled, error, StartAdornment, helperText, rounded = 'medium', direction = "rtl"}: MultiSelectProps) => {
  let newOptionsList: any = {};
  optionsList && optionsList.length && optionsList.map(item => {
    newOptionsList = Object.assign({}, newOptionsList, {
      [item.id]: item
    })
  })
  // refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null)

  // state
  const [searchedItems, setSearchedItems] = useState<any>(optionsList)
  const [show, setShow] = useState<boolean>(false)

  // click outside to close dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
    const targets = event.target as HTMLDivElement
    if (wrapperRef.current && !wrapperRef.current.contains(targets)) {
      setShow(false)
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setSearchedItems(optionsList)
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedItems(optionsList.filter(a => a[text].includes(event.target.value)))
  };

  // prevState => !prevState
  const handleListDisplay = () => {
    inputRef.current && inputRef.current.value != '' ? setShow(true) : setShow(prev => !prev);
    inputRef.current && inputRef.current.focus()
  };

  // click to setState selected items
  const handleOptionClick = (id: any): void => {
    setShow(false)
    const currentIndex = value.indexOf(id);
    const newChecked = [...value];

    if (currentIndex === -1) {
      newChecked.push(id)
    } else {
      newChecked.splice(currentIndex, 1);
    }
    onChange(newChecked);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Div className={'flex flex-col items-start relative w-full h-auto'}>
      <Div ref={wrapperRef} className={'relative w-full'}>
        <Div
          onClick={!disabled && handleListDisplay}
          className={classNames(
            'flex items-center w-full border px-3 cursor-text',
            !disabled && (`${VARIANTS[variant]}`),
            disabled ? 'border-0 text-control-200 !cursor-not-allowed !bg-control-100' : (error ? `border-danger !text-danger ${variant === 'filled' && '!bg-danger-100 !text-danger-400'}` :
              (show ? `${COLORS[color]}` : `${variant === 'filled' ? (`${COLORS[color]} border !border-transparent hover:border hover:!border-control-400`) : 'border-control-100 hover:border-control-400'}`)),
            SIZES[size],
            StartAdornment ? 'justify-between' : 'justify-end',
            ROUNDED[rounded]
          )}>

          {StartAdornment ? StartAdornment : null}

          {label ? (
            <span
              className={classNames(
                show || value.length >= 1 ? 'text-m-sm' : 'text-m-base',
                "select-none h-auto px-2 absolute duration-200",
                StartAdornment ? 'right-8' : 'right-2',
                show || value.length >= 1 ? `translate-x-0 text-xs  ${variant === 'filled' ? `!top-0 !h-auto !leading-[0.5] bg-transparent ${StartAdornment && '!right-6 '} ` : `!right-2 !top-0 translate-y-[-50%] !bg-white rounded-lg border-white `}` : '',
                disabled ? '!bg-transparent' : (error ? 'text-danger' : (show ? `${COLORS[color]}` : 'text-control-400')),
                TEXT_SIZE[size]
              )}>
              {label}
            </span>
          ) : placeholder ? (
            <span
              color={'inherit'}
              className={classNames(
                "h-auto px-2 absolute",
                TEXT_SIZE[size],
                show || value.length >= 1 ? `hidden` : `${StartAdornment ? 'right-6' : 'right-2'}`,
                disabled ? '!bg-transparent' : (error ? 'text-danger' : 'text-control-400')
              )}>
              {placeholder}
            </span>
          ) : null}


          <Div className={'flex flex-wrap items-center grow w-0 gap-1 my-1'}>
            {value && value.length >= 1 && (
              value.map((item: any) => (
                <Div className={'flex flex-wrap items-center select-none gap-1 h-auto'}>
                  <Tag onChange={handleOptionClick} title={newOptionsList[item][text]} id={newOptionsList[item][id]} rounded={rounded} disabled={disabled} size={size} color={color} variant={variant}/>
                </Div>
              ))
            )}
            <input
              type={'text'}
              readOnly={disabled} dir={direction} ref={inputRef}
              className={classNames(`flex-1 outline-0 min-w-8 bg-transparent`,
                TEXT_SIZE[size],
                disabled ? 'cursor-not-allowed' : 'cursor-text'
              )}
              onChange={handleInputChange}
            />
          </Div>

          <svg
            className={show ? 'rotate-0 duration-150' : 'rotate-180 duration-150'} width={SELECTED_ITEMS_ICON[size]} height={SELECTED_ITEMS_ICON[size]} viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 8.04999L10.4 1.52999C9.63002 0.759987 8.37002 0.759987 7.60002 1.52999L1.08002 8.04999" stroke={'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Div>

        {/*  dropdown*/}
        {searchedItems && searchedItems.length > 0 && typeof searchedItems === 'object' ? (
          <Div className={classNames(`mt-2 gap-y-1 flex flex-col absolute w-full top-full bg-white border text-control-500 rounded-lg shadow-lg p-2`,
            !disabled && show ? "block h-fit z-10" : "hidden",
            DROPDOWN_BORDER_COLOR[color]
          )}
          >
            {searchedItems?.map((option: any) => (
              <Div
                className={classNames('group px-2 gap-x-2 flex justify-start items-center rounded cursor-pointer',
                  HOVER_COLORS[color],
                  value && value.includes(option[id]) ? 'bg-control-100' : 'bg-white'
                )}
                onClick={() => handleOptionClick(option[id])}
                key={option[id]}
              >

                <Checkbox
                  checked={value && value.includes(option[id])}
                  color={color}
                />

                <Text
                  align={'right'}
                  type={`bold`}
                  typography={'sm'}
                  data-name={option[id]}
                  key={option[id]}
                  className={classNames(`py-2 group-hover:!text-white`,
                    value && value.includes(option[id]) ? 'text-black' : '!text-control-300'
                  )}>
                  {option[text]}
                </Text>

              </Div>
            ))}
          </Div>
        ) : (
          <Div className={classNames('mt-2 flex flex-col absolute w-full top-full bg-white border text-control-500 rounded-lg shadow-lg py-2 px-3',
            show ? "block h-fit z-10" : "hidden",
          )}>
            <Text color={'grey.400'} typography={'sm'} align={'right'}>آیتمی جهت نمایش وجود ندارد</Text>
          </Div>
        )}

      </Div>
      {helperText ? (
        <Div className={'px-3 w-full'}>
          <Text color={disabled ? 'grey.500' : (error ? 'danger' : 'grey.400')} typography={'xs'}>
            {helperText}
          </Text>
        </Div>
      ) : null}
    </Div>

  )
}

export default MultiSelect;