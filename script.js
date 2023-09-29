document.querySelector(".burger-bar").addEventListener("click", ()=> {
    document.getElementById("left-cont").classList.toggle("left-container-display")
    document.getElementById("left-cont-expand").classList.toggle("display")
    document.querySelector(".right-container").classList.toggle("right-container-expand")
    // document.querySelector(".scrollbar-box").classList.toggle("scrollbar-box-shrink")
})

document.querySelector(".left-container-expand").addEventListener("mouseover", ()=> {
    document.querySelector("#body-content").classList.add("no-scroll")
})
document.querySelector(".left-container-expand").addEventListener("mouseout", ()=> {
    document.querySelector("#body-content").classList.remove("no-scroll")
})
document.querySelector("#body-content").addEventListener("mouseover", ()=> {
    document.querySelector(".left-container-expand").classList.add("no-scroll")
})
document.querySelector("#body-content").addEventListener("mouseout", ()=> {
    document.querySelector(".left-container-expand").classList.remove("no-scroll")
})

document.querySelector(".shorts-expand-button").addEventListener("click", ()=> {
    document.querySelector(".shorts-vid-hidden").style.display = "grid";
    document.querySelector(".shorts-expand-button").classList.add("sdhdbhd")
})


document.querySelector(".shorts-cancel").addEventListener("click", ()=> {
    document.querySelector(".shorts-vid").style.display = "none";
    document.querySelector(".shorts-vid-hidden").style.display = "none";
    if(document.querySelector(".shorts-expand-button").classList.contains("shorts-expand-button_large")) {
        document.querySelector(".shorts-expand-button").classList.remove("shorts-expand-button_large");
    }
    document.querySelector(".shorts-expand-button").classList.add("sdhdbhd");
    document.querySelectorAll(".shorts-logo li")[0].style.display = "none";
    document.querySelector(".shorts-cancel").style.display = "none";
    document.querySelector(".shorts-cancel-text").style.display = "inline-flex";
})

document.querySelector(".shorts-cancel-text span").addEventListener("click", ()=> {
    document.querySelector(".shorts-vid").style.display = "flex";
    document.querySelector(".shorts-expand-button").classList.remove("sdhdbhd");
    document.querySelector(".shorts-expand-button").classList.add("shorts-expand-button_large");
    document.querySelectorAll(".shorts-logo li")[0].style.display = "flex";
    document.querySelector(".shorts-cancel").style.display = "list-item";
    document.querySelector(".shorts-cancel-text").style.display = "none";
})





const videoContainers = document.querySelectorAll(".video-container");
const shortsvideoContainer = document.querySelectorAll(".shorts-vid div");

videoContainers.forEach(container => {
    const video = container.querySelector("video");
    const overlay = container.querySelector(".clock-overlay");
    const soundOverlay = container.querySelector(".mobile-subtitle-overlay")
    const currentTimeSpan = container.querySelector(".currentime")
    const dSpan = container.querySelector(".dSpan")
    const durationSpan = container.querySelector(".durationSpan");
    
        video.addEventListener("mouseover", () => {
            durationSpan.classList.add("sdhdbhd")
        overlay.classList.add("clock-overlay-active")
        video.muted = true;
        video.play();
        soundOverlay.classList.add("mobile-subtitle-overlay_active");
    });

    video.addEventListener("mouseout", () => {
        durationSpan.classList.remove("sdhdbhd")
        overlay.classList.remove("clock-overlay-active")
        video.pause();
        video.currentTime = 0;
        soundOverlay.classList.remove("mobile-subtitle-overlay_active");
    });

    
    video.addEventListener("loadedmetadata", () => {
        const duration = Math.floor(video.duration);
        const mins = Math.floor(duration / 60);
        const secs = duration % 60;

        const formatDuration = mins + ":" + (secs < 10 ? "0" : "") + secs;
        durationSpan.textContent = formatDuration;
        dSpan.textContent = formatDuration;
    });

    video.addEventListener("mouseover", ()=> {
        const progressTime = container.querySelector(".progress-time");
       video.addEventListener("timeupdate", ()=> {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const progressUpdate = (currentTime/duration) * 100;
        progressTime.style.width = `${progressUpdate}%`
        const currentime = formatTime(video.currentTime);
        currentTimeSpan.textContent = currentime;
        // console.log(currentTime);
    })
    function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
        }
    })
    
});

    shortsvideoContainer.forEach(container => {
        const video = container.querySelector("video");
       
            video.addEventListener("mouseover", ()=> {
                video.muted = true;
                video.play();
            })
            video.addEventListener("mouseout", ()=>{
                video.pause();
                video.currentTime = 0;
            })
        
    });
    




const scrollConatiner = document.querySelector(".scroll-content");
const content = document.querySelector(".top-scrollbar");
const scrolllButtons = document.querySelectorAll(".scroll-arrows");
const scrollamount = 50;

scrolllButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if (button.classList.contains('scroll-left')){
            content.scrollLeft -= scrollamount;
        } else if (button.classList.contains('scroll-right')){
            content.scrollLeft += scrollamount
            document.querySelectorAll(".top-scrollbar a")[1].style.display = "none";
            document.getElementsByClassName("scroll-left")[0].style.display = "block";
        }
        if (content.scrollLeft === 0) {
            document.querySelectorAll(".top-scrollbar a")[1].style.display = "block";
            document.querySelector(".scroll-left").classList.remove("left_hidden");
            document.querySelector(".scroll-left").classList.add("left");
        }
    });
});

content.addEventListener("scroll", ()=> {
    if (content.scrollLeft >= 1) {
    document.querySelectorAll(".top-scrollbar a")[1].style.display = "none";
    document.querySelector(".scroll-left").classList.add("left");
    document.querySelector(".scroll-content").classList.add("scroll-content_modified");
} else if (content.scrollLeft === 0) {
    document.querySelector(".scroll-content").classList.remove("scroll-content_modified");
    document.querySelectorAll(".top-scrollbar a")[1].style.display = "block";
    document.getElementsByClassName("scroll-left")[0].style.display = "none";
}
})

