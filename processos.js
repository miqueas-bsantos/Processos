function iniciar (e) {
 		e.classList.toggle("fechado");
 	}
 	
 	
 	function buscar () {
 		var ant = "";
 		var aux = 0;
 		var campoBuscar = document.getElementById("search").value.toString();
 		
 		var palavrasChaves = new Array(new Array(3), new Array(3), new Array(3));
		palavrasChaves[0][0] = "tecnologias";
 		palavrasChaves[0][1] = "tecnologias";
 		palavrasChaves[0][2] = "MÁQUINA, MAQUINA, BANDA LARGA, FIXA, MOVEL, POS, GPRS, TEF, DISCADO, ICP 250, INTERNET, MOBILE, PINPAD, TROCA, tecnologias";

 		palavrasChaves[1][0] = "taxa";
 		palavrasChaves[1][1] = "taxa";
 		palavrasChaves[1][2] = "maquina,TAXA, taxas, bandeiras, mdr";

 		palavrasChaves[2][0] = "cancelamento,processos/alteracao/endereco/endereco.html,nada";
 		palavrasChaves[2][1] = "cancelamento,conteudo,conteudo2";
 		palavrasChaves[2][2] = "venda, financeiro, maquinas, mdr";



		var div = document.getElementById("pesquisas");
 		div.innerHTML = "";
 		for (var i =0; i < palavrasChaves.length; i++) {
 			var palavras = (palavrasChaves[i][2]).split(",");
 				for (var j = 0; j < palavras.length; j++) {

 					var valido = contains((palavras[j]+"").replace(" ", "").toUpperCase(), (campoBuscar+"").replace(" ", "").toUpperCase());
 					//console.log(contains((palavras[j]+"").replace(" ", "").toUpperCase(), (campoBuscar+"").replace(" ", "").toUpperCase()))
 					if (valido  & palavrasChaves[i][1]!=ant) {
 						var links = (palavrasChaves[i][0]).split(",");
 						var conteudo = (palavrasChaves[i][1]).split(",");
 						for (var k = 0; k < links.length; k++) {
 							var s = document.createElement("a");
	 						//console.log(palavrasChaves[i][0] + "" + i);
	 						aux++;
	 						var li = document.createTextNode(conteudo[k]);
		 					var br = document.createElement("br");
		 					div.appendChild(br);
		 					s.setAttribute("href", links[k]);
		 					s.setAttribute("style", "top: 50px; font-size: 20px;");
		 					s.appendChild(li);
		 					div.appendChild(s);
		 					ant = (palavrasChaves[i][k]);
 						}

 						
 					}
 				}
 		}
 		
 		if (aux == 0) {
 			div.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">"+
		  "<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>"+
		  "<span class=\"sr-only\">Error:</span>"+
		  " Nenhum dado foi encontrado em sua busca"+
		  "</div>";;
 		}
 		if (campoBuscar=="") {
 		  div.innerHTML= "<div class=\"alert alert-danger\" role=\"alert\">"+
		  "<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>"+
		  "<span class=\"sr-only\">Error:</span>"+
		  " Digite um valor para Busca"+
		  "</div>";
 		}
 		
 	}


 	function contains(palavraChave, campoBusca){
 		
 		var contador = 0;
 		campoBusca.toUpperCase();
 		palavraChave.toUpperCase();
 		for (var i = 0; i < palavraChave.length; i++) {
			
			if(palavraChave.charAt(i)==campoBusca.charAt(i)){
				contador++;
			}
			//console.log(palavraChave.charAt(i) +" "+ campoBusca.charAt(i))			
 		}
 		//console.log(palavraChave +" "+ contador);

 		return (contador > (palavraChave.length/2));
 	}