(function(){
	
	var actualizarHora = function(){
		var fecha = new Date(),
			AmPm,
			horas = fecha.getHours(),
			min = fecha.getMinutes(),
			seg	= fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var pHoras = document.getElementById('horas'),
			pAmPm = document.getElementById('AmPm'),
			pmin = document.getElementById('min'),
			pseg = document.getElementById('seg'),
			pdiaSemana = document.getElementById('diaSemana'),
			pdia = document.getElementById('dia'),
			pmes = document.getElementById('mes'),
			pyear = document.getElementById('year');
	
		var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
		pdiaSemana.textContent = semana[diaSemana];

		pdia.textContent = dia;

		var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		pmes.textContent = meses[mes];

		pyear.textContent = year;

		if (horas>=12){
			horas = horas - 12;
			AmPm = 'Pm';
		} else{
			AmPm = 'Am';
		};

		if (horas == 0){
			 horas = 12;
		};

		pHoras.textContent = horas;
		pAmPm.textContent = AmPm;

		if(min < 10){min = "0" + min};
		if(seg < 10){seg = "0" + seg};

		pmin.textContent = min;
		pseg.textContent = seg;

	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora,1000);

}())