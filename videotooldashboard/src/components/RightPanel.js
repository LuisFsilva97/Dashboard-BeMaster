import React, { useState } from 'react';
import styled from 'styled-components';
import { GoFileDirectory, GoSearch  } from "react-icons/go";

import { PiPlayCircle } from "react-icons/pi";
import DashboardContent from './DashboardContent';
import { VscLibrary } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";


const RightContainer = styled.div`
  flex-grow: 1;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 55px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 16px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333333;

  &:hover, &.active {
    color: #561EFA;
  }

  &.active {
    border-bottom: 3px solid #561EFA;
  }
  
  & + & {
    margin-left: -75%;  
  }
  
  @media (max-width: 1680px) {
    & + & { 
      margin-left: -48%; 
    }
  }

  @media (max-width: 900px) {
    & + & { 
      margin-left: -10%; 
    }
  }
`;

const IconContainer = styled.span`
  margin-right: 8px; 
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const BibliotecaIcon = styled(VscLibrary)`
  margin-right: 0px;
`;

const PapeleraIcon = styled(IoTrashOutline)`
  margin-right: 0px;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.primary ? '#561EFA' : '#E2E8F0'};
  color: ${(props) => props.primary ? '#FFFFFF' : '#333333'};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  &:hover {
    background-color: ${(props) => props.primary ? '#3730A3' : '#CBD5E0'};
  }

  &:last-child {
    margin-right: 5px;
  }
`;

const SearchBarContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 7px; 
  padding: 6px 14px; 
  width: auto; 
  max-width: 40%;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  color: #A0AEC0;
  position: absolute; 
  left: 16px; 
`;

const VerticalBar = styled.span`
  padding-left: 8px; 
  padding-right: 8px; 
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs({ type: 'search', placeholder: 'Buscar Video' })`
  padding-left: 40px; 
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: #A0AEC0;
  }
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
  gap: 20px; 
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

const RightPanel = () => {
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
          <NavigationButton className="active">
            <IconContainer>
              <BibliotecaIcon />
            </IconContainer>
            <Text>Biblioteca</Text>
          </NavigationButton>
          <NavigationButton>
            <IconContainer>
              <PapeleraIcon />
            </IconContainer>
            <Text>Papelera</Text>
          </NavigationButton>
          <ActionButtons>
            <ActionButton>
              <GoFileDirectory size={20} />
                Nueva carpeta
            </ActionButton>
            <ActionButton primary>
              <PiPlayCircle size={20} />
              Nuevo video
            </ActionButton>
          </ActionButtons>
        </NavigationButtons>
        <SearchBarContainer>
          <SearchIcon><GoSearch/><VerticalBar>|
          </VerticalBar></SearchIcon>
          <Input />
        </SearchBarContainer>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <th>
                  <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video')} />
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
                  <Label htmlFor="video1">Afiliado Master</Label>
                </CheckboxLabelContainer>
              </td>
              <td>8</td>
              <td>7.3 GB</td>
              <td>30/may/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video2')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">BeMaster</Label>
                </CheckboxLabelContainer>
              </td>
              <td>21</td>
              <td>1.4 GB</td>
              <td>22/jun/2022</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video3')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Comizzión</Label>
                </CheckboxLabelContainer>
              </td>
              <td>10</td>
              <td>284 MB</td>
              <td>11/sep/2021</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video4')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Creador de Contenido</Label>
                </CheckboxLabelContainer>
              </td>
              <td>2</td>
              <td>4.3 GB</td>
              <td>21/jun/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video5')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Exportados Wil</Label>
                </CheckboxLabelContainer>
              </td>
              <td>14</td>
              <td>500 MB</td>
              <td>5/abr/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video1')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Afiliado Master</Label>
                </CheckboxLabelContainer>
              </td>
              <td>8</td>
              <td>7.3 GB</td>
              <td>30/may/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video2')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">BeMaster</Label>
                </CheckboxLabelContainer>
              </td>
              <td>21</td>
              <td>1.4 GB</td>
              <td>22/jun/2022</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video3')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Comizzión</Label>
                </CheckboxLabelContainer>
              </td>
              <td>10</td>
              <td>284 MB</td>
              <td>11/sep/2021</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video4')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Creador de Contenido</Label>
                </CheckboxLabelContainer>
              </td>
              <td>2</td>
              <td>4.3 GB</td>
              <td>21/jun/2023</td>
            </tr>
            <tr onClick={() => handleFileClick({ id: 'video1', name: 'Nombre del Video' })}>
              <td>
                <CheckboxLabelContainer>
                  <Checkbox onChange={(e) => handleCheckboxChange(e, 'video5')} />
                  <Icon size={22} />
                  <Label htmlFor="video1">Exportados Wil</Label>
                </CheckboxLabelContainer>
              </td>
              <td>14</td>
              <td>500 MB</td>
              <td>5/abr/2023</td>
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

export default RightPanel;
