import styles from '@/styles/Reviews.module.css';
import Header from './components/header';
const Reviews = () => {

    return (
        <>
            <div className='container'>
                <Header />
                
                <div className={styles.revives}>
                <h1>reviews:</h1>
                    <p>1. Great service. Friendly staff. Fast really have changed over the past months. The food is fresh and hot. They act like they’re glad that you are there.
                        And they worked well together. Happy to see that Burger King us improving.</p>

                    <p>2. Every morning I stop by for my breakfast number 6 large with 6 creams no sugar.
                        Today I was there at 8:52 am. JANEE is in the exit window and takes my order.
                        Very pleasant lady always with a smile. She really represents Burger King with a professional manner.
                        Her uniform is impeccable and deserves $$$ for the holidays.</p>

                    <p>3. Burger King is still very affordable in today's time and the app has many different deals.
                        When I order from this location they are always kind and courteous.
                        Staff can either make or break a place honestly. At least at the ones near me they seem to be pretty decent.
                        It's not perfect and experiences can really differ depending on the location.</p>

                    <p>4. I came in today and was greatly greeted by the employee. My food was great, not cold just perfect.
                        And they were all nice, made my day a lot better!
                        I have been through before and have had the same experiences as this
                        one and did not have the time write a review but if I had to say it was 10/10 for me.</p>

                    <p>5. Great service. Friendly staff. Fast really have changed over the past months.
                        The food is fresh and hot. They act like they’re glad that you are there.
                        And they worked well together. Happy to see that Burger King us improving.</p>
                </div>
            </div>
        </>
    )
}

export default Reviews;