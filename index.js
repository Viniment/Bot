const { firefox } = require("playwright");
var readline = require("readline-sync");
var SaldoInicial = 0
var usuario = "ScripterOficial"
function LogMenu() {
  console.clear();
  console.log(
    "\x1b[32m",
    "----------------------------[BOT ADFREEWAY]----------------------------\n"
  );
}

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
var horas = ("0" + date_ob.getHours()).slice(-2);
var minutos = ("0" + date_ob.getMinutes()).slice(-2);
var segundos = ("0" + date_ob.getSeconds()).slice(-2);



function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await firefox.launch({
    headless: false,
    args: ["--start-maximized --mute-audio"],
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://adfreeway.com/users/sign_in");

  LogMenu();
 
  console.clear();

  LogMenu();
  console.log(
    `\x1b[31m[ * ]\x1b[32m Bem Vindo ao Bot\n\n\x1b[31m[ * ]\x1b[32m Bot Criado Por : \x1b[31m${usuario}\n`
  );
  terminei = readline.question(
    "--[ Depois de Logar No ADFREEWAY, Aperte Enter ]--\n\n"
  );

  console.clear();
  LogMenu();
  console.log(
    `\x1b[31m[ * ]\x1b[32m Bot ADFREEWAY Em Execução \n\n\x1b[31m[ * ]\x1b[32m Bot Criado Por : \x1b[31m${usuario}\n\n\x1b[31m[ * ] \x1b[32mBot Iniciado Às : \x1b[31m${date + "/" + month + "/" + year + " " + horas + ":" + minutos + ":" + segundos} \n`
  );


  await page.goto("https://adfreeway.com/myaccount/content")
  console.log(
    `\x1b[31m[ * ]\x1b[32m Obtendo O Valor Inicial de Pontos\n`
  );
  await page.waitForTimeout(1000);
  try {
    var JSONConfig = await page.evaluate(() => {
    window.SaldoInicial = document.getElementsByClassName("accountbalance")[0].innerText;
    var ARRAYConfig = {
      SaldoInicial: `${SaldoInicial}`
    };
    return ARRAYConfig;
  });
  await page.waitForTimeout(2000);

} catch(err){}

global.SaldoInicial = JSONConfig.SaldoInicial


  if (terminei == "") {
    while (true) {

      console.clear();
      LogMenu();
      console.log(
        `\x1b[31m[ * ]\x1b[32m Bot ADFREEWAY Em Execução \n\n\x1b[31m[ * ]\x1b[32m Bot Criado Por : \x1b[31m${usuario}\n\n\x1b[31m[ * ] \x1b[32mBot Iniciado Às : \x1b[31m${date + "/" + month + "/" + year + " " + horas + ":" + minutos + ":" + segundos} \n`
      );
    
        async function RepeatOnFail(){
          var Continuar = 'SIM'
          while (Continuar == 'SIM') {
            try {
              await page.goto("https://adfreeway.com/myaccount/content")
              var Continuar = 'NÂO'
            } catch(err) {Continuar = 'SIM'}
            }

        }
      await RepeatOnFail();
      await page.waitForTimeout(3000);
      try {
        var JSONConfig = await page.evaluate(() => {
        window.SaldoAtual = document.getElementsByClassName("accountbalance")[0].innerText;
        var ARRAYConfig = {
          SaldoAtual: `${SaldoAtual}`
        };
        return ARRAYConfig;
      });
      SaldoGanho = JSONConfig.SaldoAtual - global.SaldoInicial
    } catch(err){}



      console.log(
        `\x1b[31m[ * ]\x1b[32m Seu Saldo Atual : \x1b[31m${JSONConfig.SaldoAtual} \n\n\x1b[31m[ * ]\x1b[32m Ganhou : \x1b[31m${SaldoGanho.toFixed(4)}\n`
      );
      console.log(
        "\x1b[31m",
        "-----------------------------------------------------------------------\n"
      );
    
      console.log(
        `\x1b[31m[ + ]\x1b[32m LOG : \n`
      );
      console.log(
        `\x1b[31m[DEV] ACESSANDO O SITE DA ADFREEWAY !\n`
      );
      await page.waitForTimeout(5000);
      console.log(
        `\x1b[31m[DEV] ESPERANDO 5 SEGUNDOS !\n`
      );
      console.log(
        `\x1b[31m[DEV] TENTANDO REALIZAR AS ACÕES NO ADFREEWAY !\n`
      );
      try {await page.evaluate(() => document.getElementsByClassName("left-btn-form")[0].getElementsByTagName("input")[2].click())} catch(err){}
      try {await page.evaluate(() => document.getElementsByClassName("right-btn-form")[1].getElementsByTagName("input")[2].click())} catch(err){}
      try {await page.evaluate(() => document.getElementsByClassName("right-btn-form")[3].getElementsByTagName("input")[2].click())} catch(err){}
      try {await page.evaluate(() => document.getElementsByClassName("left-btn-form")[5].getElementsByTagName("input")[2].click())} catch(err){}
      console.log(
        `\x1b[31m[DEV] ESPERANDO 2 SEGUNDO PARA REINICIAR BOT !\n`
      );
      await page.waitForTimeout(2000);
    }

  } else {
    await browser.close();
  }
})();
