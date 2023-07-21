import { useState, useEffect} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {useSpring, animated} from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const[toggle, setToggle]=useState(false);

    const animatedStyle = useSpring({ //each of these properties takes objects for values
            opacity : toggle ? 1:0, // 1st animation: fade in opacity change from 0 to 100%
            transform: toggle ? 'scale (1,1)' : 'scale(1,0)', // 2nd animation: change size from 0 to 100% (width, height)
            config: {duration: 500 } // 1/2 sec
}); 

    useEffect(() => { //animations applied when display card components are mounted to the page, not when an update causes them to re-render
        setToggle(true); //perform side effect 
    }, []); // run componment on 1st run only

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} /> // curly braces around image and name since they are both JavaScript variables.
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;