import { sum } from "index.js"

console.log(sum)

fetch("./data_4to5.json")
  .then(function (res) {
    return res.json()
  })
  .then(function (obj) {
    해야할일(obj)
  })
function 해야할일(obj) {
  const objDateArr = []
  for (let i = 0; i < obj.length; i++) {
    objDateArr.push(obj[i].date)
  }

  const set = new Set(objDateArr)
  let labels = [...set]
  //날짜 뽑아 내기

  const data = {
    labels: labels,
    datasets: [
      {
        label: "일간 금액 ",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  }

  const config = {
    type: "line",
    data: data,
    options: {},
  }

  const myChart = new Chart(document.getElementById("myChart"), config)
}
