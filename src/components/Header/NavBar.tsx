import { FC } from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import '../visualizer.css';

interface NavInterface {
    selectAlgo: any,
    selection: string,
    reset: any,
    sort: any
  }

  let arraySize = 310;
  let animationSpeed = 1;

const NavBar: FC<NavInterface> = ({ selectAlgo, selection, reset, sort }) => {


    const sortingAlgorithms = ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"];

    const algorithm = sortingAlgorithms.map((element, index) => {
        return (
            <Dropdown.Item key={index} onClick={() => selectAlgo(element)} className= {selection === element ? 'active' : '' } >
                {element}
            </Dropdown.Item>
        )
    })

    const adjustSize = (e: any) => {
        arraySize = e;
        reset(arraySize);
    }

    const adjustSpeed = (e: any) => { 
        animationSpeed = e;
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Dropdown>
                        <Dropdown.Toggle className="dropdownToggle" variant="secondary">
                        {selection}
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            {algorithm}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className='btn' onClick={() => sort(animationSpeed)}>Sort</Button>
                   <Nav.Item className="navItem-text">
                   <h6>Size</h6>
                   </Nav.Item>
                   <Nav.Item className="navItem">
                    <input 
                        id="typeinp" 
                        type="range" 
                        min="10" max="310" 
                        
                         defaultValue={arraySize}
                        onChange={(e) => adjustSize(e.target.value)}
                        step="5"/>
                        </Nav.Item>
                        
                        <Nav.Item className="navItem-text">
                <h6>Speed (Lower is faster)</h6>
                </Nav.Item>
                <Nav.Item className="navItem">

                    <input 
                        id="typeinp" 
                        type="range" 
                        min="10" max="310" 
                        
                         defaultValue={animationSpeed}
                        onChange={(e) => adjustSpeed(e.target.value)}
                        step="5"/>
                        </Nav.Item>
                    </Nav>

                    <Nav className="ms-auto">
                        <Button onClick={() => reset(arraySize)}>Generate New Array</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
