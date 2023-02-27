import styles from '@/styles/Burgers.module.css'
import Header from '../header';
import Link from 'next/link';
import { BsBasket2 } from 'react-icons/bs'

const ChickenBurger = () => {

    return (
        <>
            <div className='container'>
                <Header />


                <div className={styles.burgers}>
                    <h1>Burgers</h1>
                   
                    <div className={styles.burger}>
                        <div className={styles.burgerImg2}></div>
                        <div className={styles.burgerDescription}>
                            <h3>Chicken burger</h3>
                            <p>
                                A portion of the Chicken Burger Burger King sandwich weighs 155 grams and contains 419 kcal.
                                The Chicken Burger Burger King sandwich consists of breaded chicken nuggets,
                                Iceberg lettuce leaves, ketchup and mayonnaise,
                                which are served in a burger bun sprinkled with sesame seeds.
                            </p>
                        </div>
                        <button className={styles.orderBtn}>order<BsBasket2/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChickenBurger;