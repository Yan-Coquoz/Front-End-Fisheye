export class Video {
  constructor(video, id, title) {
    this.video = video;
    this.id = id;
    this.title = title;
  }
  displayVideo() {
    const assets = "../../public/assets/images/";

    const lightbox = document.querySelector("#lightbox");
    const div = document.createElement("div");
    const video = document.createElement("video");
    const source = document.createElement("source");

    div.classList.add("card_media--box-video");
    div.setAttribute("data-title", `${this.title}`);
    div.setAttribute("data-id", `${this.id}`);
    video.classList.add("card_media--vid");

    // video.classList.add = "media-item";
    if (lightbox.classList.contains("active")) {
      video.setAttribute("controls", "");
      div.removeAttribute("aria-label");
    } else {
      div.setAttribute(
        "aria-label",
        `Le contrôle de la vidéo est disponible dans la lightbox`
      );
      video.removeAttribute("controls");
    }

    video.id = this.id;

    source.setAttribute("src", `${assets}${this.video}`);
    source.setAttribute("type", `video/mp4`);

    video.appendChild(source);
    div.appendChild(video);

    return div;
  }
}
