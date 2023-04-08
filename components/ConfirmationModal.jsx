import React from 'react';
import Modal from 'react-modal';

if (typeof window !== 'undefined') {
    // client-side-only code
    Modal.setAppElement('#__next');
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 600
    },
};

const ConfirmationModal = (props) => {
    const { isOpen, setIsOpen, afterOpen = () => { }, heading = "", content = "", handleOk = () => { } } = props;

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                // appElement={document.getElementById('app')}
                isOpen={isOpen}
                onAfterOpen={afterOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={heading}
            >
                <div className='row mb-2'>
                    <h6 className='col-10'>{heading}</h6>
                    <button className='col-2 btn btn-danger' onClick={closeModal}>X</button>
                </div>
                <div>{content}</div>
                <div className='row mt-5 justify-content-center'>
                    <button className='col-4 btn btn-primary mx-3' onClick={() => handleOk()}>Sure</button>
                    <button className='col-4 btn btn-secondary mx-3' onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;