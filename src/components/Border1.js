import strelka from './img/strelka.png';
import React from "react";
function Border1() {
    return (
        <div>
            <div class="JMP">Jak możemy pomóc</div>
            <div class="tabl01">
                <div class="zaglavnoe">
                    <div class="zaglavnoedoch">Transformacje</div>
                    <div class="zaglavnoedoch">Wsparcie</div>
                    <div class="zaglavnoedoch">Rozwój</div>
                    <div class="zaglavnoedoch">Przedsiębiorczość</div>
                </div>
                <div class="sredina">
                    <div class="sredinadoch">Agile Lean Brand Digital innovation</div>
                    <div class="sredinadoch">Doradztwo Narzędzia Coaching menedżerski</div>
                    <div class="sredinadoch">Warsztaty Symulacje Szkolenia hybrydowe</div>
                    <div class="sredinadoch">Mentoring Relacje wspólnicze Nowy biznes</div>
                </div>
                <div class="strelki">
                    <div class="strelkidoch"> <img src={strelka} alt=""/> </div>
                    <div class="strelkidoch"> <img src={strelka} alt=""/> </div>
                    <div class="strelkidoch"> <img src={strelka} alt=""/> </div>
                    <div class="strelkidoch"> <img src={strelka} alt=""/> </div>
                </div>
            </div>
        </div>
    );
}
export default Border1;