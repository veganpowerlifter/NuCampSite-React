import useState from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const CommentForm = ({ campsiteid }) => {

    const [modalOpen, setModalOpen] = useState(false);
    return (
        <> {/* react fragment wraps around the button and other elements*/}
            <Button onClick={() => setModalOpen(true)}>   {/* we pass the arrow function as a call back function*/}
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={()=> setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
               < ModalBody> campsite:{campsiteID}</ModalBody>
            </Modal>
        </>
    )
};

export default CommentForm;