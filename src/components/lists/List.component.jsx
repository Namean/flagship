import React from "react";

/*
dconst Label = props => <span>{props.children}</span>
const Button = props => {
    const Inner = props.inner; // Note: variable name _must_ start with a capital letter 
    return <button><Inner>Foo</Inner></button>
}
const Page = () => <Button inner={Label}/>
*/
export const List = ({ props }) => {
  const Component = props.component; // Note: variable name _must_ start with a capital letter
  //   return props.data.map((v) => <Component>{v}</Component>);
  //   let data = [1, 2, 3];

  return props.data.map((v) => <Component props={{ data: v }} />);
};
