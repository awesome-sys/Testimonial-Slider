const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with my recent purchase from Apple. Their mobile phones are sleek, innovative, and user-friendly. I couldn't be happier with my new device!"
    },
    {
        name: "Lucy Thompson",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with the innovative mobile phones from Apple. The sleek design and cutting-edge technology are truly impressive. I highly recommend Apple products to all tech-savvy individuals. Their seamless performance and user-friendly interface are unmatched."
    },
    {
        name: "Emma Johnson",
        photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's mobile phones are truly revolutionary. The sleek design and cutting-edge technology make them stand out from the competition. I can't imagine my life without my Apple device. Whether for work or play, Apple products deliver exceptional performance every time."
    },
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely impressed with the quality and performance of Apple's mobile phones. The sleek design and advanced features make it a top choice for tech-savvy users. I highly recommend Apple for anyone looking for a reliable and innovative mobile device."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial () {
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 5000);
}