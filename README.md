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


El comportamiento de que `console.log` se imprime dos veces es debido a cómo React maneja el `useEffect` en modo estricto (`StrictMode`). En el modo estricto, React monta y desmonta los componentes dos veces durante el desarrollo para detectar efectos secundarios no deseados y asegurarse de que el código sea seguro y limpio.

Para abordar este problema, vamos a revisar y mejorar tu código, asegurando que sea limpio, eficiente y profesional.

### Código Mejorado y Explicado

1. **Asegúrate de esperar la resolución de la promesa**: Utiliza `await` para `res.json()` para obtener los datos del contacto.
2. **Optimiza el `useEffect`**: Evita que el efecto se ejecute innecesariamente.
3. **Manejo del estado y eventos de forma clara**: Sigue las mejores prácticas para mantener el código limpio y entendible.

```jsx
import { API_ENDPOINT } from '../database/server.js';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: '', phone: '' });

  useEffect(() => {
    const loadContact = async () => {
      try {
        const res = await fetch(`${API_ENDPOINT}${id}`);
        if (!res.ok) {
          navigate('/');
          return;
        }
        const data = await res.json();
        console.log(data); // Se imprimirá dos veces en modo estricto (desarrollo)
        setContact({
          name: data.name || '',
          phone: data.phone || ''
        });
      } catch (error) {
        console.error('Error loading contact:', error);
      }
    };

    loadContact();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) return;

    try {
      const req = await fetch(`${API_ENDPOINT}${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      if (req.ok) navigate('/');
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <>
      <h2>Editar contacto</h2>
      <div className="center">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <p>Nombre</p>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={contact.name}
            />
          </label>
          <label>
            <p>Teléfono</p>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={contact.phone}
            />
          </label>
          <div className="center">
            <button className="button primary" type="submit">
              Editar contacto
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditContact;
```

### Explicación del Código

1. **Uso de `useEffect` con Dependencias**:
   - El efecto se ejecuta solo cuando cambia `id` o `navigate`. Esto asegura que el contacto se carga solo cuando es necesario.
   - La función `loadContact` está definida dentro de `useEffect` para evitar efectos secundarios.

2. **Manejo de Promesas**:
   - `await res.json()` se asegura de que estamos esperando la resolución de la promesa antes de usar los datos.
   - Los datos se establecen en el estado `contact` una vez que se han cargado correctamente.

3. **Manejo de Cambios en Inputs**:
   - `handleChange` actualiza el estado de manera controlada, asegurando que cada cambio en los inputs se refleje en el estado del componente.

4. **Envío del Formulario**:
   - `handleSubmit` maneja el envío del formulario, validando los datos y realizando una solicitud `PUT` para actualizar el contacto en el backend.

### Nota sobre el Modo Estricto

En el modo estricto, React monta y desmonta componentes adicionales durante el desarrollo para detectar efectos secundarios, lo cual puede resultar en que los efectos se ejecuten más de una vez. Esto no ocurre en el entorno de producción.

Para desactivar el modo estricto (solo durante el desarrollo), puedes comentar o eliminar `<React.StrictMode>` en tu archivo `index.js`. Sin embargo, no se recomienda desactivar el modo estricto, ya que ayuda a detectar problemas potenciales en el código.

Implementar esta estructura optimizada no solo resolverá el problema de los inputs controlados, sino que también hará que tu código sea más limpio, eficiente y profesional, algo que impresionará al CEO y a otros stakeholders.