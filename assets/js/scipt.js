let imgModeDarkLight = document.querySelector(".fundo img") 

let backgroundBgImg = document.querySelector(".fundo") 

let body = document.querySelector("body")

let input_gerador = document.querySelector(".input_gerador")


let input_geradorIput = document.querySelector(".input_gerador input")

let circle = document.querySelectorAll(".abaResultados .cricle")

let input_geradorIputCircle = document.querySelector(".input_gerador  .cricle")

let abaResultados = document.querySelector(".abaResultados")

let tarefaSpan = document.querySelectorAll(".result1 span")

let controlersSpan = document.querySelectorAll(".controlers span")

let form = document.querySelector("form")

imgModeDarkLight.addEventListener("click" , () =>{

    if(imgModeDarkLight.getAttribute("src") === "assets/images/icon-moon.svg" ){

        imgModeDarkLight.setAttribute("src" , "assets/images/icon-sun.svg")

        backgroundBgImg.classList.remove("fundo")

        backgroundBgImg.classList.add("fundo2")

        body.style.backgroundColor = "hsl(235, 21%, 11%)"

        input_gerador.style.backgroundColor = "hsl(235, 24%, 19%)"

        input_geradorIput.style.backgroundColor = "hsl(235, 24%, 19%)"

        abaResultados.style.backgroundColor = "hsl(235, 24%, 19%)"

        input_geradorIputCircle.style.border = "1px solid hsl(233, 14%, 35%)"

        input_geradorIput.style.color = "hsl(234, 39%, 85%)"

        let cricleDark = document.querySelectorAll(".classClone .cricle")

        cricleDark.forEach( (circle) =>{
            circle.style.border = "1px solid hsl(233, 14%, 35%)"
        })

        let spanDark = document.querySelectorAll(".classClone span")

        spanDark.forEach( (span) =>{
            span.style.color = "hsl(234, 39%, 85%)"
        })
         
        let controlersDark = document.querySelectorAll(".controlers span")

        controlersDark.forEach((span) => {
            span.style.color = "hsl(234, 11%, 52%)"
        })

        abaResultados.style.boxShadow = "none"

        let action2 = document.querySelector("#actions2")

        action2.classList.remove("actions2")

        action2.classList.add("actions2Dark")

        return

    } else{
        imgModeDarkLight.setAttribute("src" , "assets/images/icon-moon.svg")

        backgroundBgImg.classList.remove("fundo2")

        backgroundBgImg.classList.add("fundo")

        body.style.backgroundColor = "#fff"

        input_gerador.style.backgroundColor = "#fff"

        input_geradorIput.style.backgroundColor = "#fff"

        abaResultados.style.backgroundColor = "#fff"

        input_geradorIput.style.color = "hsl(236, 9%, 61%)"

        input_geradorIputCircle.style.border = "1px solid hsl(233, 11%, 84%)"

        let cricleLight = document.querySelectorAll(".classClone .cricle")

        cricleLight.forEach( (circle) =>{
            circle.style.border = "1px solid hsl(233, 11%, 84%)"
        })

        let spanLight = document.querySelectorAll(".classClone span")

        spanLight.forEach( (span) =>{
            span.style.color = "hsl(235, 19%, 35%)"
        })

        let controlerLIght = document.querySelectorAll(".controlers span")

        controlerLIght.forEach((span) => {
            span.style.color = "hsl(234, 11%, 52%)"
        })

        abaResultados.style.boxShadow = "1px 1px 20px   hsl(236, 9%, 61%)"
    }

    let action2 = document.querySelector("#actions2")
    
    action2.classList.add("actions2")

    action2.classList.remove("actions2Dark")

})



circle.forEach((c) => {
    c.addEventListener("click" , () => {
        if(c.getAttribute("class").includes("nãoClicado")){
            c.classList.remove("nãoClicado")

            c.classList.add("clicado")

            c.style.background = "linear-gradient(45deg , hsl(192, 100%, 67%) , hsl(280, 87%, 65%) )"

            let imgCircle = document.querySelectorAll(".result1 > .cricle > img")

            imgCircle.forEach((img) => {
                img.style.display = "block"
            })
            let span = document.querySelector(".result1 span")

            span.style.textDecoration = "line-through"
           return
        } if(c.getAttribute("class").includes("clicado")){
            c.classList.remove("clicado")

            c.classList.add("nãoClicado")

            c.style.background = "transparent"

            let imgCircle = document.querySelectorAll(".cricle img")

            imgCircle.forEach((img) => {
                img.style.display = "none"
            })
            let span = document.querySelector(".result1 span")

            span.style.textDecoration = "none"

        }
    })
})

let result1 = document.querySelector(".result1")



let divTarefas = document.querySelector(".tarefas")

let array = []

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    let tarefa = result1.cloneNode(true)

    let spanTarefa = tarefa.querySelector("span")

    tarefa.classList.remove("result1")

    tarefa.classList.add("classClone")
    

    spanTarefa.innerHTML = input_geradorIput.value

    let circle1 = tarefa.querySelectorAll(".cricle")

    let circleclone = tarefa.querySelector(".cricle")

    circleclone.classList.add("ativa")



    circle1.forEach((c) => {
        c.addEventListener("click" , () => {
            if(c.getAttribute("class").includes("nãoClicado")){
                c.classList.remove("nãoClicado")
    
                c.classList.add("clicado")

                c.classList.remove("concluida")

                c.classList.add("ativa")

                c.classList.remove("ativa")

                c.classList.add("concluida")
    
                c.style.background = "linear-gradient(45deg , hsl(192, 100%, 67%) , hsl(280, 87%, 65%) )"
    
                let imgCircle = c.querySelectorAll(".classClone > .cricle > img")
    
                imgCircle.forEach((img) => {
                    img.style.display = "block"
                })

                spanTarefa.style.textDecoration = "line-through"

                if(c.getAttribute("class").includes("clicado")){
                    array.pop(tarefa)
                    total_items.innerHTML = `${array.length} items left`
                }

                let clonesFilter = document.querySelectorAll(".classClone")

                clonesFilter.forEach((r) => {

                   let active = document.querySelectorAll(".tarefas_em_andamento")
                   
                   let circleForeach = r.querySelector(".cricle")

                   active.forEach((c) => {
                    c.addEventListener("click", () => {
                        console.log("clicou")
                        if(circleForeach.className.includes("concluida")){
                            r.style.display = "none"
                        } else{
                            r.style.display = "flex"
                        }
                       })
                   })

                   let completed = document.querySelectorAll(".tarefasCompletas")

                   completed.forEach((c) => {
                    c.addEventListener("click" , () => {
                        if(circleForeach.className.includes("ativa")){
                            r.style.display = "none"
                        } else{
                            r.style.display = "flex"
                        }
                       })
                   })

                 

                   let all = document.querySelectorAll(".todos")

                   all.forEach((c) => {
                    
                   c.addEventListener("click" , () => {
                    if(circleForeach.className.includes("ativa") || circleForeach.className.includes("concluida") ){
                        r.style.display = "flex"
                    }
                   })
                   })

                   let clearTarefas = document.querySelector(".limparTarefasCompletas")

                   clearTarefas.addEventListener("click" , () => {
                        if(r.querySelector(".cricle").getAttribute("class").includes("clicado")){
                                let circleForaEach = r.querySelector(".cricle")

                                circleForaEach.classList.remove("concluida")

                                circleForaEach.classList.add("ativa")

                                let imgCircle = r.querySelector(".cricle img")

                                imgCircle.style.display = "none"

                                circleForaEach.classList.remove("clicado")
    
                                circleForaEach.classList.add("nãoClicado")

                                circleForaEach.classList.remove("concluida")

                                circleForaEach.style.background = "transparent"

                                let spanForeach = r.querySelector("span")

                                spanForeach.style.textDecoration = "none"

                                if(c.getAttribute("class").includes("nãoClicado")){
                                    array.push(tarefa)
                                    total_items.innerHTML = `${array.length} items left`
                                }
                        }
                   })

                
                })

                return

            } if(c.getAttribute("class").includes("clicado")){
                c.classList.remove("clicado")
    
                c.classList.add("nãoClicado")

                c.classList.remove("concluida")

                c.classList.add("ativa")
    
                c.style.background = "transparent"
    
                let imgCircle = c.querySelectorAll(".cricle img")
    
                imgCircle.forEach((img) => {
                    img.style.display = "none"
                })
                

                spanTarefa.style.textDecoration = "none"
    
                if(c.getAttribute("class").includes("nãoClicado")){
                    array.push(tarefa)
                    total_items.innerHTML = `${array.length} items left`
                }
            }
        })
    })


    
    divTarefas.append(tarefa)

    if(imgModeDarkLight.getAttribute("src") ===  "assets/images/icon-sun.svg"){
        
        let cricleDark = document.querySelectorAll(".classClone .cricle")

        cricleDark.forEach( (circle) =>{
            circle.style.border = "1px solid hsl(233, 14%, 35%)"
        })

        let spanDark = document.querySelectorAll(".classClone span")

        spanDark.forEach( (span) =>{
            span.style.color = "hsl(234, 39%, 85%)"
        })
        
    }
  
    array.push(tarefa)

    let total_items = document.querySelector(".total_items")
    
    total_items.innerHTML = `${array.length} items left`

    
    let tarefaClone = document.querySelectorAll(".classClone")
    
        
    let imgApagar = tarefa.querySelector(".imgDelete")

    imgApagar.addEventListener("click", () => {
            

        let circleError = tarefa.querySelector(".cricle")

        circleError.classList.remove("clicado")

        circleError.classList.add("nãoClicado")

        tarefa.remove()
            
        if(circleclone.className.includes("ativa")){
            array.pop(tarefa)
        }
            total_items.innerHTML = `${array.length} items left`
    })
        
    circleclone.classList.add("clicado")

    circleclone.classList.add("concluida")

    circleclone.classList.remove("nãoClicado")

    circleclone.classList.remove("ativa")

    circleclone.classList.remove("clicado")

    circleclone.classList.remove("concluida")

    circleclone.classList.add("nãoClicado")

    circleclone.classList.add("ativa")
        
})

