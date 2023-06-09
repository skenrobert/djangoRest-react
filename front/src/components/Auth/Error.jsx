import React from 'react';

export default ({ status }) => {

  const title = {
    503: '503: Servicio No Disponible',
    500: '500: Error del Servidor',
    404: '404: Página no encontrada',
    403: '403: Prohibido'
  }[status];

  const description = {
    503: 'Lo siento, estamos haciendo un mantenimiento. Por favor, revise luego.',
    500: 'Vaya, algo salió mal en nuestros servidores.',
    404: 'Lo siento, la página que está buscando no se puede encontrar.',
    403: 'Lo siento, se le prohíbe acceder a esta página.'
  }[status];

  return (
    <div className="flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-indigo-800">
      <Helmet title={title} />
      <div className="w-full max-w-md">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-3 text-lg leading-tight">{description}</p>
      </div>
    </div>
  );
};
