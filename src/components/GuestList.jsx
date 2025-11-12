export default function GuestList({ guests, onSelect }) {
  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li
            key={guest.id}
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => onSelect(guest.id)}
          >
            <strong>{guest.name}</strong> — {guest.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
