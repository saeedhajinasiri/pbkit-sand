import React from 'react'
import classNames from "../../utils/helpers/class-names";
import {AvatarProps} from "./avatar.props";
import {SIZES} from './avatar.style';

export const Avatar = ({className, alt = 'آواتار', size = 'medium', src, ...rest}: AvatarProps) => {

  if (!src) {
    return (
      <svg className={classNames(className, SIZES[size],)} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_615_43066)">
          <rect width="60" height="60" rx="30" fill="#0E0E0E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1483 11.6943C31.519 11.885 29.6401 12.4859 28.3432 13.231C27.5729 13.6735 27.5484 13.68 26.282 13.7748C21.0129 14.1698 18.2746 16.0525 17.5471 19.7802C17.3187 20.9511 17.4138 24.6647 17.7139 26.2874C17.7541 26.5046 17.6913 26.5717 17.2153 26.8216C16.1879 27.3607 15.6746 28.1918 15.6123 29.4168C15.5679 30.2899 15.986 33.9304 16.2292 34.7892C16.486 35.6954 17.2089 36.4669 18.1324 36.8202L18.59 36.9954L18.7953 37.8754C18.9082 38.3594 19.103 39.0684 19.2281 39.4509C19.7327 40.9931 20.9809 43.1823 21.9908 44.2961L22.473 44.8279L22.1061 46.305L21.739 47.7821L17.3577 48.895C14.948 49.5071 12.6216 50.1508 12.188 50.3256C10.6444 50.9476 9.43301 51.7611 8.19189 53.0091C6.08141 55.1317 4.81318 58.0758 4.80057 60.8822C4.79643 61.808 4.80757 61.8596 5.06953 62.124L5.34273 62.4H29.9774H54.612L54.8766 62.1333C55.207 61.8002 55.2781 61.1535 55.1179 59.9394C54.6321 56.2599 52.5755 53.0592 49.488 51.1779C48.206 50.3966 47.1905 50.06 42.597 48.8942L38.2157 47.7821L37.8936 46.4975C37.7164 45.791 37.5704 45.1683 37.5691 45.1136C37.5679 45.059 37.8374 44.7013 38.1681 44.3189C39.7418 42.4985 41.0061 39.9636 41.4146 37.8092C41.5558 37.0645 41.6616 36.8182 41.84 36.8182C42.0851 36.8182 42.9015 36.1926 43.2406 35.745C43.6972 35.1423 43.8233 34.6447 44.1174 32.289C44.4904 29.3018 44.4552 28.7217 43.8465 27.8163C43.5717 27.4075 42.8315 26.7816 42.4854 26.6653C42.4024 26.6375 42.4013 26.1227 42.4808 24.6633L42.5878 22.6987L43.186 22.0341C43.515 21.6687 43.9143 21.1425 44.0732 20.8647C45.1056 19.0608 44.711 16.8202 42.9653 14.5745C41.7765 13.0452 39.7784 12.0387 37.2388 11.6899C36.3524 11.5681 34.206 11.5705 33.1483 11.6943Z" fill="white"/>
        </g>
        <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#EAEEFF"/>
        <defs>
          <clipPath id="clip0_615_43066">
            <rect width="60" height="60" rx="30" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <img className={classNames(
      className,
      SIZES[size],
    )} alt={alt} src={src} {...rest} />
  )
}

export default Avatar;