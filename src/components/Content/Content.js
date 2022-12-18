import React, { useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Content.css';
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

var products = []

 function Posts() {
  var a = [1,2,3,4]
  const [productlist,setproductlist] = useState([])
  
  useEffect(()=>{
    async function abcd(){


      // const docRef = doc(db, "products");
      const dbref = collection(db,"products")
    
      const products = await getDocs(collection(db,'products'));
      setproductlist(products.docs.map((doc)=>({...doc.data(),id:doc.id})))
      console.log(products)
      }
      abcd()
  },[])



  return (
    <div className="postParentDiv">
      <div className="moreView">
       
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>

<div className='customcontent'>
  
{productlist.map((product)=>{
  return(
    <div className="cards">
   <div className="card">
     <div className="favorite">
       <Heart></Heart>
     </div>
     <div className="image">
       <img src={product.imageurl} alt="" />
     </div>
     <div className="content">
       <p className="rate">&#x20B9; {product.price}</p>
       <span className="kilometer">{product.category}</span>
       <p className="name"> {product.name}</p>
     </div>
     <div className="date">
       <span>10/5/2021</span>
     </div>
   </div>
 </div>
  )
   
})}
     
    
 
  
</div>
    
      </div>
    </div>
  );
}

export default Posts;
