<?php 

class MvcModels{
	public function enlacesPaginasModel($enlaces){


		if($enlaces == "inicio" || 
		   $enlaces == "servicios" || 
		   $enlaces == "servicios2" ||
		   $enlaces == "nosotros" || 
		   $enlaces == "contacto" ||
		   $enlaces == "modernizacion" ||
		   $enlaces == "instalaciones" ||
		   $enlaces == "mantenciones" ||
		   $enlaces == "reparaciones" ||
		   $enlaces == "emergencias" ||
		   $enlaces == "normalizacion"){

			$module =  'views/modules/'.$enlaces.'.php';
		
		}

		else if($enlaces == "index"){

			$module =  "views/modules/inicio.php";
		
		}

		
		else{

			$module =  "views/modules/inicio.php";

		}
		
		return $module;

	}
}