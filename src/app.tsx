import React, { useEffect, useState } from "react";
import "./index.css"; // Import Tailwind styles

type Earthquake = {
  properties: {
    mag: number;
    place: string;
    time: number;
  };
  id: string;
};

const App: React.FC = () => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState<string>("2020-01-01"); // Default date

  // Fetch earthquake data for the selected date
  const fetchEarthquakeData = async (selectedDate: string) => {
    setLoading(true);
    setError(null);

    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedNextDay = nextDay.toISOString().split("T")[0];

    const apiUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${selectedDate}&endtime=${formattedNextDay}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEarthquakes(data.features || []);
    } catch (err) {
      setError("Failed to fetch earthquake data.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts or when the date changes
  useEffect(() => {
    fetchEarthquakeData(date);
  }, [date]);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Earthquake Data</h1>

      {/* Date Picker */}
      <div className="mb-4 container mx-auto">
        <label htmlFor="date" className="block text-lg font-semibold mb-2">
          Select Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Loading and Error Handling */}
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : earthquakes.length === 0 ? (
        <p className="text-center text-gray-500">No earthquake data found for this date.</p>
      ) : (
        <ul className="space-y-2 container mx-auto">
          {earthquakes.map((earthquake) => (
            <li key={earthquake.id} className="p-2 border-b border-gray-300">
              <span className="font-semibold">{earthquake.properties.place}</span> - Magnitude:{" "}
              <span className="text-red-500">{earthquake.properties.mag}</span> at{" "}
              {new Date(earthquake.properties.time).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;


