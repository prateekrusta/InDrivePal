import React, { useState } from 'react';
import Modal from 'react-modal';

const MyModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '250px',
                        height: '200px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between', // Align content at flex-end and between
                        padding: '20px',
                    },
                }}
            >
                <div>
                    <h3 style={{ textAlign: 'left' }}>Now you pick the driver</h3>
                    <p style={{ textAlign: 'left' }}>
                        You will be recieving offers from drivers, including offers at your fare. To proceed withthe ride, you need to accept one of the suggestions.
                    </p>
                </div>
                <div >
          <p
            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer',display: 'flex', justifyContent: 'flex-end'  }}
            onClick={closeModal}
          >
            Close
          </p>
        </div>
            </Modal>
        </div>
    );
};

export default MyModal;


