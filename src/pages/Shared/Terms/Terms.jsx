import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aperiam laudantium doloribus ea alias commodi consectetur ipsam ut odit neque illum impedit facere repellat esse laborum, consequuntur deleniti minima! Amet!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;