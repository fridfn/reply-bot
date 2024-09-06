const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');
const loaders = document.getElementById('loaders');
const container = document.getElementsByClassName('container');

let init = 0;

const botSay = (data) => {
 return [
 "Hai. nama saya FaBot, siapa nama kamu?",
 `Hallo ${data?.nama}, berapa usia kamu?`,
 `ohhh ${data?.usia} tahun, apa hobbi kamu?`,
 `ihh sama dongg aku juga hobbi ${data?.hobbi}, btw punya pacar ga?`,
 `ohh ${data?.pacar}, yaudah klo gitu udah dulu yaa?`,
 ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
 init++
 if (jawaban.value.length < 1) return alert("tolong jawab terlebih dahulu yaa🥺");
 if (init === 1) {
  botDelay({ nama: jawaban.value })
 }
 else if (init === 2) {
  botDelay({ usia: jawaban.value })
 }
 else if (init === 3) {
  botDelay({ hobbi: jawaban.value })
 }
 else if (init === 4) {
  botDelay({ pacar: jawaban.value })
 }
 else if (init === 5) {
  finishing()
 }
  else {
   botEnd()
  }
}

function botDelay(jawabanUser) {
 loaders.style.display = "block"
 container[0].style.filter = "blur(2px)"
 setTimeout(() => {
 pertanyaan.innerHTML = botSay(jawabanUser)[init]
 loaders.style.display = "none"
 container[0].style.filter = "none"}, [1600])
 usersData.push(jawaban.value)
 jawaban.value = ""
 }

function finishing() {
 pertanyaan.innerHTML = `makasih yaa ${usersData[0]} udah main ke FaBot, kapan kapan kita
 ${usersData[2]} bareng ya😁`
 jawaban.value = `makasih jugaa`
}

function botEnd() {
 window.location.reload()
}