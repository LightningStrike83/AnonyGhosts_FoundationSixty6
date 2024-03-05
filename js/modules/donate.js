export function donateVideo() {
    const counsellorImage = document.querySelector("#counsellor-video")
    const youthImage = document.querySelector("#youth-video")
    const video = document.querySelector("#video-source")
    const videoCon = document.querySelector("#donate-video-con")

    console.log('click')

    function changeVideo() {
        if (this.id === "counsellor-video") {
            videoCon.style.display = "block"
            video.src = "video/counsellor-sample.MOV"
        } else if (this.id === "youth-video") {
            videoCon.style.display = "block"
            video.src = "video/youth-clip.mp4"
        }
    }

    counsellorImage.addEventListener("click", changeVideo)
    youthImage.addEventListener("click", changeVideo)
}