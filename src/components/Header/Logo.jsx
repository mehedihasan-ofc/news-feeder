import LogoImg from '../../assets/logo.png';

const Logo = () => {
    return (
        <a href="/">
            <img className="max-w-[100px] md:max-w-[165px]" src={LogoImg} alt="Lws" />
        </a>
    );
};

export default Logo;