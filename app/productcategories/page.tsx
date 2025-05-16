"use client"
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import CustomTable from '@/components/CustomTable'
import Tooltip from "@/components/ui/Tooltip";
import Icon from "@/components/ui/Icon";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const columns = [
    {
      Header: "Id",
      accessor: "id",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },

    {
        Header: "Icon",
        accessor: "icon",
        Cell: (row) => {
          const imageName = row?.cell?.value;
          const imageUrl = imageName ? `http://192.168.18.140:4001/procategory_image/${imageName}` : null;
    
          return (
            <span>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Preview"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              )}
            </span>
          );
        },
      },

    {
      Header: "Title",
      accessor: "title",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },

    {
        Header: "Featured",
        accessor: "is_featured",
        Cell: (row) => {
          const featuredValue = row?.cell?.value;
    
          return (
            <span className="block w-full">
              <span
                className={`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
                    featuredValue === 1 ? "text-success-500 bg-success-500" : ""
                } 
                ${featuredValue === 0 ? "text-danger-500 bg-danger-500" : ""}
                `}
              >
                {featuredValue === 1 ? "Yes" : featuredValue === 0 ? "No" : ""}
              </span>
            </span>
          );
        },
    },

    {
        Header: "Status",
        accessor: "status",
        Cell: (row) => {
          const statusValue = row?.cell?.value;
    
          return (
            <span className="block w-full">
              <span
                className={`inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
                  statusValue === 1 ? "text-success-500 bg-success-500" : ""
                } 
                ${statusValue === 0 ? "text-danger-500 bg-danger-500" : ""}
                `}
              >
                {statusValue === 1 ? "Published" : statusValue === 0 ? "Draft" : ""}
              </span>
            </span>
          );
        },
    },
   
        
    {
      Header: "action",
      accessor: "action",
      Cell: (row) => {

        const handleDelete = async () => {
          try {
            await axios.get(`http://192.168.18.140:4001/api/v1/category/delete/${row.row.original.id}`);
             // Update the table data by removing the deleted item
             setData(prevData => prevData.filter(item => item.id !== row.row.original.id));
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        };
        return (
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Tooltip content="View" placement="top" arrow animation="shift-away">
              <button className="action-btn" type="button">
                <Icon icon="heroicons:eye" />
              </button>
            </Tooltip>
            <Tooltip content="Edit" placement="top" arrow animation="shift-away">
              <button className="action-btn" type="button">
                <Icon icon="heroicons:pencil-square" />
              </button>
            </Tooltip>
            <Tooltip
              content="Delete"
              placement="top"
              arrow
              animation="shift-away"
              theme="danger"
            >
              <button className="action-btn" type="button" onClick={handleDelete}>
                <Icon icon="heroicons:trash" />
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];


function page() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'API_ENDPOINT' with the actual API endpoint you want to fetch data from
        const response = await axios.get('http://192.168.18.140:4001/api/v1/category');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper grid grid-cols-6">
        <SideBar />
        <div className="col-start-2 col-span-5">
          <TopBar />
          <main className="grid grid-cols-1 lg:grid-cols-2 p-10">
            <h2 className="w-full p-3 bg-[#F9FAFB] text-[16px] font-medium col-span-2 flex items-center">
              <button className="mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M10.656 1.34399L2.688 9.31199L10.656 17.28L9.312 18.624L0 9.31199L9.312 -7.62939e-06L10.656 1.34399Z" fill="#272727"/>
                  <path d="M1.34375 10.2724L1.34375 8.35243L17.6637 8.35243V10.2724L1.34375 10.2724Z" fill="#272727"/>
                </svg>
              </button>
              Add Product Category
            </h2>
            <div className="col-span-2">
                <div className="col-span-2">
                    <CustomTable  columns={columns} data={data} title="Product Categories" />
                </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default page