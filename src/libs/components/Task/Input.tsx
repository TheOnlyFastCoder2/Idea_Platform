import styled from 'styled-components';
import React, { useState } from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  pattern?: RegExp,
  callback?: Function,
  refValue: React.RefObject<{value:string, isError?:boolean}>,
}

function checkIsError(pattern: RegExp, value: string) {
  return pattern.test(value) ? false : true;
}

export default function ({pattern, refValue, callback, ...props}: IProps) {
  const [v, setValue] = useState(refValue.current);
  const value = v.value;
  const isError = pattern ? pattern.test(value) ? false : true : false;
 
  function toSetValue({currentTarget: { value }}: React.FormEvent<HTMLInputElement>) {
    callback && callback();
    refValue.current = (pattern ? {value, isError: checkIsError(pattern, value)} : {value});
    setValue(refValue.current);
  }

  return (
      <Input 
        {...props} 
        onInput={toSetValue}
        $isError={isError} 
        className='Input'
        value={value}
     />
    )
};

const Input = styled.input<{$isError: boolean}>`
  max-width: 200;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0.4px;
  border-radius: 4px;
  border: 1px solid ${({$isError}) => $isError ? "#a71717" : "#919191"};
  color: #e3e3e3;
  padding: 5px 10px;
  
  &:focus, &:focus-visible {
    border-color: ${({$isError}) => $isError ? "#e22020" : "#0184cf"};
  }
`;
