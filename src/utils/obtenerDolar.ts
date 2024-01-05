export async function obtenerDolar() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    method: "GET",
    cache: "no-store",
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Error al obtener la API");
  }
}
