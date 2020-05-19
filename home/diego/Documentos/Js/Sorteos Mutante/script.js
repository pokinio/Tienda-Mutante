function espera(){
    setTimeout(function(){numeroRandom()},3000);
    var spinner = document.getElementById('resultado');
    spinner.innerHTML = `<div class="text-center mt-3" >
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-border text-ligth" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                        <div class="progress progress-striped">
                        </div>
                        </div>
                        
                        `
}


function numeroRandom (){
var numero = Math.round(Math.random()*50);
var resultado = document.getElementById('resultado')
resultado.innerHTML = `<div id="alert" class="alert alert-ligth text-center"\
 role="alert">El ganador es el numero ${numero} Felicidades</div>`; 
}

