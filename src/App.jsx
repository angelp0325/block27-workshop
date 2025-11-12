import { useState } from "react";
import { useGuests } from "./hooks/useGuests";
import { useGuestDetails } from "./hooks/useGuestDetails";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const { guests, loading: guestsLoading, error: guestsError } = useGuests();
  const {
    guest,
    loading: guestLoading,
    error: guestError,
  } = useGuestDetails(selectedGuestId);

  const placeholderGuests = [
    { id: 1, name: "Penny Nickel", email: "penny@quarter.com" },
    { id: 2, name: "Tom Copper", email: "tom@metals.org" },
  ];

  if (guestsLoading) return <p>Loading guests...</p>;
  if (guestsError) return <p>Error: {guestsError}</p>;

  return (
    <div style={{ margin: "2rem", fontFamily: "sans-serif" }}>
      <h1>Convention Center Guests</h1>

      {!selectedGuestId ? (
        <GuestList
          guests={guests.length ? guests : placeholderGuests}
          onSelect={setSelectedGuestId}
        />
      ) : guestLoading ? (
        <p>Loading guest details...</p>
      ) : guestError ? (
        <p>Error: {guestError}</p>
      ) : (
        <GuestDetails guest={guest} onBack={() => setSelectedGuestId(null)} />
      )}
    </div>
  );
}
