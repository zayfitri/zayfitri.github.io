let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  // Mengambil nilai dari input negara 
  let countryName = countryInp.value;

  //URL API
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);

   // Mengambil data dari API dan tampilkan hasil
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {

      // Menampilkan data negara
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>

         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>

         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })

    // Menampilkan pesan error jika terjadi kesalahan
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>Tidak boleh kosong1!1!</h3>`;

    //gunakan english language (ex:japan, bukan jepang)
      } else {
        result.innerHTML = `<h3>Masukkan nama negara dengan valid :) </h3>`;
      }
    });
});
