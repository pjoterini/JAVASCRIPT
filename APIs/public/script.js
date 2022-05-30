if ("geolocation" in navigator) {
    console.log("available");
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      document.getElementById("lat").textContent = lat;
      const lon = position.coords.longitude;
      document.getElementById("lon").textContent = lon;

      const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0d630dd8de26df441a69b023bec8db8`
      const response = await fetch(api_url)
      const json = await response.json()
      console.log(json)

      const btn = document.querySelector("#post-btn");
      const postInput = document.querySelector("#post-input");

      btn.addEventListener("click", async () => {
        const name = postInput.value;
        const data = { lat, lon, name };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch("/api", options);
        const json = await response.json();
        console.log(json);
      });
    });
  } else {
    console.log("not available");
  }