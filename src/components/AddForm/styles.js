import styled from 'styled-components';
import colors from '@colors'

import addPhotoIcon from "@/assets/img/add_a_photo_black_24dp.svg";


export const AddButton = styled.button`
  font-size: 28px;
  border: none;
  border-radius: 50%;
  background: none;
  width: 50px;
  height: 50px;
  color: ${colors.secondary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary.main};
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 1;


  &:focus, &:hover {
    outline: none;
    color: ${colors.secondary.dark};
    background-color: ${colors.primary.dark};
  }
`

export const ImageInput = styled.input`
  display: none;
`

export const PorfileImage = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  padding: min(30%, 100px);
  margin: 1em 0;
  align-self: center;
  background-image: url(${(props) =>
    props.src ||
    "https://usra-quantum.s3.amazonaws.com/assets/images/user-avatar-icon.png"});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 5px #0008;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
  &::before {
    content: "";
    background: url("${addPhotoIcon}");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    position: absolute;
    display: block;
    height: min(30%, 50px);
    width: min(30%, 50px);
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    fill: white;
    transition: opacity 0.2s ease-in-out;
  }
  &::after {
    content: "";
    z-index: 1;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0 2px ${colors.WHITE};
  }
  @media (min-width: 1025px) {
    &::before {
      opacity: 0.5;
    }
    &:hover,
    &:focus {
      &::before {
        opacity: 1;
      }
    }
  }

  ${(props) =>
    props.error && 'border: 1px solid ' + colors.primary.dark}
`;
