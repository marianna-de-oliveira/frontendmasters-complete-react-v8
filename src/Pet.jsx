// import React from "react";
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

// escrevendo a mesma coisa acima, mas em jsx
// jsx = html dentro do js
// deixei de precisar do import pois não estou usando createElement
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.name}</h2>
      <h2>{props.name}</h2>
    </div>
  );
};
export default Pet;
// pesquisar sobre ESM - ecma script modules
