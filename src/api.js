const API_BASE_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2508-ftb-et-web-ft";

export async function getGuests() {
  const response = await fetch(`${API_BASE_URL}/guests`);
  if (!response.ok) throw new Error("Failed to fetch guests");
  return response.json();
}

export async function getGuestById(id) {
  const response = await fetch(`${API_BASE_URL}/guests/${id}`);
  if (!response.ok) throw new Error("Failed to fetch guest details");
  return response.json();
}
