import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../Modal/Modal.css'


function PopupModal() {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false);
        localStorage.setItem('maiorIdade', 'true')
    }

    const handleShow = () => setShow(true)

    useEffect(() => {
        const maiorIdade = localStorage.getItem('maiorIdade')
        if (!maiorIdade) {
            handleShow()
        }        
    }, [])

    return (
        <>
            <div>
                <Modal show={show} onHide={handleClose}>                    
                    <figure className="logo">
                        <img alt="age-gate-logo" src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"/>
                    </figure>
                    <Modal.Body className="texto-modal">Você tem 18 anos ou mais?</Modal.Body>
                    <Modal.Footer className='flex-row'>
                        <Button id="btn-nao" variant="secondary" onClick={handleClose}>
                            Não
                        </Button>
                        <Button id="btn-sim" variant="primary" onClick={handleClose}>
                            Sim
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default PopupModal