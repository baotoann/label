import React, { useState } from 'react';
import styled from 'styled-components';

//props hiển thị lỗi
interface ErrorListProps {
    errors: string[];
  }
  //style
  const ErrorListContainer = styled.div`
  float: 'right', 
  width: '200px', 
  backgroundColor: 'black', 
  padding: '10px', 
  borderRadius: '5px'
  margin-left: 20px;
    width: 70%;
  `;
  const ErrorListTitle = styled.h3`
  color:#ecf0f1 ;
    background-color: #4834d4;
    width: 100%;
  `
  // Component hiển thị danh sách lỗi
  const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
    return (
      <ErrorListContainer>
  
        <ErrorListTitle>Danh sách lỗi</ErrorListTitle>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {errors.map((error, index) => (
            <li key={index} style={{ marginBottom: '5px', color: '#721c24' }}>{error}</li>
          ))}
        </ul>
  
      </ErrorListContainer>
    );
  };