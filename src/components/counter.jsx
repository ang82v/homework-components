import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const tags = ["tag1", "tag2", "tag3"];

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тего не найдено";
    return tags.map((tag, idx) => (
      <li key={idx}>
        {tag} - {idx}
      </li>
    ));
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (productId) => {
    //console.log(productId);
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
