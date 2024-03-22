import React, { useState } from 'react';
import Sidebar from './SideBar.js';
import RightPanel from './RightPanel'; 
import styled from 'styled-components';
import DashboardContent from './DashboardContent';

const DashboardContainer = styled.div`
  display: flex;
  background-color: #F2F4F4;
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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const resetSelection = () => {
    setSelectedFile(null);
  };

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        {!selectedFile && <RightPanel onFileSelect={handleFileSelect} />}
        {selectedFile && <DashboardContent file={selectedFile} onBack={resetSelection} />}
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardPage;