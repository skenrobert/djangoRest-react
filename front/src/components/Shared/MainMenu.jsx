import React from 'react';
import MainMenuItem from '../Shared/MainMenuItem';

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Personas" link="/personas" icon="office" />
      <MainMenuItem text="Factura" link="/factura" icon="store-front" />
      <MainMenuItem text="Usuarios" link="/usuarios" icon="users" />
    </div>
  );
};
