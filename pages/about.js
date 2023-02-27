import styles from '@/styles/About.module.css'
import Header from './components/header';

const About = () => {

    return (
        <>
            <div className='container'>
                <Header />
                
                <div className={styles.about}>
                <h1>
                    About us:
                </h1>
                    <div className={styles.aboutBox}>
                        <h3>GREAT FOOD COMES FIRST</h3>
                        <p>
                            Every day, more than 11 million guests visit BURGER KING®
                            restaurants around the world. And they do so because our
                            restaurants are known for serving high-quality, great tasting,
                            and affordable food. Founded in 1954, BURGER KING® is the second
                            largest fast food hamburger chain in the world.
                        </p>

                        <p>
                            BURGER KING® commenced operations in Malaysia in 1997 with the opening
                            of its first restaurant at Sungai Buloh Overhead Bridge. Today, Cosmo
                            Restaurants Sdn Bhd operates more than 120 BURGER KING® restaurants in Malaysia
                            where customers across the country can enjoy the great and healthy
                            flame-grilled taste of Burger King products.
                        </p>

                        <p>
                            The original HOME OF THE WHOPPER®, our commitment to premium ingredients, signature recipes,
                            and family-friendly dining experiences is what has defined our brand for
                            more than 50 successful years.
                        </p>
                    </div>

                    <div className={styles.aboutBox}>
                        <h3>THE WHOPPER - BURGER KING®’S ICONIC PRODUCT</h3>
                        <p>
                            The WHOPPER® is America's favourite burger. First off a hot broiler in 1957,
                            the WHOPPER®, boasting a quarter pound of flame-grilled beef, ripe tomatoes,
                            crisp lettuce, creamy mayo, ketchup, onions and crunchy pickles on a toasted
                            sesame seed bun, has become an iconic burger for the ages and boasts generations
                            of fans worldwide.There are 221,184 possible ways for a guest to order
                            an original WHOPPER®.
                        </p>

                        <p>
                            For those who like the taste of the WHOPPER® but find it too filling,
                            we also have the smaller version of this all time classic, the WHOPPER JR®.
                        </p>
                    </div>

                    <div className={styles.aboutBox}>
                        <h3>3G CAPITAL</h3>
                        <p>
                            In 2010, 3G Capital, a global multi-million dollar investment firm focused on long term value creation,
                            purchased Burger King Corporation, making it a privately-held company. To learn more about 3G Capital
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;