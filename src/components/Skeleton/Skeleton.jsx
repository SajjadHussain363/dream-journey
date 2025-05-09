import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container, Row, Col } from 'react-bootstrap';

const SkeletonComponent = () => {
    return (
       <>
       <div className=''>
       <Container className='SkeletonComponentWrapper'>
          <Row className="">
            <Col lg={12} className="text-center mb-4">
              <Skeleton height={50} width="60%" className="mb-3" />
              <Skeleton height={20} width="30%" className="mb-3" />
            </Col>
            <Col lg={12} className="mb-4">
              <Skeleton height={400} className="mb-3" />
            </Col>
            <Col lg={12}>
              <Skeleton count={5} height={20} className="mb-2" />
            </Col>
          </Row>
        </Container>
       </div>
       </>
    );
};

export default SkeletonComponent;
