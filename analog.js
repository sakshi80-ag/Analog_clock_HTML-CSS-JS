setInterval(()=>{
    d=new Date();
    htime=new Date().getHours();
    mtime=new Date().getMinutes();
    stime=new Date().getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
},1000);