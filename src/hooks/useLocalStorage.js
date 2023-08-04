import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        //console.log(error)
      }
    }, 3000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

/* const defaultTodos = [
    {
      text: "Terminar curso de react",
      completed: true,
    },
    {
      text: "Ir a Platzi Conf",
      completed: false,
    },
    {
      text: "Pasear perrito",
      completed: false,
    },
    {
      text: "Llorar con la llorana bien mucho",
      completed: false,
    },
    {
      text: "Ir al gym",
      completed: true,
    },
    {
      text: "Lavar ropa",
      completed: false,
    },
    {
      text: "Terminar RE4",
      completed: false,
    },
    {
      text: "Tomar más cursos de JuanDC",
      completed: false,
    },
  ]; */

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')
