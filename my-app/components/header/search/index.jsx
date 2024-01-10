'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Search({setShown, shown}) {
  const [search, setSearch] = useState("") 


  const handleClick = (e) => {
     setShown(false)      
  }

  const handleClose = () =>{
     if(!shown){
       setShown(true)
     }
  
  }


  const handleChange = (e)=>{
      setSearch(e.target.value)
  }



  return (
    <div className={ `${styles.searchContainer} ${shown ? styles.contractFilter : styles.filterLength } ` }  >
        <span className={styles.searchIconContainer}><SearchIcon style={{ color: '#4F4F4F' }} /></span>
       <input 
         type="text" 
         value={search}  
         style={{ width: shown ? '' : '100%' }}
         placeholder='SEARCH'
         onChange={handleChange}
         onClick={handleClick} />
         {
          !shown && <span onClick={handleClose} className={styles.cancelIconContainer}><CloseIcon style={{ color: '#4F4F4F' }} /></span>
         } 
    </div>
  )
}

export default Search;