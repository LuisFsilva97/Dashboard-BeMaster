import React, { useState } from 'react';
import RightPanel from './RightPanel';
import SideBarContent from './SideBarContent';
import DashboardContent from './DashboardContent';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  background-color: #F2F4F4;
  height: 100vh; 
`;

const MainContent = styled.div`
  border-radius: 8px;
  flex-grow: 1;
  overflow: auto;
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

  // Determina si se debe mostrar el botón de ayuda en el sidebar
  // En este caso, si hay un archivo seleccionado, queremos mostrar el botón de ayuda
  const showHelp = selectedFile !== null;

  return (
    <DashboardContainer>
      <SideBarContent showHelp={showHelp} />
      <MainContent>
        {!selectedFile && <RightPanel onFileSelect={handleFileSelect} />}
        {selectedFile && <DashboardContent file={selectedFile} onBack={resetSelection} />}
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardPage;