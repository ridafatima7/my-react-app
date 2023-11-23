import React, { useEffect, useState } from 'react';
import ProductCard from './Bproject'; 
import {Container,Row} from 'reactstrap'
import backgroundImage from './Assets/bg.png';
import Bbar from './Bnavbar'; 

const Products = () => {
    const [childData, setChildData] = useState('');
    const handleChildData = (data) => {
        setChildData(data);
      };
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop:'-6.8px',
        alignItems: 'center',
      };
    const [products,setproducts]=useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [record,setRecord]=useState([]);
    const FilCat=()=>{
        const filtered = record.filter((product) => product.category === childData);
        if(filtered){
        console.log(filtered);
        setproducts(filtered);
      }
      else{
        setproducts(record);
      }
    }
    const getCat=()=>{
     var category=new Set();
        record.forEach((p)=>{
            category.add(p.category);
        })
        const uniqueCategories=Array.from(category);
        console.log(uniqueCategories);
        return uniqueCategories;
    }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then((response)=>response.json())
        .then((data)=>{
            setproducts(data);
            setRecord(data);
           // FilCat();
        })
        getCat();
    },[]);
  var cat=getCat();
  
  return (
    <>
    <Bbar category={cat} setChildData={setChildData} childData={childData} products={record} setproducts={setproducts} product={record}/>
      <Container fluid className="px-0 pb-5" style={containerStyle}>
      
       <Row  style={{marginLeft: 'calc(6 * var(--bs-gutter-x))',marginBottom:'-20px' }}>
            {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
        ))}
    </Row>
    </Container>
    </>
  )
}

export default Products

