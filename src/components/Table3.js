import exponat04 from './img/exponat04.png';
import exponat05 from './img/exponat05.png';
import exponat06 from './img/exponat06.png';
import React from "react";
function Table3() {
    return(
        <div class="row3">
            <div class="FR3"><img src={exponat04} alt="" width="290px" height="290px"/>
                <p class="podkart">Historia transformacji cyfrowej ANSEE - Piotr Szmigiel, członek zarządu
                </p>
            </div>
            <div class="FR3"><img src={exponat05} alt="" width="290px" height="290px"/>
                <p class="podkart">Historia partnerstwa strategicznego z FICTURO - Paulina Jarosz, współwłaścicielka
                    marki
                </p>
            </div>
            <div class="FR3"><img src={exponat06} alt="" width="290px" height="290px"/>
                <p class="podkart">Historia startupu GLOBAL LIGNUM - Dominik Szkwarek, pomysłodawca i właściciel
                </p>
            </div>
        </div>
    );
}
export default Table3;