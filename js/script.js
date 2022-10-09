"use strict";


// Առաջին հարցի պատասխանը

let service,
    time;

const salonApp = {
    type:"Beauty Salon",
    salonName: "AnnushkaBeauty",
    openingHours:"09-00:21-00",
    workingDay: ["Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"],
    offHours:["09-00","12-00","15-00","17-00","18-30"],
    services: {
        s1: "Կոսմետոլոգիա",
        s2: "Վարսահարդարում",
        s3: "Դիմահարդարում",
        s4: "Մատնահարդարում",
        s5: "Դասընթացներ"
    },
    prices: {
        s1: {
            botox: "Բոտոքս։10.000-100.000 դրամ",
            filler: "Ֆիլլեռ։10.000-50.000 դրամ",
            massage: "Դեմքի մասաժ։5.000-10.000 դրամ",
            glowing: "Դեմքի խնամք։5.000-20.000 դրամ",
            peeling: "Պիլինգ։5.000-20.000 դրամ"
        },
        s2: {
            haircut:"Սանրվածք 1.000-10.000 դրամ",
            dreadlocks: "Դռեդեր 5.000-10.000 դրամ",
            extensions: "Մազերի երկարացում 10.000-100.000 դրամ",
            coloring: "Ներկել 5.000-30.000 դրամ",
            hairstyles: "Սանրվածքներ 10.000-20.000 դրամ"
        },
        s3: {
            dayMakeup: "Թեթև դիմահարդարում:5.000 դրամ",
            dayWithLashesMakeup: "Թեթև դիմահարդարում թարթիչներով:7.000 դրամ",
            eveningMakeup: "Երեկոյան դիմահարդարում։8.000 դրամ",
            eveningWithLashesMakeup: "Երեկոյան դիմահարդարում թարթիչներով։10.000 դրամ",
            weddingMakeup: "Հարսանեկան դիմահարդարում։30.000 դրամ"
        },
        s4: {
            manicure:"Մատնահարդարում 5.000 դրամ",
            pedicure:"Պեդիկյուր 9.000 դրամ",
            gelPolish:"Գել-լեկ 5.000 դրամ",
            design: "Դիզայն 1.000 դրամ",
            extension:"Լիցք 10.000 դրամ"
        },
        s5: {
            "Դիմահարդարման դասենթացներ":{
                duration:"Մեկ ամիս",
                price:"500.000 դրամ"
            },
            "Վարսահարդարման դասենթացներ":{
                duration:"Երեք ամիս",
                price:"800.000 դրամ"
            },
            "Մատնահարդարման դասենթացներ":{
                duration:"Երեք ամիս",
                price:"800.000 դրամ"
            }
            }
    },
    staff:{
        administrator:"Էմմի Պետրոսյան",
        manager:"Լյուսի Բակունց",
        makeupArtist: "Գոար Ավետիսյան",
        stylist:"Գեորգի Կոտ",
        nailArtist:"Մանե Կիրակոսյան"
    }
};

const sayServices = new Promise((resolve,reject) => {
    console.log (`
        Բարեւ, ես ${salonApp.staff.administrator} - եմ,բարի գալուստ "${salonApp.salonName}" գեղեցկության սրահ!
        Մեր աշխատանքային օրերը ${salonApp.workingDay[0]}-${salonApp.workingDay[5]},ժամերը ${salonApp.openingHours}
        Ցանկանու՞մ եք գրանցվել 
        `);
    setTimeout(() => {
    console.log("Ցանկանու՞մ եք գրանցվել");
    let answer = "այո";
     if (answer === "այո" ) {
        resolve();
    } else {
        reject();
    }
    },5000);
});


sayServices.then(() => {
    console.log (`Ձեզ եմ ներկայացնում մեր ծառայությունները՝`);
    for (let key in salonApp.services) {
        console.log(salonApp.services[key]);
    }
        console.log("Ո՞ր ծառայությանը կցանկանայիք գրանցվել:");
        let answer = prompt("Ո՞ր ծառայությանը կցանկանայիք գրանցվել:"); // "դիմահարդարում";
        return answer;
    
})
.then((answer)=> {
            if (answer === "դիմահարդարում") {
                console.log (`Մեր դիմահարդարը ${salonApp.staff.makeupArtist} - ը և իր մոտ դուք կարող եք անել
                `);
                for (let key in salonApp.prices.s3) {
                    console.log (salonApp.prices.s3[key]); 
                }
                console.log("Ո՞ր ծառայության գրանցվեմ:");
            } else if (answer === "կոսմետոլոգիա") {
                console.log (`Մեր կոսմետոլոգը ${salonApp.staff.makeupArtist} - ը և իր մոտ դուք կարող եք անել
                `);
                for (let key in salonApp.prices.s1) {
                    console.log (salonApp.prices.s1[key]); 
                } 
                console.log("Ո՞ր ծառայության գրանցվեմ:");
            } else if (answer === "վարսահարդարում") {
                console.log (`Մեր Վարսահարդարնը ${salonApp.staff.stylist} - ը և իր մոտ դուք կարող եք անել
                `);
                for (let key in salonApp.prices.s2) {
                    console.log (salonApp.prices.s2[key]); 
                }
                console.log("Ո՞ր ծառայության գրանցվեմ:");
            } else if (answer === "մատնահարդարում") {
                console.log (`Մեր Մատնահարդարնը ${salonApp.staff.nailArtist} - ը և իր մոտ դուք կարող եք անել
                `);
                for (let key in salonApp.prices.s4) {
                    console.log (salonApp.prices.s4[key]); 
                } 
            } else if (answer === "Լամինացիա") {
                console.log (`Մեր կոսմետոլոգը ${salonApp.staff.makeupArtist} - ը և իր մոտ դուք կարող եք անել
                `);
                for (let key in salonApp.prices.s5) {
                    console.log (salonApp.prices.s5[key]); 
                }
                }
            let ans = prompt("Ո՞ր ծառայությանը կցանկանայիք գրանցվել:");// "Երեկոյան դիմահարդարում";
            return ans;
})
.then((answer) => {
    console.log (`Բարի,ես գրանցում եմ ձեզ ${answer} ծառայության համար:`);
    service = answer;
        let day = prompt('Իսկ որ ժամանակի համար');
        return answer,day;
})
.then((answer,day) => {
    if (salonApp.offHours.indexOf(answer) !== -1 && salonApp.workingDay.indexOf(day) !== -1) {
        console.log (`Բարի,այդ ժամը մեր մոտ ազատ է,կարող ենք գրանցել`);
        time = `${answer},${day} որը`;
} else {
    console.log("Ցավոք, այդ ժամը զբաղված է, բայց մենք կարող ենք ձեզ առաջարկել");
    salonApp.offHours.forEach (function (item) {
        console.log (item);
        console.log("Խնդրում ենք ճիշտ լրացնել տվյալները, Ընտրեք ցանկից");
    });
}
})
.then((answer,day) => {
        if (salonApp.offHours.indexOf(answer) !== -1 && salonApp.workingDay.indexOf(day) !== -1) {
            console.log (`Բարի,այդ ժամը մեր մոտ ազատ է,կարող ենք գրանցել`);
            time = `${answer},${day} որը`;
            return time;
    }
})
.then(()=> {
    console.log(`Բարի,դուք գրանցված եք ${service} - ի, ժամը ${time}`);
})
.catch(() => {
    console.log (`Խնդրում ենք ճիշտ լրացնել տվյալները, Ընտրեք ցանկից 
    `);
})
.finally(() => {
    console.log(`Շնորհակալություն մեր սալոնով հետաքրքրված լինելու համար`);
});


// Երկրորդ հարցի պատասխանը
// Promise race 


const promise = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(seconds);
        },seconds);
    });
};


Promise.race([promise(1000),promise(20),promise(3000)]).then((res) => {
    console.log(`Arajine ashxatec promise ${res}`);
});

