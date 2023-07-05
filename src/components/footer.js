import styles from '@/styles/Home.module.css'
export default function Footer() {
    return (
        <footer style={{
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: 'rgba(33, 37, 41, 1)',
        }}>
            <p style={{margin:0}}>&copy; 2023 Webminers. All rights reserved. | <a className={styles.weblink} href={'/terms-of-service'}>Terms of Service</a> and <a className={styles.weblink} href={'/privacy'}>Privacy Policy</a></p>
        </footer>
    );
}