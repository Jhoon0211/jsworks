let customer = prompt("입장객의 수는 몇명인가요?"); //입장객 수
        let colNum = prompt("한 줄에 몇 명씩 앉나요?");    //열의수
        let rowNum;        //행(줄)의 수

        // 나머지가 있는지 없는지 처리하는 것이 중요, %연산자 사용
        if(customer == null || colNum == null){
            document.write("입력이 취소되었습니다.");
        }
        else{
            if(parseInt(customer) % parseInt(colNum) == 0){
            rowNum = customer / colNum;
            }else{
                rowNum = parseInt(customer / colNum) + 1;
            }
            //document.write(rowNum + " 개의 줄이 필요합니다.");
            }

        document.write("<table>")
        for(var i = 0; i < rowNum; i++){
            document.write("<tr>")
            for(var j=1; j <= colNum; j++){
                var seatNum = colNum * i + j;
                if(seatNum > customer) //좌석번호가 고객수보다 클때
                    break;
                document.write("<td>좌석 " + seatNum + "</td>");
                }
            document.write("</tr>");
        }
        document.write("</table>")