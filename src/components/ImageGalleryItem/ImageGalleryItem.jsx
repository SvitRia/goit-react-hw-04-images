import { ModalBox } from 'components/Modal/Modal';
import { useState } from 'react'
// import Modal from 'react-modal';
//  import { HiOutlineX } from 'react-icons/hi';
import {
  GallaryItem,
  GallaryImage,

  // ModalStyleContent,
  //  BtnClose
} from './ImageGalleryItem.styled';

// Modal.setAppElement('#root');

export const GalleryItem = ({ mini, large, alt }) => {
  
  const [isOpenModal, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal( true );
  };

  const closeModal = () => {
    setOpenModal(false);
  };

    return (
      <>
        <GallaryItem >
          <GallaryImage
            src={mini}
            alt={alt}
            onClick={openModal}
            width="300"
          />
           {/* <ModalStyle isOpen={isOpenModal} onRequestClose={closeModal} > */}
          {/* <ModalStyleContent >  */}
          
          {isOpenModal && <ModalBox isModalOpen={isOpenModal} large={large} alt={alt} onCloseModal={closeModal} />}
          
             {/* <BtnClose onClick={closeModal} ><HiOutlineX /></BtnClose>
            </ModalStyleContent> */}
              {/* </ModalStyle> */}
        </GallaryItem>
      </>
    );
  }



