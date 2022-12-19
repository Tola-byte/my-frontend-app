import React ,{useState , useEffect} from 'react'
import styles from "../InputForm/InputForm.module.css"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const InputForm = () => {
    const navigate = useNavigate();
    const [ name , setName] = useState("");
    const [ agree , setAgree] = useState(false);
    const [ sector , setSector] = useState("");
    const [ post , setPost] = useState("");

    const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
    const HandleSubmission = (e) => {
        e.preventDefault();
      const dataToBePosted =  {
     // name : name,
      sector: sector,
      agree: agree,
    };
      
        
         axios.post("https://my-backend-code-production.up.railway.app/create-user", dataToBePosted)
       .then(res => console.log(res))
      .catch(err => console.log(err));

       navigate("/updatedForm")
      
      }
    
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
  return (
    <div>
    <div className={styles.myForm}>
    <h3 className={styles.title}> My Form </h3>

    <form  onSubmit = {HandleSubmission} className={styles.form}>
    <label className={styles.label}>
    <p className={styles.name}>Name</p>
    <input className = {styles.input} value = {name} type="text" name="" id="" onChange = {(e)=>setName(e.target.value)}/>
    </label>

    <label className={styles.label}>
    <p className={styles.name}>Sectors</p>
    <select className = {styles.select}  name="sectors" id="sector" value={sector}  onChange = {(e)=>setSector(e.target.value)}>
    {data.map((item) => {
      return  <option> {
        item.name
      }</option>
    })}
    
    </select>
    </label>

    <label className={styles.checkbox}>
    <input type="checkbox" value = {agree} onChange = {(e) => setAgree(!agree)} />
    <p  className={styles.agree}>Agree to Terms and Conditions</p>
  </label>

  <button className={styles.submit} type='Submit'>Submit</button>
    </form>
    </div>
  

    </div>
  )
}

export default InputForm