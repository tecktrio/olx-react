import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { ref as storageRef, uploadBytesResumable,getStorage, getDownloadURL } from "firebase/storage";
import app, { db } from '../../firebase/config';
import { doc, setDoc , getFirestore,getDoc,updateDoc,deleteDoc,deleteField,collection,addDoc} from "firebase/firestore"; 

const storage = getStorage(app)
const Create = () => {
    const [progress,setprogress] = useState("")
    const [name,getname] = useState("")
    const [price,getprice] = useState("")
    const [category,getcategory] = useState("")

    async function abcd(url){
      
      console.log(url)
      var ref = collection(db,'products')
      const docRef = await addDoc(
      ref,{
        name:name,
        price:price,
        category:category,
        imageurl:url
      }
      ).then(()=>{
      alert('data added successfully')
      // nav('/login')

      }).catch((error)=>{
      alert('unsuccessuful operation, error:'+error)
      })
    }
  

  const upload = (e) =>{
    e.preventDefault()
    console.log('hi you have uploaded')
    const file = e.target[3].files[0];
    console.log(file)
     // Creating a storage reference
     const storageReference = storageRef(storage, `/files/${file.name}`);
    
     // Creating an upload task 
     const uploadTask = uploadBytesResumable(storageReference, file);
   
     // Monitoring upload progress
     uploadTask.on("state_changed", (snapshot) => {
       console.log(snapshot);
       const prog = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
       setprogress(prog)
       // render progress
     },(err)=>{
      console.log(err)
     },()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(url =>{
        console.log(url)
        abcd(url)

      })
     });


  }
  return (
<div>
      <Header />
  
        <div className="centerDiv">
          <form onSubmit={upload}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=>getname(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>getcategory(e.target.value)}

            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"  onChange={(e)=>getprice(e.target.value)}
 name="Price" />
            <br />
     
          <br />
          {/* <img alt="Posts" width="200px" height="200px" src=""></img> */}
       
            <br />
            <input type="file" name='file'/>
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
   
</div>
  );
};

export default Create;
