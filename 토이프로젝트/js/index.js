fetch("./data_4to5.json")
  .then(function (res) {
    return res.json()
  })
  .then(function (obj) {
    할일(obj)
  })

function 할일(obj) {
  const list = document.querySelector(".day-money-wrap")

  const objDateArr = []
  for (let i = 0; i < obj.length; i++) {
    objDateArr.push(obj[i].date)
  }

  const set = new Set(objDateArr)
  let newDateArr = [...set]
  //날짜 뽑아 내기

  let dateFindIndexArr = []
  for (let i = 0; i < newDateArr.length; i++) {
    dateFindIndexArr.push(obj.findIndex((n) => n.date == newDateArr[i]))
  }
  // 날짜별로 인덱스 시작부터 다음 날짜 인덱스 까지 뽑기때문에 배열 마지막 인덱스 넣어주기
  dateFindIndexArr.push(obj.length)

  // let priceArr = []
  // for (let i = 0; i < newDateArr.length; i++) {
  //   priceArr.push(obj.filter((n) => n.inOut == "in"))
  // }
  // // 날짜별로 인덱스 시작부터 다음 날짜 인덱스 까지 뽑기때문에 배열 마지막 인덱스 넣어주기
  // priceArr.push(obj.length)
  // console.log(priceArr)

  for (let i = 0; i < newDateArr.length; i++) {
    const div1 = document.createElement("div")
    div1.className = "daytotal"
    const div2 = document.createElement("div")
    div2.className = "day-use-wrap"
    const p1 = document.createElement("p")
    p1.className = "day"
    p1.textContent = newDateArr[i]
    const p2 = document.createElement("p")
    p2.className = "day-spend"
    const ul1 = document.createElement("ul")
    ul1.className = "money-history"

    list.append(div1)
    div1.append(div2, ul1)
    div2.append(p1, p2)

    let sum = 0

    for (let j = dateFindIndexArr[i]; j < dateFindIndexArr[i + 1]; j++) {
      const li1 = document.createElement("li")
      li1.className = "history_list"
      const h3_1 = document.createElement("h3")
      h3_1.className = "item"
      h3_1.textContent = `${obj[j].item}`
      const h3_2 = document.createElement("h3")
      h3_2.className = "price"
      h3_2.textContent = `${obj[j].price}원`

      p2.textContent = ul1.append(li1)
      li1.append(h3_1)
      li1.append(h3_2)
      sum += obj[j].price
    }
    p2.textContent = `${sum}원`
  }
} //json파일 끝
export { sum }
