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

  if (guestsLoading) return <p>Loading guests...</p>;
  if (guestsError) return <p>Error: {guestsError}</p>;

  return (
    <div style={{ margin: "2rem", fontFamily: "sans-serif" }}>
      {!selectedGuestId ? (
        <GuestList
          guests={guests}
          onSelect={setSelectedGuestId}
          selectedGuestId={selectedGuestId}
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
