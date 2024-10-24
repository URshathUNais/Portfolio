import { type } from '@testing-library/user-event/dist/type';
import {motion} from 'framer-motion'

export const pageVariants = {
    initial : {
        opacity : 0,
        y : 50
    },
    in : {
        opacity : 1,
        y : 0
    },
    out : {
        opacity : 0,
        y : -50
    }
}

function PageTransition({ children , element = "div" , className , duration = 0.5 , ...props}) {
    const ElementToRender = motion(element)
    const pageTransition = {
        type : "tween",
        ease : "anticipate",
        duration : duration
    }

    return ( <ElementToRender
        className={className}
        initial = "initial"
        animate = "in"
        exit = "out"
        variants = {pageVariants}
        transition = {pageTransition}
        {...props}
    >
        {children}
    </ElementToRender> );
}

export default PageTransition;