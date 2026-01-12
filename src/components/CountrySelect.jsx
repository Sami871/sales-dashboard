import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "PK", name: "Pakistan" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
];

const CountrySelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="relative">
      {/* Selected country */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 rounded-lg"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          <ReactCountryFlag
            svg
            countryCode={selected.code}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <span className="hidden sm:block text-sm font-medium">
          {selected.name}
        </span>

        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border rounded-lg shadow-lg z-50">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-blue-300"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <ReactCountryFlag
                  svg
                  countryCode={country.code}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <span className="text-sm">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
