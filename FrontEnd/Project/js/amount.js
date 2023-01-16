function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('c_result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }

  Number.prototype.format = function(){
    if(this==0) return 0;
  
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
  
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
  
    return n;
  };


 