import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(https://org-blush.vercel.app/img/footer.png" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="https://org-blush.vercel.app/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://org-blush.vercel.app/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="https://org-blush.vercel.app/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='https://org-blush.vercel.app/img/Logo.png' alt='org' />
        <strong>Desarrollado por Roberto Padilla</strong>
    </footer>
}

export default Footer