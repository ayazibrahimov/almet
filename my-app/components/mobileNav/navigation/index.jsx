'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

//mui

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import styles from './styles.module.css'
import useProductData from '@/hooks/api'




const index = () => {

  const [color,setColor] = useState(1)
    const [open, setOpen] = React.useState(false);

    const { datas, loading, error } = useProductData("/static-texts");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }

   if (error) {
     return null; // or return error message, try again button, etc.
   }

   const { data } = datas || {};




    const pathname = usePathname()


    const handleLinkClick = (id) => {
        setOpen(false); // Close the drawer when a link is clicked
        setColor(id)
    };


    const handleClicked = (lang) =>{
      window.location.href = `/${lang}`
    }
    


  return (
    <React.Fragment>
    <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
      <Menu />
    </IconButton>
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: 'flex',
          justifyContent:'space-between',
          gap: 0.5,
          ml: 'auto',
          mt: 1,
          mr: 2,
        }}
      >
        {/* <Typography
          component="label"
          htmlFor="close-icon"
          fontSize="sm"
          fontWeight="lg"
          sx={{ cursor: 'pointer' }}
        >
          Close
        </Typography> */}
        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
      </Box>
      <Input
        size="sm"
        placeholder="Search"
        variant="plain"
        endDecorator={<Search />}
        slotProps={{
          input: {
            'aria-label': 'Search anything',
          },
        }}
        sx={{
          m: 3,
          borderRadius: 0,
          borderBottom: '2px solid',
          borderColor: 'neutral.outlinedBorder',
          '&:hover': {
            borderColor: 'neutral.outlinedHoverBorder',
          },
          '&::before': {
            border: '1px solid var(--Input-focusedHighlight)',
            transform: 'scaleX(0)',
            left: 0,
            right: 0,
            bottom: '-2px',
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
          },
          '&:focus-within::before': {
            transform: 'scaleX(1.2)',
          },
        }}
      />
      <List
        size="lg"
        component="nav"
        sx={{
          flex: 'none',
          fontSize: 'xl',
          paddingX:'20px',
          '& > div': { justifyContent: 'center' },
        }}
      >
        <Link  style={{display:'flex', justifyContent:'center'}} onClick={handleLinkClick.bind(null,1)}  className={ color == 1 ? 'active' : ''}    href='/'> <ListItemButton>{data.menu_home}</ListItemButton> </Link>
        <Link style={{display:'flex', justifyContent:'center'}} onClick={handleLinkClick.bind(null,2)}  className={ color == 2 ? 'active' : ''}   href='/products'><ListItemButton>{data.menu_products}</ListItemButton></Link>
        {/* <Link style={{display:'flex', justifyContent:'center'}} onClick={handleLinkClick.bind(null,1)} className={`link ${pathname === '/service' ? 'active' : ''}`}  href='/service'><ListItemButton>{data.menu_service}</ListItemButton></Link>  */}
        <Link style={{display:'flex', justifyContent:'center'}} onClick={handleLinkClick.bind(null,3)}  className={ color == 3 ? 'active' : ''}  href='/about'><ListItemButton>{data.menu_about}</ListItemButton></Link>
        <Link style={{display:'flex', justifyContent:'center'}} onClick={handleLinkClick.bind(null,4)}  className={ color == 4 ? 'active' : ''}  href='/contact'><ListItemButton>{data.menu_contact}</ListItemButton></Link>
      </List>


      <div className="flex justify-center mt-10 gap-6">  
        <button onClick={() => handleClicked('az')}> 
           <span className={styles.firstLng}>
             AZ
            </span>
        </button> 
        <button onClick={() => handleClicked('en')}> 
            <span className= {`${styles.secondLng}`} >
              EN
            </span> 
        </button>
        <button onClick={() => handleClicked('ru')}> 
            <span className={styles.thirdLng}>
              RU
            </span> 
        </button>
      </div>


      <Box
        sx={{
          height:'100%',
          display: 'flex',
          flexDirection:'column',
          justifyContent:'flex-end',
          alignItems:'center',
          gap: 0.5,
          mt: 1,
          mr: 2,
        }}
      >
        
        <ul className="flex gap-4 ps-2 pb-4">
          <li><Link href='/'> <FaLinkedin className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }}/></Link></li>
        </ul>
        
      </Box>

    </Drawer>
  </React.Fragment>
  )
}

export default index