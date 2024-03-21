import React from 'react';
import styled from 'styled-components';

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
  justify-content: space-between; // Asegura que los elementos estén en los extremos
  align-items: center; // Alinea verticalmente los elementos
  margin-bottom: 16px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  margin-right: 16px;
  cursor: pointer;
  color: #4A5568;

  &:hover, &.active {
    color: #4C51BF;
  }

  &.active {
    border-bottom: 3px solid #4C51BF;
  }
`;

const ActionButtons = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.primary ? '#4C51BF' : '#E2E8F0'};
  color: ${(props) => props.primary ? '#FFFFFF' : '#333333'};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.primary ? '#3730A3' : '#CBD5E0'};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;  // Posición relativa para posicionar absolutamente el ícono
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 7px; // Radio más pronunciado, ajusta según sea necesario
  padding: 8px 16px; // Ajusta el padding según sea necesario
  width: auto; // Ajustamos el ancho para no estirar toda la barra
  max-width: 40%; // O el ancho máximo que prefieras
`;

const SearchIcon = styled.span`
  color: #A0AEC0;
  position: absolute;  // Posición absoluta para el ícono de búsqueda
  left: 16px; // Alinear con el padding de SearchBarContainer
`;

const Input = styled.input.attrs({ type: 'search', placeholder: 'Buscar Video' })`
  padding-left: 40px; // Espacio para el ícono de búsqueda y para separar el texto
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: #A0AEC0;
  }
`;

const TableContainer = styled.div`
  padding: 20px; // Se añade el mismo padding que en TopBar para alineación
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #e2e8f0;
  th {
    padding: 16px;
    text-align: left;
    font-weight: 600; // Hace que el texto en los encabezados sea más grueso
    color: #4A5568;
  }
`;

const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid #e2e8f0;
  }
  td {
    padding: 16px;
    color: #4A5568;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 12px;
`;

const RightPanel = () => {
  return (
    <RightContainer>
      <TopBar>
        <NavigationButtons>
          <div>
            <NavigationButton className="active">Biblioteca</NavigationButton>
            <NavigationButton>Papelera</NavigationButton>
          </div>
          <ActionButtons>
            <ActionButton>Nueva carpeta</ActionButton>
            <ActionButton primary>Nuevo video</ActionButton>
          </ActionButtons>
        </NavigationButtons>
        <SearchBarContainer>
          <SearchIcon>🔍|</SearchIcon> {/* Reemplazar con tu icono específico */}
          <Input />
        </SearchBarContainer>
        <TableContainer>
        <Table>
          <Thead>
            <tr>
              <th>Nombre</th>
              <th>Videos</th>
              <th>Tamaño</th>
              <th>Última modificación</th>
            </tr>
          </Thead>
          <Tbody>
            {/* Ejemplo de fila de la tabla */}
            <tr>
              <td><Checkbox id="video1" /><label htmlFor="video1">Afiliado Master</label></td>
              <td>8</td>
              <td>7.3 GB</td>
              <td>30/may/2023</td>
            </tr>
            {/* Repetir filas para otros datos */}
          </Tbody>
        </Table>
      </TableContainer>
      </TopBar>

    </RightContainer>
  );
};

export default RightPanel;