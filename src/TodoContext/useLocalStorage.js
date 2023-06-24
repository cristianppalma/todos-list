import React from "react";

function useLocalStorage(itemName, initialValue) { //Podemos crear nuestros Hooks iniciando con la palabra reservada "use"
    const [item, setItem] = React.useState(initialValue); // Estado
    const [loading, setLoading] = React.useState(true); // Estado de carga
    const [error, setError] = React.useState(false); // Estado de error

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
            setItem(parsedItem );
          }
  
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return { // si se envian (retornan) mas de dos elementos es mejor enviar un objeto y no un array
      item, 
      saveItem,
      loading,
      error,
    }; 
  }

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
