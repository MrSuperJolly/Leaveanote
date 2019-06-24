async function sendNote(note){

  
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(note)

    };
    
    
    const response = await fetch('/api', options);
    const data =  await response.json();
    
    

}

async function getAllNotes(){

   
    const response = await fetch('/api');
    const data = await response.json();
   
    console.log(data);
    for (item of data){
        allNotes.push(item);
    }


}


