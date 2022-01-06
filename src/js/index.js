function execWarekiToSeireki(){
    commonExecfunc('warekiInput','seirekiOutput');
}

function execSeirekiToWareki(){
    commonExecfunc('seirekiInput','warekiOutput');
}

function commonExecfunc(inputId,outputId){
    var input = document.getElementById(inputId).value;

    var judgeWarekiSeireki = function(){
            if(inputId==='warekiInput'){
                return convertWarekiToSeireki(input);
            }
            else if(inputId==='seirekiInput'){
                return convertSeirekiToWareki(input)
            }
            else{
                return null;
            }
        }

    var result = judgeWarekiSeireki();

    if(!result){
        //error logic
    }
    else{
        var output = document.getElementById(outputId);
        output.value = result;
    }
}