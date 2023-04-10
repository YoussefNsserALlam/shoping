class Sala{
    constructor(sla){
        this.sla = sla
    }
}
let sas = new Sala(
    `
    <table class="table container">
<thead>
    <tr>
    <th scope="col">photo</th>
    <th scope="col">Type</th>
    <th scope="col">price</th>
    <th scope="col">the name</th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row"><img src="./img/jp-7.jpg" alt=""></th>
    <td>shseo</td>
    <td>50$</td>
    <td>@allam</td>
    </tr>
    <tr>
    <th scope="row"><img src="./img/jp-1.jpg" alt=""></th>
    <td>shose</td>
    <td>50$</td>
    <td>@allam</td>
    </tr>
    <tr>
    <th scope="row"><img src="./img/jp-2.jpg" alt=""></th>
    <td colspan="">shseo</td>
    <td>50$</td>
    <td>@allam</td>
    </tr>
</tbody>
</table>
<div class="daf conrd">
        <h4>The total amount</h4>
        <h4>500$</h4>
        <button type="button" class="btn btn-dark">going to pay</button>
    </div>
    `
)
c3.onclick = function(){
    cont.innerHTML = sas.sla;
c3.style.borderBottom='3px solid';
c2.style.borderBottom='none';
c4.style.borderBottom='none';
cl.style.borderBottom='none';
}