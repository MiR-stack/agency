import { IoLogoApple, IoLogoNodejs } from 'react-icons/io'
import { MdBusinessCenter } from 'react-icons/md'
import { FaLaptopCode, FaMobileAlt} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'



export const data = [
    {   id:'digitalStrategy',
        image:require('../Photos/development-02.jpg').default,
        icon: <FaLaptopCode />,
        title: 'digital strategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.",
    },
    {
        id:'brandStrategy',
        image:require('../Photos/development-01.jpg').default,
        icon: <IoLogoApple />,
        title: 'brand strategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.",
    },
    {
        id:'marketingStrategy',
        image:require('../Photos/development-03.jpg').default,
        icon: <AiOutlineAreaChart />,
        title: 'marketing starategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.",
    },

    {
        id:'websiteDevelopment',
        image:require('../Photos/design-02.jpg').default,
        icon: <IoLogoNodejs />,
        title: 'website devlopment',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },
    {
        id:'appDevelopment',
        image:require('../Photos/design-01.jpg').default,
        icon: <FaMobileAlt />,
        title: 'app development',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },
    {
        id:'e-commerceDevelopment',
        image:require('../Photos/development-02.jpg').default,
        icon: <MdBusinessCenter />,
        title: 'e-commerce development',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },

]