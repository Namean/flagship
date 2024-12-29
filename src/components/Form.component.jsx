import React from "react";

const firstNameFormInputConfig = {
  htmlFor: "fname",
  innerText: "First name:",
  type: "text",
  id: "fname",
  name: "fname",
};

const lastNameFormInputConfig = {
  htmlFor: "lname",
  innerText: "Last name:",
  type: "text",
  id: "lname",
  name: "lname",
};

const FormInput = ({ props }) => {
  const { htmlFor, innerText, type, id, name } = props;
  return (
    <>
      <label htmlFor={htmlFor}>{innerText}</label>
      <input type={type} id={id} name={name} />
    </>
  );
};

const Form = () => {
  return (
    <form>
      <FormInput props={firstNameFormInputConfig} />
      <FormInput props={lastNameFormInputConfig} />
    </form>
  );
};

export { Form, FormInput };
