const courselist=document.querySelector('#course-list');
const form=document.querySelector('#add-cafe-form')
//create elements and reder courses
function rendercourses(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let money= document.createElement('span');
    let reach=document.createElement('span');
    let cross=document.createElement('div')
    li.setAttribute('id', doc.id);
    name.textContent = doc.data().name;
    money.textContent = doc.data().money;
    reach.textContent = doc.data().reach;
    cross.textContent='x';

    li.appendChild(name);
    li.appendChild(money);
    li.appendChild(reach);
    li.appendChild(cross);

    courselist.appendChild(li);
    cross.addEventListener('click', (e)=> {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('id');
        db.collection('partners').doc(id).delete();
        
    })
}


// //getting data from db
// db.collection('courses').orderBy('name').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc =>{
//         rendercourses(doc);
//     })
// })

//save data in db
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('partners').add({
        name: form.name.value,
        city: form.city.value
    })
    form.name.value='';
    form.city.value='';
})

db.collection('partners').onSnapshot(snapshot=>{
    let changes=snapshot.docChanges();
    changes.forEach(change => {
        if(change.type=='added'){
            rendercourses(change.doc);
        } else if(change.type=='removed'){
            let li=courselist.querySelector('[id=' + change.doc.id + ']');
            courselist.removeChild(li);
        } else if(change.type=='modified'){
            let li=courselist.querySelector('[id=' + change.doc.id + ']');
            courselist.removeChild(li);
            rendercourses(change.doc);
        }
       
    })
})