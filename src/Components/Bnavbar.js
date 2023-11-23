import React,{useState} from 'react'
import Logo from './Assets/LOGO.png'
import './Assets/Cfile.css';
import{Input} from 'reactstrap';
const Bnavbar = ({category,setChildData,childData,products,setproducts,product}) => {
  const [inputValue, setInputValue] = useState('');
  const[Value,SetValue]=useState('');
  const handleInputChange = (e) => {
    console.log(e);
    //const value = e.target.value;
    console.log(childData);
    ///setInputValue(value);
    //console.log(value);
    setChildData(e);
    console.log(products);
    const filtered = products.filter((product) => product.category === childData);
        if(filtered){
        console.log(filtered);
        setproducts(filtered);
      }
      else{
        setproducts(products);
      }
  };
  const handleTitleChange = (e) => {
    const selectedTitle = e.target.value;

    const selectedProduct = product.filter(productu => productu.title === selectedTitle);
    setproducts(selectedProduct);
  };

  const handleInput=(e)=>{
    const value = e.target.value;
    console.log(products);
    SetValue(value);
    const filtered = products.filter((product) =>
    //product.title===value
    product.title.toLowerCase().startsWith(Value.toLowerCase())
    );
    if(filtered){
    console.log(filtered);
    setproducts(filtered);
  }
  else
    {
    setproducts(products);
    }
  }
  return (
    <div className='Rcontainer'>
      <div style={{ width: '50%', display: 'flex' }}>
        {console.log(category)}
        <img style={{ marginRight: '300px', marginLeft: '47px' }} src={Logo} alt="" ></img>
        {/* <input
        onChange={handleInput}
          placeholder='Search food...'
          className='search'
        ></input> */}
        <Input
                id="title"
                name="title"
                type="select"
                onChange={handleTitleChange}
        >
        <option value="" >plz select title</option>
        {product
        ? product.map((product, index) => (
        <option key={index} value={product.title}>
          {product.title}
        </option>
        ))
      : <h1>No information exists</h1>
      }
        </Input>
      </div>
      {/* <div style={{display:'inline',width:'50%',marginRight:'760px'}}>
                </div> */}
      <div className='Rbcontainer' style={{ width: '100%', paddingBottom: '10px' }}>
      {category.map((cat) => (
         <button key={cat} className='Rbutton' onClick={(e)=>handleInputChange(cat)}>{cat}</button>
      ))}
      </div>
    </div>
  );
}

export default Bnavbar
