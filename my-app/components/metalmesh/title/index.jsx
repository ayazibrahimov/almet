
import styles from './styles.module.css'
import {motion} from 'framer-motion'
import instance from '@/api/agent'



function Title({data}) {


  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 100 }}
        transition={{ delay: 1, duration: 0.2 }}
      >
        {data.home_slide_up_text1}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '100%' }}
        transition={{ delay: 1, duration: 0.2 }}
      >
        {data.home_slide_up_text2}
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.2 }}
      >
        {data.home_slide_left_text}
      </motion.h4>
    </div>
  );
}

export default Title;