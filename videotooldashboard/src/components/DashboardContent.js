import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";


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
  margin-right: 10px;
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
      cursor: pointer;
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
  gap: 12px; 
  url('${HiOutlineCursorArrowRays}') 4 12, auto
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


const Icon = styled(HiOutlinePlayCircle)`
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
                    <Checkbox id="selectAll" />
                    <Label htmlFor="selectAll">Nombre</Label>
                  </CheckboxLabelContainer>
                </th>
                <th>Tamaño</th>
                <th>Duración</th>
                <th>Última modificación</th>
              </tr>
            </Thead>
            <Tbody>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Entrenamiento.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video1" onChange={(event) => handleCheckboxChange(event, 'video1')} />
                    <Icon size={22} />
                    <Label htmlFor="video1">Entrenamiento.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>7.3 GB</td>
              <td>04:11:37</td>
              <td>30/may/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video2', name: 'Salida-al-mercado-versión nueva.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video2" onChange={(event) => handleCheckboxChange(event, 'video2')} />
                    <Icon size={22} />
                    <Label htmlFor="video2">Salida-al-mercado-versión nueva.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>1.4 GB</td>
              <td>47:55</td>
              <td>22/jun/2022</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video3', name: 'Como-cerrar-una-venta.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video3" onChange={(event) => handleCheckboxChange(event, 'video3')} />
                    <Icon size={22} />
                    <Label htmlFor="video3">Como-cerrar-una-venta.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>284 MB</td>
              <td>10:12</td>
              <td>11/sep/2021</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video4', name: 'Crea-un-ticket-valioso.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video4" onChange={(event) => handleCheckboxChange(event, 'video4')} />
                    <Icon size={22} />
                    <Label htmlFor="video4">Crea-un-ticket-valioso.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>4.3 GB</td>
              <td>03:50:22</td>
              <td>21/jun/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video5', name: 'Conquista-el-mercado-digital.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video5" onChange={(event) => handleCheckboxChange(event, 'video5')} />
                    <Icon size={22} />
                    <Label htmlFor="video5">Conquista-el-mercado-digital.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>500 MB</td>
              <td>5:00</td>
              <td>5/abr/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video6', name: 'Entrenamiento.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video6" onChange={(event) => handleCheckboxChange(event, 'video6')} />
                    <Icon size={22} />
                    <Label htmlFor="video6">Entrenamiento.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>7.3 GB</td>
              <td>04:11:37</td>
              <td>30/may/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video7', name: 'Salida-al-mercado-versión nueva.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video7" onChange={(event) => handleCheckboxChange(event, 'video7')} />
                    <Icon size={22} />
                    <Label htmlFor="video7">Salida-al-mercado-versión nueva.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>1.4 GB</td>
              <td>47:55</td>
              <td>22/jun/2022</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video8', name: 'Como-cerrar-una-venta.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video8" onChange={(event) => handleCheckboxChange(event, 'video8')} />
                    <Icon size={22} />
                    <Label htmlFor="video8">Como-cerrar-una-venta.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>284 MB</td>
              <td>10:12</td>
              <td>11/sep/2021</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video9', name: 'Crea-un-ticket-valioso.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video9" onChange={(event) => handleCheckboxChange(event, 'video9')} />
                    <Icon size={22} />
                    <Label htmlFor="video9">Crea-un-ticket-valioso.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>4.3 GB</td>
              <td>03:50:22</td>
              <td>21/jun/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video10', name: 'Conquista-el-mercado-digital.mp4' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox id="video10" onChange={(event) => handleCheckboxChange(event, 'video10')} />
                    <Icon size={22} />
                    <Label htmlFor="video10">Conquista-el-mercado-digital.mp4</Label>
                </CheckboxLabelContainer>
              </td>
              <td>500 MB</td>
              <td>5:00</td>
              <td>5/abr/2023</td>
            </tr>
            </Tbody>
          </Table>
        </TableContainer>
      </TopBar>
      {selectedFile && <DashboardContent file={selectedFile} />}
    </RightContainer>
  );
};

export default DashboardContent;

