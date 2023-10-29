import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'INBOUND REFERRALS',
    path: './inboundReferrals',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Needs Action',
        path: './inboundReferrals/inboundAction',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'In Review',
        path: './inboundReferrals/inReview',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  {
    title: 'ASSISTANCE REQUESTS',
    path: './assistanceRequests',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Needs Action',
        path: './assistanceRequests/assistanceAction',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'

      },
    
      {
        title: 'Closed',
        path: './assistanceRequests/closed',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'

      },
      {
        title: 'Processed',
        path: './assistanceRequests/processed',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'

      }
    ]
  },
  
  {
    title: 'INTERNAL CASES',
    path: './internalCases',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Open',
        path: './internalCases/Open',
        cName: 'sub-nav'
      },
      {
        title: 'Close',
        path: './internalCases/Closed',
        cName: 'sub-nav'
      },
      {
        title: 'All',
        path: './internalCases/All',
        cName: 'sub-nav'
      },
    ]
  },
  
  {
    title: 'OUTBOUND REFERRALS',
    path: './outbound',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Drafts',
        path: './outbound/drafts',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Rejected',
        path: './outbound/rejected',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Recalled',
        path: './outbound/recalled',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Need Actions',
        path: './outbound/needActions',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'In Review',
        path: './outbound/inReview',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Closed',
        path: './outbound/closed',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All',
        path: './outbound/all',
        icon: <IoIcons.IoMdHelpCircle />
      },

    ]
  },

  {
    title: 'EXTERNAL CASES',
    path: './externalCases',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Open',
        path: './externalCases/externalOpen',
        cName: 'sub-nav'
      },
      {
        title: 'Close',
        path: './externalCases/externalClosed',
        cName: 'sub-nav'
      },
      {
        title: 'All',
        path: './externalCases/externalAll',
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'OUT OF NETWORK CASES',
    path: './outOfNetworkCases',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Open',
        path: './outOfNetworkCases/outOpen',
        cName: 'sub-nav'
      },
      {
        title: 'Close',
        path: './outOfNetworkCases/outClosed',
        cName: 'sub-nav'
      },
      {
        title: 'All',
        path: './outOfNetworkCases/outAll',
        cName: 'sub-nav'
      },
    ]
  },
  

];



export default SidebarData;