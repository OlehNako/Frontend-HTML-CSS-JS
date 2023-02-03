var number = document.querySelectorAll('.number');
var inp = document.querySelector('.calculator__inp');
var sign  = document.querySelectorAll('.sign');
var result = document.querySelector('.result');
var cleaner = document.querySelector('.clear');
var toggleSign = document.querySelector('.toggleSign');
var percent = document.querySelector('.percent');

		for(i=0;i<number.length;i++){
			number[i].addEventListener('click', insertValue);
		}

		for(i=0;i<sign.length;i++){
			sign[i].addEventListener('click', checkSign);
		}

        function insertValue() {
            inp.value += this.innerText;
        }

        function checkSign() {
            if (!isNaN(inp.value[(inp.value.length-1)])) {
                inp.value += this.innerText;
            }
        }

		result.addEventListener('click',getResult);

		function getResult(){
            inp.value = eval(inp.value);
		}

		document.body.addEventListener('keydown',function(e){
			if(e.keyCode == 13){
                getResult();
            }
        })

        cleaner.addEventListener('click', clearInp); 
        
        function clearInp() {
            inp.value = "";
        }
        
        toggleSign.addEventListener('click', doNegat);
            
        function doNegat() {
            inp.value = -inp.value ;
            }

        percent.addEventListener('click', findPercent);

        function findPercent() {
            inp.value = inp.value / 100;
        }