import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { helpData, offerHelpData } from '../../utils/data';
import OfferModal from './OfferModal';

const HomeDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  const selectedItem =
    helpData.find(item => item.id === parseInt(id)) ||
    offerHelpData.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <div className="py-8 px-20 flex flex-col gap-24">
      <div className="flex items-center gap-10">
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="rounded-full object-cover h-16 w-16"
        />
        <h2 className="text-2xl font-medium mb-4 text-[40px] font-['Inter']">{selectedItem.title}</h2>
      </div>
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
