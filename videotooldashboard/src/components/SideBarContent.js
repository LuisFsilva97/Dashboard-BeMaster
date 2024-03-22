import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineDashboard, MdOutlineAnalytics } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { HiOutlinePlay } from "react-icons/hi"; 
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";



const SidebarContainer = styled.div`
  width: 256px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Logo = styled.img.attrs(() => ({ src: '/logo.png', alt: 'Logo' }))`
  width: 80px;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 600;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.active ? '#561EFA' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#1a202c'};

  &:hover {
    background-color: #561EFA;
    color: #ffffff;
  }

  span {
    margin-left: 12px;
  }
`;

const PlanContainer = styled.div`
  margin-top: auto;
  margin-bottom: 20%;
  background-color: #EAEDED;
  border-radius: 12px;
  padding: 16px;
  text-align: left;
`;

const PlanTitle = styled.h3`
  color: black;
  margin-bottom: 8px;
`;

const PlanTitle2 = styled.h6`
  color: #515151;
  margin-bottom: 8px;
  font-size: 10px;
  transform: skew(-10deg);
`;

const PlanDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #515151;
  padding-top: 16px;
`;

const PlanBar = styled.div`
  background-color: #e2e8f0;
  border-radius: 4px;
  height: 8px;
  width: 100%;
  margin-top: 5px;
`;

const ProgressBar = styled.div`
  background-color: #561EFA;
  height: 100%;
  width: ${props => props.width || '0%'};
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 2px;
  text-align: center;
  border: none;
  border-radius: 30px;
  background-color: #561EFA;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #4F46E5;
    color: #ffffff;
  }
`;

const UsageDetail = styled.span`
  font-size: 9px;
  text-align: right;
`;

const iconMap = {
  'Dashboard': MdOutlineDashboard,
  'Videos': GoFileDirectory,
  'Player': HiOutlinePlay,
  'Analytics': MdOutlineAnalytics,
  'Configuraciones': IoSettingsOutline,
  'Ayuda': FiHelpCircle,
  
};

const renderIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || FiHelpCircle;
  return <IconComponent size={24} style={{ marginRight: '12px' }} />;
};

const SideBarContent = ({ showHelp }) => {
  const [active, setActive] = useState('Videos'); 

  const handleItemClick = (name) => {
    setActive(name);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuItemContainer>
        {Object.keys(iconMap).map((name) => (
          <MenuItem
            key={name}
            active={active === name}
            onClick={() => handleItemClick(name)}
          >
            {renderIcon(name)}
            <span>{name}</span>
          </MenuItem>
        ))}
        {showHelp && (
          <MenuItem
            active={active === 'Ayuda'}
            onClick={() => handleItemClick('Ayuda')}
          >
            {renderIcon('Ayuda')}
            <span>Ayuda</span>
          </MenuItem>
        )}
      </MenuItemContainer>
      <PlanContainer>
        <PlanTitle>Mi Plan - Plus</PlanTitle>
        <PlanTitle2>El uso se renueva el: 3-may-23</PlanTitle2>
        <PlanDetail>
          <div>Almacenamiento</div>
          <UsageDetail>700 GB / 1 TB</UsageDetail>       
        </PlanDetail>
        <PlanBar>
            <ProgressBar width="70%" />
        </PlanBar>
        <PlanDetail>
          <div>Banda Mensual</div>
          <UsageDetail>3.4 TB / 5 TB</UsageDetail>
        </PlanDetail>
        <PlanBar>
            <ProgressBar width="68%" />
        </PlanBar>
        <Button>Administrar Plan</Button>
      </PlanContainer>
    </SidebarContainer>
  );
};

export default SideBarContent;
