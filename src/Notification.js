import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  padding: 8px;
`;

const MessageContainer = styled.div`
  background-color: rgb(227, 252, 239);
  box-shadow: rgba(0, 0, 0, 0.176) 0px 3px 8px;
  color: rgb(0, 102, 68);
  display: flex;
  margin-bottom: 8px;
  width: 360px;
  transform: translate3d(0px, 0px, 0px);
  border-radius: 4px;
  transition: transform 220ms cubic-bezier(0.2, 0, 0, 1) 0s;
`;

const IconContainer = styled.div`
  background-color: rgb(54, 179, 126);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: rgb(227, 252, 239);
  flex-shrink: 0;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;
  text-align: center;
  width: 30px;
  overflow: hidden;
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

const Notification = ({ containerRef, text }) => {
  return (
    <Container ref={containerRef}>
      <MessageContainer>
        <IconContainer>
          <Icon>&#10004;</Icon>
        </IconContainer>
        <TextContainer>{text}</TextContainer>
        <CloseButton>&times;</CloseButton>
      </MessageContainer>
    </Container>
  );
};

export default Notification;
