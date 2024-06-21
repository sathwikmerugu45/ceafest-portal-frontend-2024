import React from 'react';
import './container.scss'

type ContainerProps = {
    children: React.ReactNode
    gradient?: 'leftToRight' | 'topToBottom' | 'bottomToTop' | 'radial' | 'repeat-horizontal'
    edges?: 'sharp' | 'round'
    transparent?: boolean
};

const Container:React.FC<ContainerProps> = ({children, gradient, edges, transparent}) => {
    
    return <div className={`container ${gradient} ${edges} ${transparent ? "transparent" : ""}`}>
        {children}
    </div>
}
export default Container;