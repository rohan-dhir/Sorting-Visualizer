import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/MergeSort';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './visualizer.css';

const ANIMATION_SPEED_MS = 1;
const ARRAY_BARS = 310;
const PRIMARY_COLOR = '#0ac476';
const SECONDARY_COLOR = 'red';

const Visualizer = () => {
    const [arr, setArr] = useState([]);
    
    useEffect(() => { 
        resetArray();
    }, []);

    const resetArray = () => {
        const arr = []
        for (let i = 0; i < ARRAY_BARS; i++) {
            arr.push(randomIntegers(5, 730))
        }

        setArr(arr)
    };

    const randomIntegers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(arr);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('arr-bar');
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIndex, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    const NavBar = () => {
        return (
            <>
                <Navbar className="nav" variant="dark">
                    <Navbar.Brand href="#">Sorting Visualizer</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-link" onClick={() => mergeSort()}>Merge Sort</Nav.Link>
                    </Nav>
                    <Button className="btn" variant="outline-info" onClick={() => resetArray()}>Reset Array</Button>
                </Navbar>
            </>
        );
    }

    return (
        <> 
           <NavBar />
            <div className="arr-container">
                {arr.map((value, index) => (
                    <div
                    className="arr-bar"
                    key={index}
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`
                        }}>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Visualizer;