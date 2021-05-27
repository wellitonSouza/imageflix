import placeHolder from '../../assets/hero.jpg';

export default function Hero(){
    return(
        <header className='min-h-screen'>
            <img className='object-cover object-center h-full ' src={placeHolder} alt="Filme em Destaque" />
        </header>
    )
}