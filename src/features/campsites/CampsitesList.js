
import {useSelector} from 'react-redux';
import { Col, Row } from 'reactstrap'; // why?
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
const campsites = useSelector(selectAllCampsites); {/*do not invoke the function, pass the function itself and not its result to the useSelector.*/}
console.log('campsites:', campsites);

return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;