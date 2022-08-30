<?php 

class MvcController{

	public function template(){
		include "views/template.php";
	}

	public function enlacesPaginasController(){

		if(isset( $_GET['action'])){
			
			$enlaces = $_GET['action'];
		
		}

		else{

			$enlaces = "index";
		}

		$respuesta = MvcModels::enlacesPaginasModel($enlaces);

		include $respuesta;

	}
}