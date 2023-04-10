
class Hedar {
  constructor(ht) {
    this.ht = ht;
  }
}

let hdr = new Hedar(
  `<nav class="navbar navbar-expand-lg text-light">
  <div class="container-fluid">
    <p class="navbar-brand text-light"><i class="fa-brands fa-spotify"></i> spotify</p>
    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ac1 text-light">
          <p class="nav-link active text-light" aria-current="page">Home</p>
        </li>
        <li class="nav-item text-light ac2">
          <p class="nav-link text-light">Watch the product</p>
        </li>
        <li class="nav-item dropdown ac4">
          <a class="nav-link text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          paying off
          </a>
        </li>
        <li class="nav-item ac3">
          <p class="nav-link disabled text-light"><i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i> cart</p>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="asas"></div>
`
);
class foot{
  constructor(foo){
    this.foo = foo
  }
}
let ftr = new foot(
  `
  <footer class="d-flex justify-content-center align-items-center conrd flex-wrap">
    <ul class="">
    <li><i class="fa-brands fa-spotify"></i> spotify</li>
    <li>Take Your Fashion Game to the Next</li>
    <li>Level with Our Streetwear Collection</li>
    </ul>
    <ul class="">
    <li>About</li>
    <li>Company</li>
    <li>Contact</li>
    </ul>
    <ul class="">
    <li>Discover</li>
    <li>Collaboration</li>
    <li>Coming Soon</li>
    </ul>
    <ul class="">
    <li>FAQ</li>
    <li>Terms of Service</li>
    <li>policy Service</li>
    </ul>
    <ul class="">
        <li>Join Our News Collection</li>
        <input type="text" placeholder="">
    </ul>
</footer>
  `
)
document.write(hdr.ht)
document.write(ftr.foo)
let cl = document.querySelector(".ac1");
let c2 = document.querySelector(".ac2");
let c3 = document.querySelector(".ac3");
let c4 = document.querySelector(".ac4");
let qr = document.querySelector(".navbar-nav")
let cont = document.querySelector(".asas")
cont.innerHTML = carous12.carous;
cl.onclick = function(){
  cont.innerHTML = carous12.carous;
  cl.style.borderBottom='3px solid';
c2.style.borderBottom='none';
c4.style.borderBottom='none';
c3.style.borderBottom='none';
}

