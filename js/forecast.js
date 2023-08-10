//=====>> we can use the api that is given in this file<<==========|
const KEY = "ff8ac3f3b41140d8dcfdcd2a02e05aca";

const getData = async (city) => {
  const base = `https://api.openweathermap.org/data/2.5/weather`;
  const query = `?q=${city}&units=metric&appid=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();

  return data;
};
