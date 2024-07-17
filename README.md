# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Prom GTP
siempre opto por las maneras mas profesionales y esteticas de conseguirlo, recuerda que siempre busco maneras de hacer mejor las cosas, necesito la forma mas optima en cuanto a rendimiento y escalabilidad, eficiente en cuanto a codigo y profesional en cuanto a empleo de codigo limpio, mejores practicas y patrones de diseño, por favor, dame lo mas profesional que tengas; que cuando el CEO vea mi codigo, se impresione por el modelo de desestructurar datos tan bonita, !VAMOS!"""
  

# Questions
I ask me; because wehn we create a contactac with information like {name, phone}, why and in what time we keep a ID; the unique stuff that belive possible is that "json-server"
make a ID for each element (contact) created; on the code i dont look where insert a ID, i need investigate more about this...


mira lo  que pasa es  que tengo este componente "import { API_ENDPOINT } from '../database/server.js'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: "", phone: "" });
  useEffect(() => { loadContact() }, []);

  const loadContact = async () => {
    const res = await fetch(API_ENDPOINT + id);
    if (!res.ok) return navigate("/");
    const json = res.json();
    setContact(json);
  }
  const onChangeInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) return
    editContact(contact);
  }
  const editContact = async (data) => {
    const req = await fetch(API_ENDPOINT + id, {
      method: "PUT",
      body: JSON.stringify(data)
    });
    navigate("/");
  }

  return (
    <>
      <h2> Editar contacto </h2>
      <div className="center">
        <form className="form" onSubmit={onSubmit}>
          <label>
            <p> Name </p>
            <input type="text" name="name" onChange={onChangeInput} value={contact.name} />
          </label>

          <label>
            <p> Phone </p>
            <input type="text" name="phone" onChange={onChangeInput} value={contact.phone} />
          </label>

          <div className="center">
            <button className="button primary"> Editar contact </button>
          </div>
        </form>
      </div>
    </>
  )
}"
se llama SetContact y esta funcional, la cuestion es al momento  de clickear sobre un contacto e ir a modificarlo u editarlo, entonces react me muestra este error "Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components" la cuestion es que como ves, deseo llenar los inputs con los valores traidos  desde  el backend; dime entonces como podria yo solucionar esta advertencia;  tampoco los inputs me muestran la informacion almacenada de ese usuario


#/*----------------------------------------------------------------*/
Para solucionar el problema de la advertencia "A component is changing a controlled input to be uncontrolled" en React, es esencial asegurarse de que los inputs controlados siempre tengan un valor definido, incluso antes de que los datos del backend se hayan cargado. Aquí tienes un enfoque paso a paso para abordar este problema:

1. **Inicializa el estado de los inputs**: Asegúrate de que el estado de los inputs esté inicializado con valores predeterminados no `undefined`. Por ejemplo, utiliza cadenas vacías o valores adecuados según el tipo de input.

2. **Utiliza un `useEffect` para actualizar el estado cuando los datos se hayan cargado**: Una vez que los datos del backend estén disponibles, actualiza el estado con esos valores.

3. **Renderiza los inputs con el estado actualizado**: Asegúrate de que los inputs siempre tengan un valor asignado desde el estado.

Aquí tienes un ejemplo práctico:

```jsx
import React, { useState, useEffect } from 'react';

function EditContact({ contactId }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Simulación de una llamada al backend para obtener los datos del contacto
    const fetchContact = async () => {
      const response = await fetch(`/api/contacts/${contactId}`);
      const data = await response.json();
      setContact({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || ''
      });
    };

    fetchContact();
  }, [contactId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default EditContact;
```

### Explicación:
1. **Inicialización del Estado**: El estado `contact` se inicializa con cadenas vacías para cada campo. Esto asegura que los inputs siempre tendrán un valor definido.
2. **Carga de Datos**: En el `useEffect`, se simula una llamada al backend para obtener los datos del contacto. Una vez que se obtienen los datos, se actualiza el estado `contact` con los valores recibidos.
3. **Manejo de Cambios en los Inputs**: La función `handleChange` actualiza el estado `contact` a medida que el usuario modifica los inputs.

### Consideraciones Adicionales:
- Asegúrate de que los datos del backend siempre contengan los campos necesarios, o maneja los casos en que puedan estar ausentes (`null` o `undefined`).
- Si estás usando TypeScript, puedes definir un tipo para `contact` que refleje la estructura esperada, lo que ayudará a evitar errores.

Este enfoque garantiza que los inputs siempre sean controlados y tengan valores definidos, eliminando así la advertencia y asegurando que los datos se muestren correctamente.