export default function Footer() {
    return (
        <footer style={{color: 'white', textAlign: 'center', padding:'10px', backgroundColor: '#212529'}}>
            <p>&copy; <span>{new Date().getFullYear()}</span> Webminers</p>
        </footer>
    );
}