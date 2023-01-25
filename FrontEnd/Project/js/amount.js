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
      
      if(number <= 0 ){
        number = 1;
      }
    }

    // 수량 개수 출력
    resultElement.innerText = number;

    // 총 금액 출력
    const price = document.getElementById('price').innerText;
    let totalcost = number * price ;
    document.getElementById('total');
    total.textContent = totalcost.toLocaleString('ko-KR');
  }

