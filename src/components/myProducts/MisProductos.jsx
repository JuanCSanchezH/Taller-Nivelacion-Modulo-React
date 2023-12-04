import React, { useEffect, useState } from 'react'
import { getDataFromAPI } from '../../services/productsServices';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MisProductos = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getDataFromAPI().then((response) => setProducts(response))
    },[])

  return (
    <>
        <h1 style={{textAlign: 'center', margin: '30px'}}>Mis Productos</h1>
        <Container>
            <Row>
                {products.length ? products.map( product => 
                <Col key={product.id} style={{ 
                        marginBottom: '20px', 
                        display: 'flex', 
                        justifyContent: 'center'
                    }}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <h6>{product.category}</h6>
                            <Card.Text style={{
                                    overflow: 'hidden', 
                                    height: '75px',
                                    textOverFlow: 'ellipsis', 
                                }}>
                                {product.description}
                            </Card.Text>
                            <Link to={`/miproducto/${product.id}`}>
                                <Button variant="primary">Detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card> 
                </Col>)
                : <h4 style={{textAlign: 'center'}}>Cargando...</h4> }
            </Row>
        </Container>
    </>
  )
}

export default MisProductos