import React ,{useState} from 'react'
import styles from "../InputForm/InputForm.module.css"
import {Link, useNavigate} from 'react-router-dom'
const InputForm = () => {
    const navigate = useNavigate();
    const [ name , setName] = useState("");
    const [ agree , setAgree] = useState(false);
    const [ sector , setSector] = useState("");
    const handleSubmission = (e) => {
        e.preventDefault();
    console.log( name , agree , sector );    
        navigate("/updatedForm")
      };

  return (
    <div>
    <div className={styles.myForm}>
    <h3 className={styles.title}> My Form </h3>

    <form  onSubmit = {handleSubmission} className={styles.form}>
    <label className={styles.label}>
    <p className={styles.name}>Name</p>
    <input className = {styles.input} value = {name} type="text" name="" id="" onChange = {(e)=>setName(e.target.value)}/>
    </label>

    <label className={styles.label}>
    <p className={styles.name}>Sectors</p>
    <select className = {styles.select}  name="sectors" id="sector" value={sector}  onChange = {(e)=>setSector(e.target.value)}>
    <option>Agriculture</option>
    <option>Agricule</option>
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