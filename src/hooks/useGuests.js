import { useEffect, useState } from "react";
import { getGuests } from "../api";

export function useGuests() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGuests() {
      try {
        setLoading(true);
        const data = await getGuests();
        setGuests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  return { guests, loading, error };
}
