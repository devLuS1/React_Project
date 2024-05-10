import './hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="heroText">Welcome to Snow Home</h1>
            <p className="heroSubText">A collection unlike anything else</p>
            <img className="heroImg" src="/img/banner.jpg" />
        </div>
    )
}

export default Hero