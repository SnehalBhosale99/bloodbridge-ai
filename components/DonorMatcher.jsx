import { useState } from "react";
import donors from "../data/donor";
import DonorCard from "./DonorCard";

function DonorMatcher() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedCity, setSelectedCity] = useState("Pune");
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  const [showAllDonors, setShowAllDonors] = useState(false);

  const filteredDonors = donors.filter((donor) => {
    const bloodGroupMatches =
      selectedBloodGroup === "" ||
      donor.bloodGroup === selectedBloodGroup;

    const cityMatches =
      selectedCity === "" || donor.city === selectedCity;

    const availabilityMatches =
      !onlyAvailable || donor.available === true;

    return (
      bloodGroupMatches &&
      cityMatches &&
      availabilityMatches
    );
  });

  return (
    <div className="donor-matcher">
      <div className="matcher-top">
        <div>
          <p className="section-label">DONOR DIRECTORY</p>

          <h3>Nearby Donors</h3>

          <p>
            Browse fictional donor profiles by blood group, city,
            and availability.
          </p>
        </div>

        <div className="donor-count">
          <strong>28</strong>
          <span>Demo Donors</span>
        </div>
      </div>

      <div className="matcher-form">
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>

          <select
            id="bloodGroup"
            value={selectedBloodGroup}
            onChange={(event) =>
              setSelectedBloodGroup(event.target.value)
            }
          >
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>

          <select
            id="city"
            value={selectedCity}
            onChange={(event) =>
              setSelectedCity(event.target.value)
            }
          >
            <option value="">All Cities</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <div className="availability-filter">
          <label>
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(event) =>
                setOnlyAvailable(event.target.checked)
              }
            />

            Available only
          </label>
        </div>
      </div>

      <div className="donor-result-header">
        <h3>Nearby Donor Profiles</h3>

        <span>
          {filteredDonors.length} profiles found
        </span>
      </div>

      <div className="donor-results">
        {(showAllDonors
          ? filteredDonors
          : filteredDonors.slice(0, 6)
        ).map((donor) => (
          <DonorCard
            key={donor.id}
            donor={donor}
          />
        ))}
      </div>

      {!showAllDonors && filteredDonors.length > 6 && (
        <button
          className="show-more-button"
          onClick={() => setShowAllDonors(true)}
        >
          View More Donors →
        </button>
      )}

      {showAllDonors && filteredDonors.length > 6 && (
        <button
          className="show-more-button"
          onClick={() => setShowAllDonors(false)}
        >
          Show Fewer Donors ↑
        </button>
      )}

      {filteredDonors.length === 0 && (
        <div className="no-results">
          No fictional donor profiles found.
        </div>
      )}

      <p className="demo-disclaimer">
        Demo only: these profiles are fictional. This interface does
        not confirm real donor eligibility, blood compatibility,
        location, or live availability.
      </p>
    </div>
  );
}

export default DonorMatcher;