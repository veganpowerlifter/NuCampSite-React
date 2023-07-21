import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({campsite}) => { // week 2 - we've changed all props to campsite
    const { id, image, name } = campsite;
    return (
        <Link to={`${id}`}>
        <Card>
            <CardImg
                width='100%'
                src={campsite.image}
                alt={campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    );
};

export default CampsiteCard;