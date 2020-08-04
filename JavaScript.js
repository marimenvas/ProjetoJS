var formulario = document.getElementById("formulario"),
    nome = formulario.nome,
    email = formulario.email,
    assunto = formulario.assunto,
    mensagem = formulario.mensagem,
    error = document.getElementById('error');

    function validarNome(e){
        if(nome.value == '' || nome.value == null){
            console.log("por favor preencha o nome");
            error.style.display ="block";
            error.innerHTML += '<li>por favor preencha o nome</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';            
        }
    }

    function validarEmail(e){
        if(email.value == '' || email.value == null){
            console.log("por favor preencha o email");
            error.style.display ="block";
            error.innerHTML += '<li>por favor preencha o email</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';            
        }
    }

    function validarAssunto(e){
        if(assunto.value == '' || assunto.value == null){
            console.log("por favor preencha o assunto");
            error.style.display ="block";
            error.innerHTML += '<li>por favor preencha o assunto</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';            
        }
    }

    function validarMensagem(e){
        if(mensagem.value == '' || mensagem.value == null){
            console.log("por favor preencha o mensagem");
            error.style.display ="block";
            error.innerHTML += '<li>por favor preencha o mensagem</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';            
        }
    }

    function validarFormulario(e){
        error.innerHTML = ' ';

        validarNome(e);
        validarEmail(e);
        validarAssunto(e);
        validarMensagem(e);
    }

    formulario.addEventListener("submit", validarFormulario);

    var contenido = document.querySelector('#contenido')
	fetch('https://api.github.com/users/marimenvas/repos')
		.then(function(response){
			return response.json()
	})

		.then(function(data){
			console.log(data.length)
			 var cont = 0
			 for(cont=0;cont<data.length;cont++){ 
 		    	 
				
			 contenido.innerHTML +=` <div class="card">
            <a href="${data[cont].html_url}" target="blank_">  ${data[cont].name} </a>
            </div>`
        }
    })	