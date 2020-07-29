import React from 'react';

function ButtonLink(props){
    const {href, className, children} = props
    return (
        <a className={className} href={href}>
            {children}
        </a>

    );
};

export default ButtonLink;