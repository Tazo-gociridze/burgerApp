import styles from '@/styles/Header.module.css'
import { SiBurgerking } from 'react-icons/si'
import Link from 'next/link'

const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link className='logo' href="/"><SiBurgerking /></Link>
                </div>

                <nav className={styles.links}>
                    <Link className='link' href='/'>Home</Link>
                    <Link className='link' href='/about'>About us</Link>
                    <Link className='link' href='/burgers'>Burgers</Link>
                    <Link className='link' href='/reviews'>reviews</Link>
                </nav>
            </div>
        </>
    )
}

export default Header