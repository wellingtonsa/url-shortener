/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './index.styles';

interface Props {
    value: string;
    placeholder: string;
    label: string;
    onChange(value:string): void;
    onClick(): void;
}

const Input:React.SFC<Props> = ({
  value, placeholder, label, onChange, onClick,
}) => (
  <Container>
    <input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    <button onClick={onClick}>{label}</button>
  </Container>
);

export default Input;
