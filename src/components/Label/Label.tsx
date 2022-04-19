import React from "react";

type LabelProps = {
  label: string;
}

const Label = ({ label }: LabelProps) => <label>{label}</label>;


export default Label;