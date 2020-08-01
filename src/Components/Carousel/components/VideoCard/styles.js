import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:hover {
    width: 327px;
    height: 228px;
    transition: 0.4s;
  }
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 2px;
  }
`;
