let p1Display = document.querySelector('#p1Display')
let p2Display = document.querySelector('#p2Display')

let p1Button = document.querySelector('#p1Button')
let p2Button = document.querySelector('#p2Button')

let resetButton = document.querySelector('#resetButton')

let playto = document.querySelector('#playto')

let p1Score = 0
let p2Score = 0
let winningScore = 3 // ให้ winningScore default value เป็น 3 คือเริ่มต้มของ dropdown เลย
let isGameOver = false // ถ้าเกมถึง winningScore เมื่อไหร่ isGameOver จะเป็น true ทำให้กดปุ่มเพิ่มคะแนนอีกไม่ได้แล้ว

//// ถ้าไม่เขียน function (updateScore) แยก และจัดกลุ่มของ p1, p2 (object) แยก ก็ต้องเขียนแยก condition แบบนี้

p1Button.addEventListener("click", function() { // ทำให้ปุ่ม p1 กดบวกเพิ่มคะแนนทีละ 1 ได้
    if (!isGameOver) { // ดูว่า Game Over แล้วรึยัง
        p1Score += 1 // ถ้ายังไม่จบให้มันเอาคะแนนบวก 1
        if (p1Score == winningScore) { // ถ้าคะแนนที่บวก 1 เท่ากับคะแนนที่ชนะ
            isGameOver = true // ให้มันจบเกมส์แล้วกดปุ่มทั้ง p1 และ p2 ไม่ได้อีก
            
            // ให้มันเปลี่ยนสีด้วย ถ้าชนะสีเขียว แพ้สีแดง
            p1Display.classList.add('winner')
            p2Display.classList.add('looser')
        }
    }
    p1Display.textContent = p1Score
})

p2Button.addEventListener("click", function() { // ทำให้ปุ่ม p2 กดบวกเพิ่มคะแนนทีละ 1 ได้
    if (!isGameOver) { // ดูว่า Game Over แล้วรึยัง
        p2Score += 1 // ถ้ายังไม่จบให้มันเอาคะแนนบวก 1
        if (p2Score == winningScore) { // ถ้าคะแนนที่บวก 1 เท่ากับคะแนนที่ชนะ
            isGameOver = true // ให้มันจบเกมส์แล้วกดปุ่มทั้ง p1 และ p2 ไม่ได้อีก
            
            // ให้มันเปลี่ยนสีด้วย ถ้าชนะสีเขียว แพ้สีแดง
            p1Display.classList.add('looser')
            p2Display.classList.add('winner')
        }
    }
    p2Display.textContent = p2Score
})

// // สร้างกรุ๊บสำหรับ function "updateScore"
// let p1Group = {
//     score   : 0,
//     button  : document.querySelector('#p1Button'),
//     display : document.querySelector('#p1Display')
// }

// let p2Group = {
//     score   : 0,
//     button  : document.querySelector('#p2Button'),
//     display : document.querySelector('#p2Display')
// }

// // รับ argument มาจาก fuction ด้านล่าง คือถ้าสำหรับ p1Button ตัว p1Group = player และ p2Group = oppenent
// // รับ argument มาจาก fuction ด้านล่าง คือถ้าสำหรับ p2Button ตัว p2Group = player และ p1Group = oppenent

// p1Button.addEventListener("click", function() { // ทำให้ปุ่ม p1 กดบวกเพิ่มคะแนนทีละ 1 ได้
//     updateScore(p1Group,p2Group)
// })

// p2Button.addEventListener("click", function() { // ทำให้ปุ่ม p2 กดบวกเพิ่มคะแนนทีละ 1 ได้
//     updateScore(p2Group,p1Group)
// })

// // สร้าง function เพราะด้านบนที่ใช้เช็คเงื่อนไขว่ามีการคลิกเข้ามาให้เปลี่ยนสี ต่างๆ มันซ้ำซ้อนกันระหว่าง p1 กับ p2
// // เลยสร้างเป็น function กลางไปเลย แต่ก่อนสร้าง function จะกรุ๊ปรวมของ p1 กับ p2 ก่อน

// function updateScore(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1
//         if (player.score == winningScore) {
//             isGameOver = true
//             player.display.classList.add('winner')
//             opponent.display.classList.add('looser')
//             player.button.disable = true
//             opponent.button.disable = true
//         }
//     }
//     player.display.textContent = player.score
// }


resetButton.addEventListener("click", reset) // ทำให้ปุ่ม reset คะแนนเป็น 0 ได้ (อิงจาก function ชื่อ reset)

playto.addEventListener("change", function() { // ให้ winningScore อิงตามการเปลี่ยนแปลงของ dropdown จำนวนตาที่เล่น
    winningScore = Number(this.value)
    reset() // ถ้ามีการเปลี่ยน playto ให้มัน reset คะแนนใหม่เลย (อิงจาก function ชื่อ reset)
})

function reset() { 
    // function ทำให้ปุ่ม reset คะแนนเป็น 0 ได้
    // ถ้ามีการเปลี่ยน playto ให้มัน reset คะแนนใหม่เลย (logic เดียวกับปุ่ม reset)
    
    isGameOver = false
    p1Score = 0
    p2Score = 0
    
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    
    
    // ถ้าชนะสีเขียว แพ้สีแดง แต่ถ้ากด reset ให้ลบ class ออก
    p1Display.classList.remove('winner','looser')
    p2Display.classList.remove('winner','looser')
}

