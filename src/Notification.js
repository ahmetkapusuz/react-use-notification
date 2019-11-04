import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: auto;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 8px;
  ${props =>
    props.hidden &&
    css`
      display: none !important;
    `}
`;

const MessageContainer = styled.div`
  background-color: #dff0d8;
  box-shadow: rgba(0, 0, 0, 0.176) 0px 3px 8px;
  color: #3c763d;
  display: flex;
  margin-bottom: 8px;
  width: 360px;
  transform: translate3d(0px, 0px, 0px);
  border-radius: 4px;
  ${props =>
    props.type === 'error' &&
    css`
      background-color: #f2dede;
      color: #a94442;
    `}
`;

const IconContainer = styled.div`
  background-color: #36b37e;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #e3fcef;
  flex-shrink: 0;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;
  text-align: center;
  width: 30px;
  overflow: hidden;
  ${props =>
    props.type === 'error' &&
    css`
      background-color: #f06767;
      color: #a94442;
    `}
`;

const Icon = styled.div``;

const TextContainer = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  font-size: 14px;
  line-height: 1.4;
  min-height: 40px;
  padding: 8px 12px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.5;
  padding: 8px 12px;
  transition: opacity 150ms ease 0s;
`;

const Notification = ({ containerRef, children, type = 'success' }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [showClose, setShowClose] = useState(false);

  return (
    <Container ref={containerRef}>
      <MessageContainer type={type}>
        <IconContainer type={type}>
          {type === 'success' ? <Icon>&#10004;</Icon> : <Icon>&times;</Icon>}
        </IconContainer>
        <TextContainer>{children}</TextContainer>
        {showClose && (
          <CloseButton
            onClick={() => {
              console.log('hidden: ', isHidden);
            }}
          >
            &times;
          </CloseButton>
        )}
      </MessageContainer>
    </Container>
  );
};

export default Notification;
