import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useId } from '../../Contexts/FormContext'
import styles from "../InputForm/InputForm.module.css"


const InputForm = () => {
    const  [, dispatch] = useId();
    const navigate = useNavigate();
    const [ name , setName] = useState("");
    const [ agree , setAgree] = useState(false);
    const [ sector , setSector] = useState("");

    const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://my-backend-code-production.up.railway.app/sectors');
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  } , []);

    const HandleSubmission = (e) => {
        e.preventDefault();
      const dataToBePosted =  {
      name : name,
      sector: sector,
      agreement: agree,
    };
      console.log(dataToBePosted)
        
         axios.post("https://my-backend-code-production.up.railway.app/create-user", dataToBePosted)
       .then(res => {
        dispatch({
          type: "ADD_USER_ID",
          payload: {
            _id: res.data.newUser._id,
            name: res.data.newUser.name
          }
        })
        console.log(res.data)
        console.log(dataToBePosted)
        navigate("/updatedForm")
       })
      .catch(err => console.log(err));

      
      
      }
    

      console.log(data);
  return (
    <div>
    <div className={styles.myForm}>
    <h3 className={styles.title}> My Form </h3>

    <form  onSubmit = {HandleSubmission} className={styles.form}>
    <label className={styles.label}>
    <p className={styles.name}>Name</p>
    <input className = {styles.input} value = {name} type="text" name="" id="" onChange = {(e)=>setName(e.target.value)} required/>
    </label>

    <label className={styles.label}>
    <p className={styles.name}>Sectors</p>
    <select className = {styles.select}  name="sector" id = "sector" onChange = {(e)=>setSector(e.target.value)} required>
    <option value="" disabled> </option>
    {data.map((item , id) => {
      return <option value={item._id}> {item.name}</option>
    })}
    
    
    </select>
    </label>

    <label className={styles.checkbox}>
    <input type="checkbox" value = {agree} onChange = {(e) => setAgree(!agree)} required />
    <p  className={styles.agree}>Agree to Terms and Conditions</p>
  </label>

  <button className={styles.submit} type='Submit'>Submit</button>
    </form>
    </div>
  

    </div>
  )
}

export default InputForm