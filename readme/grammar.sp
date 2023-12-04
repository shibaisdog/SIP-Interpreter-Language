// --- 00. 주석 선언 --- //;


// 주석 (주석이던 코드이던 마지막줄에는 항상 세미클론이 와야한다);



// --- 01. 기본 변수 선언 --- //;


const const1?string = "Hello World";
const const2?number = 20;
const const3?string[] = ['a','b','c'];
const const4?{"main"?number,"sub"?string} = {"main":12,"sub":"12"};
const const5?Array<[number]> = [[12],[10]];
var var1?string = "Hello World";
var var2?number = 20;
let let1?string = "Hello World";
let let2?number = 20;


// --- 02. 정수 계산 --- //;


var numberInt1?number = 10;
var numberInt2?number = 20;
var numberInt3?number = numberInt1 + numberInt2;
print(numberInt3) // 30;


// --- 03. 소수점 연산 --- //;


var numberFloat1?number = 0.1;
var numberFloat2?number = 0.2;
print((numberFloat1 + numberFloat2) == 0.3); // false;
print((((numberFloat1 * 10) + (numberFloat2 * 10)) / 10) == 0.3); // true;



// --- 04. 함수 --- //;



// 함수 선언식;
fun <add::input_1,input_2>; // 첫번째 자리는 함수이름 , 두번째 자리는 특수문법(async,listen) , 세번째 자리는 인자값을 받는다;
    return input_1+input_2; // 입력받은 input_1 과 input_2 를 더한뒤 돌려보낸다;
end(); // 함수 마지막줄에는 end()을 추가한다;
add(10,20) // input_1 에 10을 input_2 에 20을 지정한다;

// 비동기함수 선언식;
fun <async_add:async:input_1,input_2>; // 두번째 자리 특수문법자리에 async 를 적는다;
    return await (input_1+input_2); // 입력받은 input_1 과 input_2 를 더한뒤 돌려보낸다 예시라 더하기로 대체;
end(); // 함수 마지막줄에는 end()을 추가한다;
async_add(10,20) // input_1 에 10을 input_2 에 20을 지정한다;

// 이벤트리스너 선언식;
fun <listen_add:listen[inputs]:output_1>; // 이벤트리스너에 inputs 를 지정합니다 / 그리고 해당 이벤트가 작동할시 output_1 에서 값이 나오면서 해당함수가 실행됩니다;
    print(output_1);
end[]; // 이때는 평소 함수와는 다르게 () 대신 [] 으로 선언;

// 클래스 선언식;
cls <test>;
    init <>;
    end();
    fun <read:class:name>;
        print(name);
    end();
end();
const aa?any = new test();
aa.read('test'); // test 출력;

cls <Foo>;
    public name?string;
    init <name?string>;
        this.name = name;
    end();
    fun <read:class:>;
        print(this.name)
    end();
end();
const foo?any = new Foo('SIP');
foo.read(); // SIP 출력;


// --- 05. 반복문 --- //;


var array?string[] = ['a','b','c','d','e'];

run <i?array>;
    print(i) // a,b,c,d,e;
end();

run <i:n?array>;
    print(i) // a,b,c,d,e;
    print(n) // 0,1,2,3,4 index 출력;
end();

run <i?5>;
    print(i) // 0,1,2,3,4;
end();

lop <true>;
    break;
end();


// --- 06. if 문 --- //;


const ifs?number = 20;
if <ifs>=10>; // true (코드를 실행합니다);
    print('this is true'); // this is true 를 출력합니다;
end();

if <ifs>=30>; // false (코드를 실행하지 않습니다);
    print('this is false'); // 해당 메시지를 출력하지 않습니다;
end();
elif <ifs==20> // true (코드를 실행합니다);
    print('this is true'); // this is true 를 출력합니다;
end();

if <ifs>=30>; // false (코드를 실행하지 않습니다);
    print('this is false'); // 해당 메시지를 출력하지 않습니다;
end();
elif <ifs==25>; // false (코드를 실행하지 않습니다);
    print('this is false'); // 해당 메시지를 출력하지 않습니다;
end();
else;
    print('this is true'); // this is true 를 출력합니다;
end();

const if_1?number = 10;
const if_2?number = 20;
if <if_1 == 10 and if_2 == 20>; // true (코드를 실행합니다);
    print('this is true'); // this is true 를 출력합니다;
end();

if <if_1 == 20 or if_2 == 20>; // true (코드를 실행합니다);
    print('this is true'); // this is true 를 출력합니다;
end();

if <not if_1 == 20 or if_2 == 20>; // false (코드를 실행하지 않습니다);
    print('this is false'); // 해당 메시지를 출력하지 않습니다;
end();


// --- 07. 에러 처리하기 --- //;


throw Error("this is Error"); // this is Error 값을 가지는 예외가 발생합니다;
throw TypeError("this is TypeError"); // this is Error 값을 가지는 타입에러가 발생합니다;

try;
    throw Error("this is Error"); // this is Error 값을 가지는 예외가 발생합니다;
    print('1') // 해당 코드위에서 예외가 발생했으므로 코드가 실행되지 않습니다;
end();
catch <error>; // 예외가 발생한것을 가져옵니다 이때 catch <> 가 없을시 프로그램이 중지됩니다;
    print(error); // 예외가 발생한 값을 가져옵니다 : this is Error;
end();
fialy; // 코드가 예외가 발생하던 발생안하던 코드를 실행합니다;
    print('2'); // 2출력;
end();


// --- 08. 모듈 불러오기 --- //;


import fs; // fs 모듈을 불러옵니다;
import fs as test; // fs 모듈을 불러온뒤 test;
import ./index; // index 파일을 불러옵니다 ;
import ./index as test; // index 파일을 불러옵니다 test;


// --- ??. 응용하기 --- //;


// (웹서버 + rate-limit);
import express;
import request-ip as requestIp;
const app?express = express();
const port?number = 3000;
app.use(requestIp.mw());
cls <ips>;
    public ip;
    init <>;
        this.ip = [];
    end();
    fun <cking:class:ip?string>;
        let count?number = 0;
        run <i:n?this.ip>;
            if <i[0] == ip>;
                if <Number(new Date()) - i[1] >= 2000>;
                    this.ip.splice(n,n);
                end();
                else;
                    count += 1;
                end();
            end();
        end();
        return count;
    end();
    fun <push:class:ip?string>;
        this.ip.push([ip,Number(new Date())]);
        return this.cking(ip);
    end();
end();
const IP?any = new ips();
fun <router::app?express>;
    fun <app.get:listen['/']:req?express.req,res?express.res>;
        print(`${new Date()} : ${req.clientIp}`);
        if <IP.push(req.clientIp) >= 4>;
            res.send({"send":"no"})
        end();
        else;
            res.send({"send":"ok"})
        end();
    end[];
end();
fun <app.listen:listen[port,'0.0.0.0']:>;
    print('Server on > '+port);
    router(app);
end[];