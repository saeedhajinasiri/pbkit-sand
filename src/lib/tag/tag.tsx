import {TagProps} from './tag.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, ICON_CONTAINER_SIZE, ICON_SIZE, ROUNDED, SIZES, TITLE_SIZE} from "./tag.style";
import {Div, Text} from "@pezeshk-book/ui-kit";

export const Tag = ({id, title, disabled, size, rounded, color, variant, onChange}: TagProps) => {

  const handleClick = () => {
    onChange(id);
  }

  return (
    <Div className={classNames('flex items-center gap-x-1 px-1',
      ROUNDED[rounded],
      SIZES[size],
      disabled ? 'bg-control-200' : (`${COLORS[color]} ${variant == 'filled' ? 'border' : 'border-0'}`)
    )}>
      <Text className={classNames(TITLE_SIZE[size], disabled ? 'grey.400' : 'grey.800')}>{title}</Text>

      <Div className={`relative ${ICON_CONTAINER_SIZE[size]}`}>
        <svg
          onClick={handleClick}
          className={'cursor-pointer'}
          width={ICON_SIZE[size]}
          height={ICON_SIZE[size]}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00001 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99998C14.6667 4.33331 11.6667 1.33331 8.00001 1.33331C4.33334 1.33331 1.33334 4.33331 1.33334 7.99998C1.33334 11.6666 4.33334 14.6666 8.00001 14.6666Z" stroke="#5C5F66" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.11334 9.88668L9.88668 6.11334" stroke="#5C5F66" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.88668 9.88668L6.11334 6.11334" stroke="#5C5F66" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Div>

    </Div>
  )
}

export default Tag;