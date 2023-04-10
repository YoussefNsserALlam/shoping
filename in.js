class Prod{
    constructor(jct){
        this.jct = jct
    }
}
let brodect = new Prod(
    `
    <div class="card mb-3 focd">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/jp-6.jpg" class="fotimg rounded-start imgbg" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">SHOES WASATCH RUNNING</h5>
        <p class="card-text">Sports shoes available in wonderful and attractive colors</p>
        <p class="card-text"><small class="text-muted"></small>300$</p>
        <input type="number">
        <button type="button" class="btn btn-dark">add to card</button>
      </div>
    </div>
  </div>
  <div class="dimg conrd">
  <img src="./img/jp-6.jpg" class="img-fluid rounded-start iomg" alt="...">
  <img src="./img/jp-7.jpg" class="img-fluid rounded-start iomg" alt="...">
  <img src="./img/jp-8.jpg" class="img-fluid rounded-start iomg" alt="...">
  <img src="./img/jp-2.jpg" class="img-fluid rounded-start iomg" alt="...">
  </div>
</div>
    `
)
c2.onclick = function(){
    cont.innerHTML = brodect.jct;
    let tagh = document.querySelectorAll(".iomg");
    for(let i=0; i<tagh.length; i++){
        tagh[i].onclick = function(){
            let imgbg = document.querySelector(".imgbg");
            imgbg.src=tagh[i].src
        }
    }
    c2.style.borderBottom='3px solid';
  c3.style.borderBottom='none';
  c4.style.borderBottom='none';
  cl.style.borderBottom='none';
  }
//   for (let i = 0; i < 4; i++ ){
//     let iom = document.querySelector(".dimg img");
//     console.log(iom)
//   }