// components/SideBar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { CiHome, CiGrid41 } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineUsers, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { IoPieChartOutline, IoBookOutline, IoNotificationsOutline } from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";

interface ChildItem {
  id: number;
  childtitle: string;
  childlink: string;
}

interface MenuItem {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
  subMenu?: boolean;
  child?: ChildItem[];
}

const SideBar: React.FC = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // Open Navigation Dropdown
  const handleForDropdown = (index: number) => {
    setOpenMenuId((prevId) => (prevId === index ? null : index));
  };

  // Navigation
  const navigation = [
    {
      id: 1,
      title: "Home",
      icon: <CiHome />,
      link: "#",
    },
    {
      id: 2,
      title: "Payments",
      icon: <MdOutlinePayments />,
      link: "#",
    },
    {
      id: 3,
      title: "Customers",
      icon: <HiOutlineUsers />,
      link: "#",
      subMenu: true,
      child: [
        {
          id: 1,
          childtitle: "All Customers",
          childlink: "all-customers",
        },
        {
          id: 2,
          childtitle: "Add Customers",
          childlink: "add-customers",
        },
        {
          id: 3,
          childtitle: "Edit Customers",
          childlink: "edit-customers",
        },
      ],
    },
    {
      id: 4,
      title: "Reports",
      icon: <IoPieChartOutline />,
      link: "#",
      subMenu: true,
      child: [
        {
            id: 1,
          childtitle: "All Reports",
          childlink: "all-reports",
        },
        {
            id: 3,
          childtitle: "Add Reports",
          childlink: "add-reports",
        },
        {
            id: 3,
          childtitle: "Edit Reports",
          childlink: "edit-reports",
        },
      ],
    },
    {
      id: 5,
      title: "Connections",
      icon: <CiGrid41 />,
      link: "#",
      subMenu: true,
      child: [
        {
            id: 3,
          childtitle: "All Connections",
          childlink: "all-connections",
        },
        {
            id: 3,
          childtitle: "Add Connections",
          childlink: "add-connections",
        },
        {
            id: 3,
          childtitle: "Edit Connections",
          childlink: "edit-connections",
        },
      ],
    },
    {
      id: 6,
      title: "Developers",
      icon: <HiOutlineCodeBracketSquare />,
      link: "#",
      subMenu: true,
      child: [
        {
            id: 3,
          childtitle: "All Developers",
          childlink: "all-developers",
        },
        {
            id: 3,
          childtitle: "Add Developers",
          childlink: "add-developers",
        },
        {
            id: 3,
          childtitle: "Edit Developers",
          childlink: "edit-developers",
        },
      ],
    },
    {
      id: 7,
      title: "Docs",
      icon: <IoBookOutline />,
      link: "#",
      subMenu: true,
      child: [
        {
            id: 3,
          childtitle: "All Docs",
          childlink: "all-docs",
        },
        {
            id: 3,
          childtitle: "Add Docs",
          childlink: "add-docs",
        },
        {
            id: 3,
          childtitle: "Edit Docs",
          childlink: "edit-docs",
        },
      ],
    },
  ];

  return (
    <>
      <aside className="h-[100vh] bg-[#F9FAFB] flex flex-col justify-between overflow-hidden w-[100%]">
          <div>
            <div className="p-5 flex items-center">
              <Link href={"/"} className="bg-white w-10 h-10 mr-5 flex justify-center items-center">R</Link>
              <span>Clush Sports</span>
            </div>
            <nav>
              <ul className="space-y-2 w-full p-3">
                {navigation &&
                  navigation.map((item, index) => (
                    <li key={item.id} className="group">
                      <div
                        onClick={() => handleForDropdown(index)}
                        className="cursor-pointer flex items-center text-sm py-1 font-semibold group-hover:bg-[#f5f6f8]">
                        {/* {item.icon} */}
                        <span className="ml-2 group-hover:text-blue-800">{item.title}</span>
                      </div>
                      <ul
                        className={`${
                          openMenuId === index ? "h-auto" : "h-0 overflow-hidden"
                        } ml-2 text-sm transition-all duration-1000`}
                      >
                        {item.subMenu &&
                          item.child?.map((submenu) => (
                            <li key={submenu.id} className="py-2 border-t border-t-gray-100 last:border-b last:border-b-gray-100">
                              <Link href={submenu.childlink}>
                                <span className="hover:font-semibold transition-all duration-500 pl-2">{submenu.childtitle}</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-sm mb-2">Account</h2>
            <ul className="text-sm">
                <li className="flex items-center mb-2"><IoNotificationsOutline className="mr-2"/>Notifications</li>
                <li className="flex items-center"><TbSettings2 className="mr-2"/>Settings</li>
            </ul>
          </div>

      </aside>
    </>
  );
};

export default SideBar;
