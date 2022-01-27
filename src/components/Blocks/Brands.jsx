
const logos = [
    require('../logos/logo-01.jpg').default,
    require('../logos/logo-02.jpg').default,
    require('../logos/logo-03.png').default,
    require('../logos/logo-04.jpg').default,
    require('../logos/logo-05.png').default,
    require('../logos/logo-06.jpg').default,
    require('../logos/logo-07.jpg').default,
    require('../logos/logo-08.png').default,
    require('../logos/logo-09.png').default,
    require('../logos/logo-10.png').default,
    require('../logos/logo-11.jpg').default,
    require('../logos/logo-12.jpg').default,


]

export default function Brands() {
    return (
        <div className="brands">
            {logos.map((image, index) => <img src={image} key={index} alt='s' />)}
        </div>
    )
}
