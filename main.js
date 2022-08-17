let i = 1;

function addtable(){
    let fname = document.getElementById('name');
    let price = document.getElementById('price');
    let howmany = document.getElementById('howmany');
    let strong = document.getElementById('strong');
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    
    
    if(fname.value == '' || price.value == ''){
        alert('toldir')
    }else{
        tr.setAttribute('class', 'text-center');
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td.innerHTML = i
        td1.innerHTML = fname.value
        td2.innerHTML = price.value
        td3.innerHTML = howmany.value + 'kg'
        td4.innerHTML = howmany.value * price.value
        td4.setAttribute('class', 'res')
        strong.innerHTML = price.value
        tr.append(td, td1, td2, td3, td4);
        tbody.appendChild(tr)
        fname.value = '';
        price.value = '';
        howmany.value = ''
        i++

        let res = document.querySelectorAll('.res');
        let sum = 0
        for (let i = 0; i < res.length; i++){
            sum = sum + +res [i].innerHTML;
        }
        strong.innerHTML=sum
    }
}
