import useState from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import {validateCommentForm, formik, ErrorMessage} from '../../utils/validateCommentForm';

const CommentForm = ({ campsiteid }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log(comment);
        setModalOpen(false);
    };

    return (
        <> {/* react fragment wraps around the button and other elements*/}
            <Button onClick={() => setModalOpen(true)}>   {/* we pass the arrow function as a call back function*/}
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                < ModalBody>
                    <Formik initialValue={{
                        validate={validateCommentForm},
                        rating,
                        author,
                        commentText: ''
                    }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </Field>
                                    <ErrorMessage name='rating'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                 < Label htmlFor='rating' >
                                 Rating
                                 </Label>
                             </FormGroup>

                        <FormGroup>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                                    <ErrorMessage name='author'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                            <Label htmlFor='author' >
                            Your Name
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Field
                            name='commentText'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                        <Label htmlFor='commentText' >
                        Comment
                    </Label>
                </FormGroup>
                <Button type='submit' color='primary'>
                    Submit
                </Button>
            </Form>
        </Formik >
               </ModalBody >
            </Modal >
        </>
    )
};

export default CommentForm;