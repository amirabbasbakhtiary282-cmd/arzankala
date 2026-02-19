let buy=[/*'سیپی کالاف دیوتی','یوسی پابجی','جم فری فایر','جم کلش آف کلنز'*/]
const mycourse=document.querySelector('#mycourse')
const newcourse=document.querySelector('#newcourse')
const btnaddcourse=document.querySelector('#btnaddcourse')

const showcourse=()=>{
    let allcourse=''
    buy.forEach(item=>{
        allcourse+=`<li>${item}</li>`
    })
    mycourse.innerHTML=allcourse
}

btnaddcourse.onclick=()=>{
    buy.push(newcourse.options[newcourse.selectedIndex].text)
    showcourse()
}

showcourse()