function DonorCard({ donor }) {
  return (
    <article className="donor-card">
      <div className="donor-card-top">
        <div className="blood-group">{donor.bloodGroup}</div>

        <span
          className={
            donor.available
              ? "available-badge"
              : "unavailable-badge"
          }
        >
          {donor.available ? "Available" : "Unavailable"}
        </span>
      </div>

      <h3>{donor.name}</h3>

      <p>
        <strong>City:</strong> {donor.city}
      </p>

      <p>
        <strong>Area:</strong> {donor.area}
      </p>

      <p className="donor-note">
        Fictional demo profile
      </p>
    </article>
  );
}

export default DonorCard;