getData();
async function getData() {
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);

  data.forEach((item) => {
    const root = document.createElement("div");
    const name = document.createElement("div");
    const date = document.createElement("div");
    const geo = document.createElement("div");
    root.id = 'container-div'

    // name.textContent = `mood: ${item.name}`;
    // name.textContent = "dsadsa";
    geo.textContent = `${item.lat}, ${item.lon}`;
    // const dateString = new Date(item.timestamp).toLocaleString();
    // date.textContent = dateString;

    root.append(name, date, geo);
    document.body.append(root);
  });
}