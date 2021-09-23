import { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './visualizer.css';

interface BarsArr {
  arr: Array<Number>,
  width: number
}

const PRIMARY_COLOUR = '#0ac476';

const Bars: FC<BarsArr> = ({ arr, width }) => (
        <div>
        <Container className='arr-container'>
          <Row className='justify-content-sm-center'>
            <Col style={{
              margin: 'auto', 
              display: 'block', 
              textAlign: 'center'
            }}>
          
              {arr.map((value, index) =>(
              
                <div
                    className='arr-bar'
                    key={index}
                    style={{
                      backgroundColor: PRIMARY_COLOUR,
                      height: `${value}px`,
                      width: `${width}px`
                    }}>
                  </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
)

export default Bars
