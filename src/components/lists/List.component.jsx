import React from "react";

/*
const Label = props => <span>{props.children}</span>
const Button = props => {
    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
    return <button><Inner>Foo</Inner></button>
}
const Page = () => <Button inner={Label}/>
*/
export const List = ({ props, className = "" }) => {
  const Component = props.component; // Note: variable name _must_ start with a capital letter
  //   return props.data.map((v) => <Component>{v}</Component>);
  //   let data = [1, 2, 3];

  return props.data.map((v) => <Component props={{ data: v, className }} />);
};
