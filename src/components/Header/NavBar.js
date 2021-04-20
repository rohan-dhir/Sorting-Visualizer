import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import AlgoSelection from './AlgoSelection';

const NavBar = ({
    onClick,
    onReset,
}) => {

    const algorithms = [
        'Merge Sort'
    ];
    return (
        <>
            <Navbar className="nav" variant="dark">
                <Navbar.Brand href="#">Sorting Visualizer</Navbar.Brand>
                <Nav className="mr-auto">

                    {algorithms.map((algorithm) => (
                        <AlgoSelection onClick={onClick} algorithmName={algorithm} /> 
                    ))}
                    
                </Nav>
                <Button className="btn" variant="outline-info" onClick={onReset}>Reset Array</Button>
            </Navbar>
        </>
    );
};

export default NavBar;