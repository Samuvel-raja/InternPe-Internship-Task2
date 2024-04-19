const btns=document.getElementsByClassName('btn-success');
const element=document.querySelector('.row-one');
const center=document.getElementById('center');
for(i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',(e)=>
    {
        let btn=e.target;
        let btnparent=btn.parentElement;
        let btngrandparent=btnparent.parentElement;
        let btnname=btngrandparent.children[0].children[0].innerText;
        let btnbrand=btngrandparent.children[0].children[1].innerText;
        let btnImg=btnparent.parentElement.parentElement.children[0].src;
        let newEl=document.createElement('div');
        newEl.className="col-md-3";
        center.innerHTML=`<h1>CART</h1>`
        newEl.innerHTML=`
        <div class="addtocart card">
            <img src="${btnImg}" alt="">
            <div class="card-body">
                <p>${btnname}</p>
            </div>
        </div>
    `;
        element.appendChild(newEl);

    })

}
