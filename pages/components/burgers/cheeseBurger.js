
import styles from '@/styles/Burgers.module.css';
import Header from '../header';
import { BsBasket2 } from 'react-icons/bs'

const CheeseBurger = () => {

    return (
        <>
            <div className='container'>
                 
            <Header/>

                <div className={styles.burgers}>
                    <h1>Cheese burger</h1>
                    <div className={styles.burger}>
                        <div className={styles.burgerImg1}></div>
                        <div className={styles.burgerDescription}>
                            <h3>Cheese burger</h3>
                            <p>A cheeseburger sandwich is a beef patty, cheese, pickles, ketchup and mustard served in a burger bun.</p>
                        </div>
                        <button className={styles.orderBtn}>order<BsBasket2/></button>
                        <div>
                        
                        </div>
                    </div>
                    
                </div> 
 
                </div>
        </>
    )
}

export default CheeseBurger;