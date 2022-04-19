import React from "react";

type InputProps = {
    value: string;
}

const Input = ({ value }: InputProps) => <input value={value} />;

export default Input;