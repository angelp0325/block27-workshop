export default function GuestDetails({ guest, onBack }) {
  if (!guest) return null;

  return (
    <div className="guest-list-container">
      <h2>{guest.name}</h2>
      <p>
        <strong>Email:</strong> {guest.email}
      </p>
      <p>
        <strong>Phone:</strong> {guest.phone}
      </p>
      <p>
        <strong>Job:</strong> {guest.job}
      </p>
      <p>
        <strong>Bio:</strong> {guest.bio}
      </p>

      <button onClick={onBack}>← Back to List</button>
    </div>
  );
}
