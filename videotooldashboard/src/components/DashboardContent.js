import React, { useState } from 'react';
import styled from 'styled-components';
import { GoFileDirectory } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";

const RightContainer = styled.div`
  flex-grow: 1;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 55px;
`;

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 8px;
    font-size: 18px; // Tamaño de fuente a ajustar según sea necesario
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
`;

const NavigationButtons = styled.div`
  display: flex; 
  align-items: center; 
  margin-bottom: 61px;
 
`;

const BoldText = styled.span`
    font-weight: bold;
`;

const Breadcrumbs = styled.span`
  color: #333; // Cambiar a color adecuado del texto
`;

const NavigationButton = styled.a`
  background-color: #561EFA;
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  margin-left: -30px;
  margin-right: 16px;

`;


const TableContainer = styled.div`
  padding-top: 20px;
`;

const Table = styled.table`
  margin-right: 20px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  th {
    padding: 16px;
    text-align: left;
    font-weight: 600; 
    color: black;
  }
`;

const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid #e2e8f0;
    &:hover {
      background-color: #f0f0f0;
      cursor: url('${process.env.PUBLIC_URL}/imgpoint.png'), pointer;
    }
  }
  td {
    padding: 16px;
    color: #4A5568;
  }
`;

const CheckboxLabelContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 8px; 
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 14px;
  height: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 3px;

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px; 
    height: 6px; 
    background-color: #561EFA;
    border-radius: 1px;
  }
`;

const Icon = styled(GoFileDirectory)`
  color: #6B46C1; 
  margin-right: 11px; 
`;

const Label = styled.label`
`;

const ArrowLeftIcon = styled(FaArrowLeft)`
  font-size: 20px;
  background-color: #561EFA;
  
`;

const DashboardContent = () => {
  const [selectedFile, setSelectedFile] = useState(null); 

  const handleCheckboxChange = (event, id) => {
    const row = event.target.closest('tr');
    if (event.target.checked) {
      row.classList.add('checked');
    } else {
      row.classList.remove('checked');
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  if (selectedFile) {
    return <DashboardContent file={selectedFile} />;
  }
  
  return (
    <RightContainer>
      <TopBar>
        <NavigationButtons>
          <NavigationContainer>
            <NavigationButton href="videotooldashboard\src\components\DashboardPage.js">
              <ArrowLeftIcon />
            </NavigationButton>
            <Breadcrumbs>
              Home / <BoldText>BeMaster</BoldText>
            </Breadcrumbs>
          </NavigationContainer>
        </NavigationButtons>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <th>
                  <CheckboxLabelContainer>
                    <Checkbox id="video1" />
                    <Label htmlFor="video1">Nombre</Label>
                  </CheckboxLabelContainer>
                </th>
                <th>Videos</th>
                <th>Tamaño</th>
                <th>Última modificación</th>
              </tr>
            </Thead>
            <Tbody>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video1')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Nombre del Video</Label>
                </CheckboxLabelContainer>
              </td>
              <td>8</td>
              <td>7.3 GB</td>
              <td>30/may/2023</td>
            </tr>
              {/* Otras filas de datos */}
            </Tbody>
          </Table>
        </TableContainer>
      </TopBar>
      {selectedFile && <DashboardContent file={selectedFile} />}
    </RightContainer>
  );
};

export default DashboardContent;
