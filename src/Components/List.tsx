import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div>
      <ul>
        {items.map((value, index) => (
          <li key={index}>{render(value)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
