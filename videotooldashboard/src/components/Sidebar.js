import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 256px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: calc(100vh - 20px); /* Ajustado para tener en cuenta el margen */
  margin: 30px auto; /* Margen general con auto para centrar horizontalmente */
  border-radius: 8px; /* Bordes ligeramente redondeados */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// ...resto de tus estilos...

// Ahora tu componente Sidebar debería tener un margen alrededor y bordes redondeados más notorios


const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Logo = styled.img.attrs(() => ({ src: '/logo.png', alt: 'Logo' }))`
  width: 80px; // O el tamaño de tu logo.
  margin-bottom: 55px;
  margin-top: 55px;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#4F46E5' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#1a202c')};
  
  &:hover {
    background-color: #4F46E5;
    color: #ffffff;
  }

  span {
    margin-left: 12px;
  }
`;

const PlanContainer = styled.div`
  margin-top: auto;
  background-color: #f7fafc;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
`;

const PlanTitle = styled.h3`
  color: Black;
  margin-bottom: 8px;
`;

const PlanDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;


const PlanBar = styled.div`
  background-color: #e2e8f0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width || '50%'};
  background-color: #4f46e5;
  height: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  text-align: left; /* Alineación del texto a la izquierda */
  
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  background-color: ${(props) => (props.active ? '#1a202c' : '#4f46e5')};
  color: ${(props) => (props.active ? '#ffffff' : '#1a202c')};
  
  &:hover {
    background-color: #4F46E5;
    color: #ffffff;
  }

  span {
    margin-left: 12px;
  }
`;

// Definición de un componente ficticio UsageDetail para evitar errores
const UsageDetail = styled.div`
  font-size: 9px; /* Tamaño de fuente más pequeño */
  text-align: right; /* Alineación a la derecha */

  /* Puedes ajustar el espaciado según tus preferencias */
  padding: 4px;
  margin: 0;
`;



const Sidebar = () => {
  const [active, setActive] = React.useState('Dashboard'); // El estado inicial es 'Dashboard'

  const handleItemClick = (name) => {
    setActive(name); // Actualiza el estado activo cuando un ítem es clickeado
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuItemContainer>
        {['Dashboard', 'Videos', 'Player', 'Analytics', 'Configuraciones'].map((name) => (
          <MenuItem
            key={name}
            active={active === name}
            onClick={() => handleItemClick(name)}
          >
            <span>{name}</span>
          </MenuItem>
        ))}
      </MenuItemContainer>
      <PlanContainer>
        <PlanTitle>Mi Plan - Plus</PlanTitle>
        <PlanDetail>
          Almacenamiento
          <UsageDetail>
            <span>23.5 GB / 1 TB</span>
           
          </UsageDetail>
          <PlanBar><ProgressBar width="70%" /></PlanBar>
        </PlanDetail>
        <PlanDetail>
          Banda Mensual <span>3.4 TB</span>
          <UsageDetail>
          <span>3.4 TB</span>
          <span>5 TB</span>
          </UsageDetail>
          <PlanBar><ProgressBar width="30%" /></PlanBar>
        </PlanDetail>
        <Button>Administrar Plan</Button>
        
      </PlanContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
