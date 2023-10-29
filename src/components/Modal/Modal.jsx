import Modal from 'react-modal';
import { ModalStyle } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalBox = ({ isModalOpen, large, alt, onCloseModal }) => {
  return (
    <ModalStyle
      isOpen={isModalOpen}
      style={customStyles}
      contentLabel={alt}
      onRequestClose={onCloseModal}>
       <img src={large} alt={alt} width="850" height="600" />
    </ModalStyle>
  );
};
