const viewsConvertor = (view) =>{
    if (view < 1000) {
        return view + "";
    } 
    else if (view >= 1000 && view < 10000) {
        const num = view/1000;
        const sort_view = num.toFixed(1);
        const txt = sort_view + "k"
        return txt;
    }
    else if (view >= 10000 && view < 1000000) {
        const num = parseInt(view/1000);
        const txt = num + "k"
        return txt;
    }
    else{
        const num = view/1000000;
        const sort_view = num.toFixed(1);
        const txt = sort_view + "M"
        return txt;
    }
}

const ageCalculator = (up_date) =>{
    let input_date = new Date(up_date)
    let current_date = new Date()

    let diff_time = current_date - input_date

    if (diff_time < 86400000) {
        let time = parseInt(diff_time/3600000)
        let t = time + " hours"
        return t;
    }
    else if (diff_time >= 86400000 && diff_time < 604800000) {
        let time = parseInt(diff_time/86400000)
        let t = time + " days"
        return t;
    }
    else if (diff_time >= 604800000 && diff_time < 2592000000) {
        let time = parseInt(diff_time/604800000)
        let t = time + " weeks"
        return t;
    }
    else if (diff_time >= 2592000000 && diff_time < 31536000000) {
        let time = parseInt(diff_time/2592000000)
        let t = time + " months"
        return t;
    }
    else {
        let time = parseInt(diff_time/31536000000)
        let t = time + " years"
        return t;
    }
}

function AddCards(title, cname, duration, thumb, views, udate) {
    const sview = viewsConvertor(views);
    const sudate = ageCalculator(udate);
    const html = `<div class="card">
    <div class="img">
        <img src="${thumb}" alt="">
        <div class="timer">${duration}</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <div class="meta_info">
            ${cname} . ${sview} views . ${sudate} ago
        </div>
    </div>
</div>`

const cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforeend" , html);
}

console.log(`enter the function in this format: \n AddCards("title of the video", "Channel Name", duration of the video (hh:mm:ss), "Thumbnain link", views of the video, upload date(yyyy-mm-dd))`)

// AddCards("Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5", "CodeWithHarry" , "18:20" , "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q" , 283259 , "2023-11-05")
// AddCards("SennaRin「Reaper」×TVアニメ『BLEACH 千年血戦篇』ANIMATION MV│第3クール２０２４年放送開始", "SennaRin" , "3:35" , "https://i.ytimg.com/vi/m6rC_bMPLG8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzYgIbVHBfeEG9cAz51jYyBiUf-g" , 993950 , "2024-103-23")
