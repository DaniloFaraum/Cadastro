const errordiv = document.getElementById("error")
let ok = false

function get(){
    let user = document.getElementById("user").value
    let email = document.getElementById("email").value
    let pw = document.getElementById("pw").value
    let pw2 = document.getElementById("pw2").value
    let data = [user,email,pw,pw2]
    check(data)
    console.log(ok)
}
function check(data){
    console.table(data)
    if (data.includes('')){
        errordiv.textContent = "Preencha todos os campos"
        ok = false
      } 
        else if (!data[1].includes('@') || !data[1].includes('.')){
            errordiv.textContent = "Email inválido"
            ok = false
         }   
           else if (data[2]!==data[3]){
            errordiv.textContent = "Senhas não coincidem"
            ok = false
    }
    else{
        errordiv.textContent = ""
        ok = true
      }
    done()
}
function done(){
    if (ok == true){
        document.getElementById("main").textContent = "Cadastro concluido"
    }
}