import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { helpData, offerHelpData } from "../../utils/data";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 2;

const HomeContent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const helpDataSlice = helpData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );
  const offerHelpDataSlice = offerHelpData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="flex justify-between px-20 py-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Need help</h2>
          <div className="grid gap-4">
            {helpDataSlice.map((item, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-md p-6">
                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.description}</p>
                <Link to={`/home/${item.id}`}>
                  <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                    View details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Offer help</h2>
          <div className="grid gap-4">
            {offerHelpDataSlice.map((item, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-md p-6">
                <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.description}</p>
                <Link to={`/home/${item.id}`}>
                  <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                    View details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(helpData.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex justify-center gap-4 text-pink-700 text-2xl capitalize font-extrabold"
      />
    </>
  );
};

export default HomeContent;
