async function getPhotographers() {
  const photographers = await callApi();
  return photographers.json();
}

async function displayData(photographers, media) {
  const photographersSection = document.querySelector(".photographer_section");
  // const photographerData = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModel = new PhotographerFactory(
      // Attention à l'ordre des données (ordre dans le constructeur)!
      photographer.id,
      photographer.name,
      photographer.portrait,
      photographer.city,
      photographer.country,
      photographer.price,
      photographer.tagline,
    );
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);

    const datas = media.filter((medias) => {
      return medias.photographerId === photographerModel.id;
    });
    photographerModel.setData(datas);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);
}

init();
