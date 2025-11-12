import { useEffect, useState } from "react";
import { getGuestById } from "../api";

export function useGuestDetails(id) {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchGuest() {
      try {
        setLoading(true);
        const data = await getGuestById(id);
        setGuest(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchGuest();
  }, [id]);

  return { guest, loading, error };
}
