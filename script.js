const names=document.getElementById('names')
const form=document.getElementById('form')
const email=document.getElementById('email')
const errorElement=document.getElementById('error')


form.addEventListener('submit',(e)=>{
    let messages=[]
    if(names.value==='' || names.value==null){
        messages.push("Name is required")
    }
    if(ph.value.length <10){
        messages.push("Enter a valid phone number")
    }
    
    if(messages.length>0)
    {
    e.preventDefault()
    errorElement.innerText=messages.join(',')
    }
})

