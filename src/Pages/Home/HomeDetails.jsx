import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import database from '../../firebase';
// import { helpData, offerHelpData } from '../../utils/data';
import OfferModal from './OfferModal';
import UserDetailsModal from './UserDetailsModal';

const HomeDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  // const selectedItem =
  //   helpData.find(item => item.id === parseInt(id)) ||
  //   offerHelpData.find(item => item.id === parseInt(id));

  // if (!selectedItem) {
  //   return <div>Item not found</div>;
  // }

  const showModalHandler = () => {
    setShowModal(true);
  };

  const showUserDetailsModalHandler = () => {
    setShowUserDetailsModal(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      const helpRef = ref(database, 'help');
      const offerHelpRef = ref(database, 'offerHelp');

      const fetchDataFromRef = (dataRef) => {
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          if (data) {
            const dataArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
            const selectedItemFromData = dataArray.find((item) => item.id === parseInt(id));
            if (selectedItemFromData) {
              setSelectedItem(selectedItemFromData);
            } else {
              console.log('Item not found');
            }
          }
        });
      };

      fetchDataFromRef(helpRef);
      fetchDataFromRef(offerHelpRef);
    };

    fetchData();
  }, [id]);


  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 px-20 flex flex-col gap-24 bg-slate-50 h-screen">
      <div className="flex items-center gap-10">
        <Link onClick={showUserDetailsModalHandler}>
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="rounded-full object-cover h-16 w-16"
        />
        </Link>
        <h2 className="text-2xl font-medium mb-4 text-[40px] font-['Inter']">{selectedItem.title}</h2>
      </div>
      {showUserDetailsModal && <UserDetailsModal user={selectedItem} onClose={() => setShowUserDetailsModal(false)} />}
      <div className='text-stone-500 text-[20px] font-medium'>
        <p className='mb-10'>{selectedItem.title}</p>
        <p className="">{selectedItem.fullDetails}</p>
      </div>
      <div className='inline-flex gap-8'>
        <button className='w-[140px] h-[3em] rounded-[10px] border-2 border-pink-400 text-pink-950 text-lg'>Contact</button>
        <button className='w-[140px] h-[3em] rounded-[10px] bg-pink-400 text-pink-950 text-lg' onClick={showModalHandler}>Offer help</button>
      </div>

      {showModal && <OfferModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default HomeDetails;
