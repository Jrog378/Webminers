export default function Footer() {
    return (
        <footer style={{color: 'white', textAlign: 'center', padding:'10px', backgroundColor: '#212529'}}>
            <p>©
                <span>{new Date().getFullYear()}</span> Webminers</p>
        </footer>
    );
}