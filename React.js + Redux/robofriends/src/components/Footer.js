import React from 'react';

function Footer() {
    return (  
    <div>
        <footer>
            <div className="footer-bottom" style={{height: '5px'}}>
                <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Akash Jeganath
                </p> 
            </div>
        </footer>
    </div>
    )
}

export default Footer;