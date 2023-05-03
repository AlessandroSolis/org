import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/AlessandroSolis'>
                <img src="/img/icons8-github.svg" alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/edvin-solis-51732325b/'>
                <img src="/img/icons8-linkedin.svg" alt='twitter' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=50370668166'>
                <img src="/img/icons8-whatsapp.svg" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alessandro Solis</strong>
    </footer>
}

export default Footer