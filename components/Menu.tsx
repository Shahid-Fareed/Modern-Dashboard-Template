// components/Menu.tsx
"use client";
import { useState } from "react";
import {
  IoPieChartOutline,
  IoBookOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdDeveloperMode, MdOutlinePayment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

interface ChildItem {
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

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  // Open Navigation Dropdown
  const handleForDropdown = (index: number) => {
    if (menuOpen === index) {
      setMenuOpen(null);
    } else {
      setMenuOpen(index);
    }
  };

  // Navigation
  const navigation: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        icon: <IoHomeOutline />,
        link: "#",
      },
      {
        id: 2,
        title: "Payments",
        icon: <MdOutlinePayment />,
        link: "#",
      },
      {
        id: 3,
        title: "Customers",
        icon: <FaRegUser />,
        link: "#",
        subMenu: true,
        child: [
          {
            childtitle: "All Customers",
            childlink: "all-customers",
          },
          {
            childtitle: "Add Customers",
            childlink: "add-customers",
          },
          {
            childtitle: "Edit Customers",
            childlink: "edit-customers",
          }
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
            childtitle: "All Reports",
            childlink: "all-reports",
          },
          {
            childtitle: "Add Reports",
            childlink: "add-reports",
          },
          {
            childtitle: "Edit Reports",
            childlink: "edit-reports",
          }
        ],
      },
      {
        id: 5,
        title: "Connections",
        icon: <RxDashboard />,
        link: "#",
        subMenu: true,
        child: [
          {
            childtitle: "All Connections",
            childlink: "all-connections",
          },
          {
            childtitle: "Add Connections",
            childlink: "add-connections",
          },
          {
            childtitle: "Edit Connections",
            childlink: "edit-connections",
          }
        ],
      },
      {
        id: 6,
        title: "Developers",
        icon: <MdDeveloperMode />,
        link: "#",
        subMenu: true,
        child: [
          {
            childtitle: "All Developers",
            childlink: "all-developers",
          },
          {
            childtitle: "Add Developers",
            childlink: "add-developers",
          },
          {
            childtitle: "Edit Developers",
            childlink: "edit-developers",
          }
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
            childtitle: "All Docs",
            childlink: "all-docs",
          },
          {
            childtitle: "Add Docs",
            childlink: "add-docs",
          },
          {
            childtitle: "Edit Docs",
            childlink: "edit-docs",
          }
        ],
      },
  ];

  return (
    <nav>
      <ul className="space-y-2 w-full">
        {navigation &&
          navigation.map((item, index) => (
            <li key={item.id}>
                <Link href={"/"} className="">
                    <span className="">home</span>
                </Link>

              {item.subMenu && (
                <ul
                  className={`${
                    menuOpen === index ? "block" : "hidden"
                  } bg-white rounded-lg transition-all duration-300 sm:absolute sm:left-0 sm:mt-3`}
                >
                  {item.child?.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link href={"/"} className="">
                        <span className="">{submenu.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
