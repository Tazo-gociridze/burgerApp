import styles from '@/styles/Burgers.module.css'
import Header from '../header';
import Link from 'next/link';
import { BsBasket2 } from 'react-icons/bs'

const BreakfastBurger = () => {

    return (
        <>
            <div className='container'>
                <Header />


                <div className={styles.burgers}>
                    <h1>Breakfast burger</h1>
                   
                    <div className={styles.burger}>
                        <div className={styles.burgerImg2}></div>
                        <div className={styles.burgerDescription}>
                            <h3>Breakfast burger</h3>
                            <p>
                            Breakfast boorger ingredients : Fried bacon (sliced), Potato patty Rosti,Tomato ketchup,
                                    Pork cutlet with spices,Sandwich tortilla, steamed,Deep-frying vegetable oil,Butter M.D.zh.82%,
                                    Omelette,Processed Cheddar cheese.
                            </p>
                        </div>
                        <button className={styles.orderBtn}>order<BsBasket2/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreakfastBurger;