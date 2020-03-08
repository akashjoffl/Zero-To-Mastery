import React from 'react';

function Footer() {
    return (  
    <div>
        <footer class="ph3 ph4-ns pv6 bt b--black-10 black-70">
        <a href="mailto:" class="link b f3 f2-ns dim black-70 lh-solid">hello@email.com</a>
        <p class="f6 db b ttu lh-solid">© 2016 COMPANY Inc.</p>
            <div class="mt5">
                <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
                <a href="/terms/"    title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
                <a href="/privacy/"  title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
            </div>
        </footer>
           <div className="footer-bottom">
            <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Akash Jeganath
            </p> 
        </div>
    </div>
    )
}

export default Footer;