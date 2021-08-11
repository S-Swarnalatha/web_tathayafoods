import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  
  {
    title: 'GetProducts',
    path: '/getall',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'AddProducts',
    path: '/productadd',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'ViewAllUsers',
    path: '/getuser',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <IoIcons.IoMdPeople />,
    
    cName: 'nav-text'
  },
  
  
];