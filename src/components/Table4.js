import exponat07 from './img/exponat07.png';
import exponat08 from './img/exponat08.png';
import React from "react";
function Table4() {
    return(
        <div class="row4">
            <div class="dvaposfoto">
                <div class="FR4"><img src={exponat07} alt="" width="290px" height="290px"/>
                    <p class="podkart">Historia transformacji biznesowej EXSO - Marcin Kuczyński, współwłaściciel i
                        prezes
                        zarządu
                    </p>
                </div>
                <div class="FR4"><img src={exponat08} alt="" width="290px" height="290px"/>
                    <p class="podkart">Historia nowego rozdziału rozwoju USEO - Dariusz Michalski, CEO i właściciel
                    </p>
                </div>
            </div>
            <div class="NAPDPF">“Jesteśmy złączeni dzięki historiom” – Arystoteles, 384-322 p.n.e.</div>
    </div>
    );
}
export default Table4;