import React from "react";

async function fakeFetch() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            nome: "Fulano de Tal",
            idade: 33
          },
          {
            nome: "Cicrano de Tal",
            idade: 23
          }
        ]),
      1000
    );
  });
}

let content = null;
function MainComponent() {
  if (content === null) {
    const fakeFetched = fakeFetch();
    content = fakeFetched.then(result => (content = result));
    throw fakeFetched;
  } else {
    return <h1>Suspense Trial</h1>;
  }
}

export default MainComponent;
