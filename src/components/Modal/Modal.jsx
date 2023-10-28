import Modal from 'react-modal';

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

export const Modalbox = ({ largeImg, alt, isModalOpen, closeModal }) => {
  return (
    <Modal>
      isOpen={isModalOpen}
      style={customStyles}
      <img src={largeImg} alt={alt} width="850" height="600" />
      contentLabel={alt}
      onRequestClose={closeModal}
    </Modal>
  );
};
