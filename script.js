/* 
   
variaveis
    um espaço onde pode guardar o que quiser la dentro

    3 jeitos de criar uma variavel
    - var / jeito antigo n use
    - let --> voce pode alterar o valor depois
    - const --> constante
 

    funçoes
        um trecho de codigo que so executado quando chamado

*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}