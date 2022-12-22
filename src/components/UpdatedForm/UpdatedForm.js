import React , {useState , useEffect , useRef} from 'react'
import { useId } from '../../Contexts/FormContext'
import axios from 'axios'
import styles from "../UpdatedForm/UpdatedForm.module.css"

const UpdatedForm = () => {
  const [state] = useId()
  
  const [ agree , setAgree] = useState(true);
  const [ sector , setSector] = useState("");
  const [ data , setData ] = useState([])
  const [loading , setLoading ] = useState(true)

  


  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`https://my-backend-code-production.up.railway.app/user?userID=${state.id}`);
        setData(response);

      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData()
  } , [state.id]);
  console.log(state)
  const [ name , setName] = useState(state.names);
  const HandleSubmission = (e) => {
    e.preventDefault();
  const dataToBePosted =  {
  userID : state.id,
  name : name,
  sector: sector,
  agreement: agree,
};

     axios.post("https://my-backend-code-production.up.railway.app/update-user", dataToBePosted)
   .then(res => {
    console.log(res.data)
    
    console.log(dataToBePosted)
   })
  .catch(err => console.log(err));

  
  
  }
  console.log(data?.name)
  return (
    <div>
    <div className={styles.myForm}>
    <h3 className={styles.title}> Edit My Form </h3>

    <form className={styles.form}>

    <label className={styles.label}>
    <p className={styles.name}>UserID</p>
    <input className = {styles.input} type="text" name="" id="" value={state.id} readOnly/>
   
    </label>

    <label className={styles.label}>
    <p className={styles.name}>Name</p>
    <input className = {styles.input} type="text" value = {name} id="" onChange = {(e)=>setName(e.target.value)}  />
   
    </label>


    <label className={styles.label}>
    <p className={styles.name}>Sectors</p>
    <select className = {styles.select} name="sector" value = {sector} onChange = {(e) => setSector(e.target.value)} id = "sector" required>
    <option value="63a2a5477bf2ac8d02bfb98c">Agriculture</option>
    <option value="63a2a4d87bf2ac8d02bfb989">Engineering</option>
    <option value="63a244197bf2ac8d02bfb988">Arts</option>
    <option value="63a2a4f97bf2ac8d02bfb98a">Social Sciences</option>
    <option value="63a2a5167bf2ac8d02bfb98b">Sciences</option>
    
    </select>
    </label>

    <label className={styles.checkbox}>
    <input type="checkbox" value = {agree} onChange = {(e) => setAgree(!agree)} />
    <p  className={styles.agree}>Agree to Terms and Conditions</p>
  </label>

  <button className={styles.submit} onClick = {HandleSubmission} type='Submit'>Update</button>
    </form>
    </div>
  

    </div>
  )
}

export default UpdatedForm