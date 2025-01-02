# Components > lists > List

This list component is able to dynamically render components, given
data, and a component to push the provided data to be rendered.

```jsx
const List = ({ props, className = "" }) => {
  const Component = props.component;

  return props.data.map((v) => <Component props={{ data: v, className }} />);
};
```

> List expects props to have a property called data
> This is how dynamic rendering is achieved
> -- className defaults to "" however in TypeScript
> It can be set as an optional property using the `?` operator

For example:

Dynamic rendering a list of elements is a common task done in web development, the following approach can be taken:

```jsx

const ListElement = { props } => {
  const { data } = props;

  return <li>{data}</li>
}

// ...

const App = () => {
  return <List props={{ data: [1, 2, 3], component: ListElement }} />
}
```

The above code renders three (3) li elements with the numbers, one through three.

`List` is also able to handle more complex renders as well, such as:

```tsx
interface person = {
  name: string;
  age: number;
}

const Person = ({ props, className }) => {
  const { name, age } = props.data;
  return (
    <div className={props.className ? props.className : ""}>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

const people = [
  {
    name: "Andy",
    age: 42,
  },
  {
    name: "Desmonnd",
    age: 30,
  },
  {
    name: "John",
    age: 23,
  },
];

const App = () => {
  return <div className="App">
<List
        props={{
          data: people,
          component: Person,
        }}
        className={"person"}
      />

}
```
