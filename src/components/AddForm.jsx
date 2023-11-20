import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { insertBook } from "../Store/bookSlice";



const Addform = () => {
  const {islogged} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  const title = useRef(null)
  const price = useRef(null)
  const Desc = useRef(null)
  
const reset =()=>{
  title.current.value=null,
  price.current.value=null,
  Desc.current.value=null
  
}

const insertHandler= (e)=>{
  e.preventDefault();
  const data = {
    title:title.current.value,
    price:price.current.value,
    description:Desc.current.value
  }
  dispatch(insertBook(data))
  reset()
}
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form  onSubmit={insertHandler}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={Desc}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={islogged? false:true} >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;