function calcula()
{
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let r1 = document.getElementById("raiz1");
    let r2 = document.getElementById("raiz2");

    let va = parseInt(a.value);
    let vb = parseInt(b.value);
    let vc = parseInt(c.value);
    let delta = (vb*vb)+(-4*(va*vc));
    if(delta>0){
        let rd = Math.sqrt(delta);
        let ra1 = (-vb + rd)/(2*va);
        let ra2 = (-vb - rd)/(2*va);
        r1.textContent = ra1;
        r2.textContent = ra2;
   }
   if(delta==0){
       let res = (-vb)/(2*a);
       r1.textContent = res;
   }


}
