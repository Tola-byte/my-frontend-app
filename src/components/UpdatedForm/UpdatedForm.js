import React from 'react'
import styles from "../UpdatedForm/UpdatedForm.module.css"
const UpdatedForm = () => {
  return (
    <div>
    <div className={styles.myForm}>
    <h3 className={styles.title}> My Form </h3>

    <form className={styles.form}>
    <label className={styles.label}>
    <p className={styles.name}>Name</p>
    <input className = {styles.input} type="text" name="" id="" />
    </label>

    <label className={styles.label}>
    <p className={styles.name}>Sectors</p>
    <select className = {styles.select}  name="sectors" id="sector">
    <option value="">Agriculture</option>
    </select>
    </label>

    <label className={styles.checkbox}>
    <input type="checkbox" />
    <p  className={styles.agree}>Agree to Terms and Conditions</p>
  </label>

  <button className={styles.submit} type='Submit'>Submit</button>
    </form>
    </div>
  

    </div>
  )
}

export default UpdatedForm