const API = "https://69e59424ce4e908a155e2650.mockapi.io/Bhh/chyngyz"
const block = document.getElementById("block")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const text = document.getElementById("text")
const url = document.getElementById("url")
const save_btn = document.getElementById("save")

async function kural() {
    let payload = {
        name: input1.value,
        year: input2.value,
        text: text.value,
        image: url.value,
    }
 try{
    const res = await fetch(API,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    });

    const data = await res.json();
   alert("koshuldu")
 }
 catch(error){
    console.log(error);
    
 }
}

save_btn.onclick = kural

