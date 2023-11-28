import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 2;

const HomeContent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [offerHelpData, setOfferHelpData] = useState([]);
  const [seekHelpData, setSeekHelpData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase for offerHelp
    const offerHelpRef = ref(database, "offerHelp");
    onValue(offerHelpRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const offerHelpArray = Object.values(data);
        setOfferHelpData(offerHelpArray);
      }
    });

    // Fetch data from Firebase for seekHelp
    const seekHelpRef = ref(database, "seekHelp");
    onValue(seekHelpRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const seekHelpArray = Object.values(data);
        setSeekHelpData(seekHelpArray);
      }
    });
  }, []);

  const offerHelpDataSlice = offerHelpData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const seekHelpDataSlice = seekHelpData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-4 md:py-8 md:px-16">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold mb-4">Need help</h2>
          <div className="grid gap-4">
            {seekHelpDataSlice.map((item, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-md p-6 md:w-[500px]">
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
              <div key={index} className="card bg-white rounded-lg shadow-md p-6 md:w-[500px]">
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
        pageCount={Math.ceil(offerHelpData.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex justify-center gap-4 text-pink-700 text-2xl capitalize font-extrabold p-4"
      />
    </>
  );
};

export default HomeContent;
