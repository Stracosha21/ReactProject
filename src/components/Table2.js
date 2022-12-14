import exponat02 from './img/exponat02.png';
import exponat03 from './img/exponat03.png';
import React from "react";
function Table2() {
    return(
        <div class="row2">
            <div class="texty">
                <div>Zapraszamy do lektury historii klientów, partnerów i przyjaciół,z którymi <br/>
                    mamy przyjemność wędrować drogą rozwoju i przedsiębiorczości.</div>
                <div class="secondcont">Każda historia jest inna, bo stoją za nimi unikalne organizacje <br/>
                    tworzone przez ludzi obdarzonych wyjątkowymi pomysłami, talentami i <br/>
                    doświadczeniami.</div>
            </div>
            <div class="fotorow2">
                <div class="FR2"><img src={exponat02} alt="" width="290px" height="290px"/>
                    <p class="podkart">Historia transformacji cyfrowej Santander Consumer Multirent - Piotr Jasicki,
                        członek zarządu
                    </p>
                </div>
                <div class="FR2"><img src={exponat03} alt="" width="290px" height="290px"/>
                    <p class="podkart">Historia transformacji biznesowej TONY - Mateusz Biegaj, pomysłodawca i
                        współwłaściciel
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Table2;