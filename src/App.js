import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RegionPicker from "./components/RegionPicker/RegionPicker";
import Countries from "./components/Countries/Countries";

function App() {
  const [selectedRegion, setSelectedRegion] = React.useState(null);
  const handlePickRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleClearSelectedRegion = () => {
    setSelectedRegion(null);
  };
  return (
    <div className="App">
      <Navbar
        handleClearSelectedRegion={handleClearSelectedRegion}
        selectedRegion={selectedRegion}
      />
      {selectedRegion ? (
        <Countries
          handleClearSelectedRegion={handleClearSelectedRegion}
          selectedRegion={selectedRegion}
        />
      ) : (
        <RegionPicker handlePickRegion={handlePickRegion} />
      )}
    </div>
  );
}

export default App;
