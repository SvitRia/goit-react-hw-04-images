import { Modalbox } from 'components/Modal/Modal';
import { useState } from 'react'
// import Modal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';
import {
  GallaryItem,
  GallaryImage,
  ModalStyle,
  ModalStyleContent,
  BtnClose
} from './ImageGalleryItem.styled';

// Modal.setAppElement('#root');

export const GalleryItem = (miniImg, originalImg, tags) => {
  
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
            src={miniImg}
            alt={tags}
            onClick={openModal}
            width="300"
          />

          <ModalStyle  isOpen={isOpenModal} onRequestClose={closeModal} >
            <ModalStyleContent >
              <Modalbox isOpenModal={isOpenModal} largeImg={originalImg} alt={tags} onRequestClose={closeModal} />
              <BtnClose onClick={closeModal} ><HiOutlineX /></BtnClose>
            </ModalStyleContent>
             
          </ModalStyle>
        </GallaryItem>
      </>
    );
  }



