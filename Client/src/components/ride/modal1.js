import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import '../../assets/css/buttons.css';

const MyModal = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='modal1-outer'>
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
                        overflowY: 'hidden',
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
        <NavLink to="/ride/find-driver" className="no-underline">
            <p className='modal1-p' style={{ color: 'black', cursor: 'pointer',display: 'flex', justifyContent: 'flex-end'  }}
            onClick={closeModal}>
                Close
            </p>
        </NavLink>
        </div>
            </Modal>
        </div>
    );
};

export default MyModal;


