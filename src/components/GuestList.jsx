import "./guestlist.css";

export default function GuestList({ guests, onSelect, selectedGuestId }) {
  return (
    <div className="guest-list-container">
      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              className={guest.id === selectedGuestId ? "selected" : ""}
              onClick={() => onSelect(guest.id)}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="note">Select a guest to view more details.</p>
    </div>
  );
}
