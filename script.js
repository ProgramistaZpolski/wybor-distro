var ubuntuPunkty = 0;
var kubuntuPunkty = 0;
var lubuntuPunkty = 0;
var manjaroPunkty = 0;
var budgiePunkty = 0;
var archPunkty = 0;
var gentooPunkty = 0;
var endlessOSPunkty = 0;
var fedoraPunkty = 0;
var mintPunkty = 0;
var freeDesktopPunkty = 0;
var matePunkty = 0;
var debianPunkty = 0;
function dodajPunkty(doKogo, ile){
    if(doKogo == "ubuntu"){
        ubuntuPunkty += ile;
    }
    if(doKogo == "kubuntu"){
        kubuntuPunkty += ile;
    }
    if(doKogo == "lubuntu"){
        lubuntuPunkty += ile;
    }
    if(doKogo == "manjaro"){
        manjaroPunkty += ile;
    }
    if(doKogo == "budgie"){
        budgiePunkty += ile;
    }
    if(doKogo == "arch"){
        archPunkty += ile;
    }
    if(doKogo == "gentoo"){
        gentooPunkty += ile;
    }
    if(doKogo == "endless"){
        endlessOSPunkty += ile;
    }
    if(doKogo == "fedora"){
        fedoraPunkty += ile;
    }
    if(doKogo == "mint"){
        mintPunkty += ile;
    }
    if(doKogo == "freed"){
        freeDesktopPunkty += ile;
    }
    if(doKogo == "mate"){
        matePunkty += ile;
    }
    if(doKogo == "debian"){
        debianPunkty += ile;
    }
}
function zmierzPytanie(ktore){
    if (ktore == 1){
        let checkBox1 = document.getElementById("malozaawansowany");
        let checkBox2 = document.getElementById("sredniozaawansowany");
        let checkBox3 = document.getElementById("zaawansowany");
        if(checkBox1.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 30)
            dodajPunkty("manjaro", 10)
            dodajPunkty("budgie", 15)
            dodajPunkty("mint", 25)
            dodajPunkty("freed", 20)
        }
        if(checkBox2.checked == true){
            dodajPunkty("ubuntu", 20)
            dodajPunkty("kubuntu", 20)
            dodajPunkty("lubuntu", 20)
            dodajPunkty("endless", 5)
            dodajPunkty("manjaro", 25)
            dodajPunkty("mint", 20)
            dodajPunkty("mate", 20)
            dodajPunkty("freed", 15)
            dodajPunkty("fedora", 15)
            dodajPunkty("debian", 15)
            dodajPunkty("budgie", 15)
            dodajPunkty("arch", 5)
        }
        if(checkBox3.checked == true){
            dodajPunkty("ubuntu", 10)
            dodajPunkty("kubuntu", 10)
            dodajPunkty("lubuntu", 10)
            dodajPunkty("manjaro", 20)
            dodajPunkty("mint", 15)
            dodajPunkty("mate", 20)
            dodajPunkty("budgie", 10)
            dodajPunkty("freed", 10)
            dodajPunkty("fedora", 15)
            dodajPunkty("debian", 20)
            dodajPunkty("arch", 25)
            dodajPunkty("gentoo", 25)

        }
        document.getElementById("pytanie1").disabled = true
    }
    else if (ktore == 2){
        let checkBox1 = document.getElementById("internetu");
        let checkBox2 = document.getElementById("praca");
        let checkBox3 = document.getElementById("granie");
        let checkBox4 = document.getElementById("programowanie");
        let checkBox5 = document.getElementById("kreatywnosc");
        let checkBox6 = document.getElementById("szkola");
        if(checkBox1.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 30)
            dodajPunkty("manjaro", 15)
            dodajPunkty("budgie", 15)
            dodajPunkty("mint", 25)
            dodajPunkty("debian", 25)
            dodajPunkty("mate", 20)
        }
        if(checkBox2.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 30)
            dodajPunkty("manjaro", 25)
            dodajPunkty("budgie", 25)
            dodajPunkty("mint", 25)
            dodajPunkty("mate", 20)
            dodajPunkty("debian", 25)
        }
        if(checkBox3.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 5)
            dodajPunkty("manjaro", 25)
            dodajPunkty("budgie", 25)
            dodajPunkty("mint", 25)
            dodajPunkty("debian", 25)
            dodajPunkty("mate", 20)
        }
        if(checkBox4.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 5)
            dodajPunkty("manjaro", 25)
            dodajPunkty("budgie", 25)
            dodajPunkty("mint", 25)
            dodajPunkty("debian", 25)
            dodajPunkty("mate", 25)
            dodajPunkty("arch", 25)
            dodajPunkty("gentoo", 25)
            dodajPunkty("fedora", 25)
        }
        if(checkBox5.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 30)
            dodajPunkty("manjaro", 15)
            dodajPunkty("budgie", 15)
            dodajPunkty("mint", 25)
            dodajPunkty("debian", 25)
            dodajPunkty("mate", 20)
            dodajPunkty("freed", 20)
        }
        if(checkBox6.checked == true){
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("endless", 25)
            dodajPunkty("manjaro", 15)
            dodajPunkty("mint", 25)
            dodajPunkty("debian", 20)
            dodajPunkty("mate", 10)
            dodajPunkty("freed", 150)
        }
        document.getElementById("pytanie2").disabled = true
    }
    else if (ktore == 3){
        let checkBox1 = document.getElementById("02lat");
        let checkBox2 = document.getElementById("35lat");
        let checkBox3 = document.getElementById("59lat");
        let checkBox4 = document.getElementById("10lat");
        if(checkBox1.checked == true){
            dodajPunkty("ubuntu", 10)
            dodajPunkty("kubuntu", 15)
            dodajPunkty("lubuntu", -25)
            dodajPunkty("budgie", 10)
            dodajPunkty("manjaro", 15)
            dodajPunkty("mint", 10)
            dodajPunkty("mate", 10)
        }
        if(checkBox2.checked == true){
            dodajPunkty("ubuntu", 10)
            dodajPunkty("kubuntu", 5)
            dodajPunkty("lubuntu", -15)
            dodajPunkty("debian", 5)
            dodajPunkty("manjaro", 15)
            dodajPunkty("mint", 10)
            dodajPunkty("mate", 15)
        }
        if(checkBox3.checked == true){
            dodajPunkty("kubuntu", -5)
            dodajPunkty("lubuntu", 10)
            dodajPunkty("arch", 10)
            dodajPunkty("gentoo", 10)
            dodajPunkty("manjaro", 5)
            dodajPunkty("mate", 10)
            dodajPunkty("debian", 10)
        }
        if(checkBox4.checked == true){
            dodajPunkty("kubuntu", -50)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("arch", 25)
            dodajPunkty("gentoo", 25)
            dodajPunkty("mate", 10)
            dodajPunkty("debian", 15)
        }
        document.getElementById("pytanie3").disabled = true
    }
    else if (ktore == 4){
        let checkBox1 = document.getElementById("duze");
        let checkBox2 = document.getElementById("srednie");
        let checkBox3 = document.getElementById("male");
        let checkBox4 = document.getElementById("noob");
        if (checkBox1.checked == true){
            alert("skoro masz duże doświadczenie to nie wiem po co tu jesteś");
            dodajPunkty("arch", 25)
            dodajPunkty("gentoo", 25)
        }
        if (checkBox2.checked == true){
            dodajPunkty("arch", 5)
            dodajPunkty("gentoo", 5)
        }
        if (checkBox3.checked == true){
            dodajPunkty("arch", -500)
            dodajPunkty("gentoo", -500)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("manjaro", 25) // na prośbe domeny przypisanej do brytanii
            dodajPunkty("ubuntu", 25)
        }
        if (checkBox4.checked == true){
            dodajPunkty("arch", -50000)
            dodajPunkty("gentoo", -50000)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("manjaro", 25)
            dodajPunkty("ubuntu", 25)
            dodajPunkty("kubuntu", 25)
            dodajPunkty("lubuntu", 25)
            dodajPunkty("manjaro", 25)
            dodajPunkty("endless", 25)
        }
        document.getElementById("pytanie4").disabled = true
    }
    else if (ktore == 5){
        let checkBox1 = document.getElementById("winda");
        let checkBox2 = document.getElementById("makowiec");
        let checkBox3 = document.getElementById("android");
        let checkBox4 = document.getElementById("nowe");
        let checkBox5 = document.getElementById("idiota");
        let checkBox6 = document.getElementById("plazma-wulkaniczna");
        let checkBox7 = document.getElementById("gnom-ogrodowy");
        if (checkBox1.checked == true){
            dodajPunkty("kubuntu", 35)
            dodajPunkty("lubuntu", 30)
            dodajPunkty("manjaro", 25)
            dodajPunkty("freed", 15)
            dodajPunkty("mint", 30)
            dodajPunkty("debian", 5)
        }
        if (checkBox2.checked == true){
            dodajPunkty("budgie", 35)
        }
        if (checkBox3.checked == true){
            dodajPunkty("endless", 50)
        }
        if(checkBox4.checked == true){
            dodajPunkty("mate", 15)
            dodajPunkty("ubuntu", 15)
            dodajPunkty("debian", 15)
        }
        if(checkBox5.checked){
            // nic nie robimy, przecież obojętnie mu

            // w sensie dodajemy debiana bo tam można zainstalować dowolne środowisko
            dodajPunkty("debian", 5);
        }
        if(checkBox6.checked == true){
            dodajPunkty("kubuntu", 50)
            dodajPunkty("manjaro", 40)
        }
        if (checkBox7.checked == true){
            dodajPunkty("ubuntu", 50)
            dodajPunkty("manjaro", 40)
            dodajPunkty("fedora", 50)
        }
        document.getElementById("pytanie5").disabled = true
    }
    if (ktore == 6){
        let checkBox1 = document.getElementById("preinstalacja");
        let checkBox2 = document.getElementById("podstawowe-i");
        if (checkBox1.checked == true){
            dodajPunkty("debian", 20)
            dodajPunkty("arch", 20)
            dodajPunkty("gentoo", 20)
        }
        // nie robie drugiego if bo każda inna dystrybucja ma preinstalowane programy
        document.getElementById("pytanie6").disabled = true
    }
}
function pizza(){
    let ananas = Math.max(archPunkty, budgiePunkty, debianPunkty, fedoraPunkty, freeDesktopPunkty, gentooPunkty, kubuntuPunkty, lubuntuPunkty, manjaroPunkty, matePunkty, mintPunkty, ubuntuPunkty);
    console.log(ananas)
    let kubix = sprawdzNajwieksze(ananas);
    console.log(kubix)
    let haha_wyniki_go_brrr = document.getElementById("wyniki")
    haha_wyniki_go_brrr.innerHTML = "<h2>Twoja proponowana dystrybucja to:<h2> <h4><b>" + kubix + "!</b></h4> <h6> to jest wersja alpha i jest tutaj dużo błędów </h6><br><p>Obrazek dystrybucji, opis i link do pobrania już wkrótce!</p>"

}
function sprawdzNajwieksze(ananas) {
    if (archPunkty == ananas){
        return "arch"
    }
    if (budgiePunkty == ananas){
        return "budgie"
    }
    if (debianPunkty == ananas){
        return "debian"
    }
    if (fedoraPunkty == ananas){
        return "fedora"
    }
    if (freeDesktopPunkty == ananas){
        return "freeDesktop"
    }
    if (gentooPunkty == ananas){
        return "gentoo"
    }
    if (kubuntuPunkty == ananas){
        return "kubuntu"
    }
    if (lubuntuPunkty == ananas){
        return "lubuntu"
    }
    if (manjaroPunkty == ananas){
        return "manjaro"
    }
    if (matePunkty == ananas){
        return "mate"
    }
    if (mintPunkty == ananas){
        return "mint"
    }
    if (ubuntuPunkty == ananas){
        return "ubuntu"
    }
}