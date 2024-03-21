import React from 'react';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel'; // Asegúrate de que esta ruta de importación sea correcta
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  background-color: silver;
  height: 100vh; // Ajusta la altura al 100% de la vista de la pantalla
`;

const MainContent = styled.div`
  border-radius: 8px;
  flex-grow: 1;
  overflow: auto; // Para manejar el desbordamiento de contenido
  margin: 30px;
  background-color: white;
`;

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <RightPanel />
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardPage;