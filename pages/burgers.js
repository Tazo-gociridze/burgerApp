import styles from '@/styles/Burgers.module.css'
import Header from './components/header';
import Link from 'next/link';

const Burgers = () => {

    return (
        <>
            <div className='container'>
                <Header />


                <div className={styles.burgers}>
                    <h1>Burgers</h1>
                    <Link className='link' href='/components/burgers/cheeseBurger'>
                        <div className={styles.burger}>
                            <div className={styles.burgerImg1}></div>
                            <div className={styles.burgerDescription}>
                                <h3>Cheese burger</h3>
                                <p>A cheeseburger sandwich is a beef patty, cheese, pickles, ketchup and mustard served in a burger bun.</p>
                            </div>
                        </div>
                    </Link>

                    <Link className='link' href='/components/burgers/chickenBurger'>
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
                        </div>
                    </Link>
                    <Link className='link' href='/components/burgers/breakfastBurger'>
                        <div className={styles.burger}>
                            <div className={styles.burgerImg3}></div>
                            <div className={styles.burgerDescription}>
                                <h3>Breakfast burger</h3>
                                <p>
                                    Breakfast boorger ingredients : Fried bacon (sliced), Potato patty Rosti,Tomato ketchup,
                                    Pork cutlet with spices,Sandwich tortilla, steamed,Deep-frying vegetable oil,Butter M.D.zh.82%,
                                    Omelette,Processed Cheddar cheese.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* <div className={styles.burger}>
                              <div className={styles.burgerIimg3}></div>
                              <p className={styles.burgerDescription}></p>
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default Burgers;