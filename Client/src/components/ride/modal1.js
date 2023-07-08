import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

const MyModal = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Modal
                isOpen={modalOpen}
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
                        padding: '30px',
                        border: '4px solid #A7E92F',
                    },
                }}
            >
                <div>
                    <h3 style={{ textAlign: 'left', fontWeight:'bold' }}>Now you pick the driver</h3>
                    <p style={{ textAlign: 'left', }}>
                    You will be recieving offers from drivers, including offers at your fare. To proceed withthe ride, you need to accept one of the suggestions.
                    </p>
                </div>
                <div >
          <NavLink to="/ride/find-driver"><p
            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer',display: 'flex', justifyContent: 'flex-end'  }}
            onClick={closeModal}
          >
            Close
          </p></NavLink>
        </div>
            </Modal>
        </div>
    );
};

export default MyModal;


