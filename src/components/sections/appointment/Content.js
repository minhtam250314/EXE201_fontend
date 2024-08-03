import { Link, withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";

const Contacticons = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("Id");

  useEffect(() => {
    // Gọi API GET để lấy dữ liệu
    axios
      .get(`https://localhost:7173/api/v1/booking/getBookingByCustomerId/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleButtonClick = (bookingId) => {
    // Gọi API PUT
    axios
      .put(
        `https://localhost:7173/api/v1/booking/setStatusComplete/${bookingId}`
      )
      .then((response) => {
        console.log("Update successful", response);
        // Cập nhật lại dữ liệu sau khi PUT thành công nếu cần
        axios
          .get(`https://localhost:7173/api/v1/booking/getBookingByCustomerId/${id}`)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('There was an error fetching the updated data!', error);
          });
          alert("Cập nhật trạng thái booking thành công!");
      })
      .catch((error) => {
        console.error("There was an error updating the data!", error);
        alert("Lỗi không thể cập nhật!");
      });
  };

  const statusRenderer = (status) => {
    switch (status) {
      case 1:
        return "Approved";
      case 2:
        return "Success";
      case 3:
        return "Fail";
      default:
        return "Unknown";
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "bookingId", // Tên trường trong dữ liệu
      },
      //   {
      //     Header: "SERVICE PACKAGE",
      //     accessor: "packageId",
      //   },
      {
        Header: "DESCRIPTION",
        accessor: "description",
      },
      {
        Header: "START TIME",
        accessor: "startTime",
      },
      {
        Header: "HOURS",
        accessor: "hours",
      },
      {
        Header: "TOTAL PRICE",
        accessor: "totalPrice",
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ cell: { value } }) => statusRenderer(value),
      },
      {
        Header: "ACTION",
        Cell: ({ row: { original } }) => (
          <button onClick={() => handleButtonClick(original.bookingId)}>
            Set Complete
          </button>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacticons;