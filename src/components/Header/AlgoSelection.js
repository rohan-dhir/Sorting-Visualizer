import React from 'react';
import { Nav } from 'react-bootstrap';

const AlgoSelection = ({
    onClick,
    algorithmName,
}) => {


    return (
        <>
            <Nav.Link className="nav-link" onClick={onClick}>{algorithmName}</Nav.Link>
        </>
    );
};

export default AlgoSelection;