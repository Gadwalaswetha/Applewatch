import React, { useState } from "react";
import "./App.css"; // Add your CSS for the entire app here

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
          alt="Apple Watch Design Studio Logo"
          className="image"
        />
      </div>
    </header>
  );
};

const FooterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: "size",
      label: "Size",
      options: ["40mm", "41mm", "44mm", "45mm", "49mm"],
    },
    {
      id: "case",
      label: "Case",
      options: ["Aluminum", "Stainless Steel", "Titanium"],
    },
    {
      id: "brand",
      label: "Brand",
      options: ["Nike", "Hermès", "Apple Watch SE", "Apple Watch Ultra"],
    },
  ];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="customization-bar">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategorySelect(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {categories.map(
        (category) =>
          selectedCategory === category.id && (
            <div key={category.id} className="options">
              {category.options.map((option) => (
                <button
                  key={option}
                  className="option-btn"
                  onClick={() =>
                    console.log(`Selected ${category.label}: ${option}`)
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          )
      )}
    </div>
  );
};

const WatchCustomization = () => {
  const [selectedBelt, setSelectedBelt] = useState("belt1");

  const belts = [
    {
      id: "belt1",
      brand: "Stainless Steel",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
    },
    {
      id: "belt2",
      brand: "Sport Loop",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a3p5RDNCTHlpSnh6eE1kSXZuUXJ6NFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
    },
    {
      id: "belt3",
      brand: "Sport Band",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bHRhN2Rod0NDaU9ITnVtNkJjSWpkSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
    },
    {
      id: "belt4",
      brand: "FineWoven",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Zms0YTN2QWltRzdYTFhmdGNUQ3Y3enVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: "belt5",
      brand: "Braided Solo Loop",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YkFzZ2NhdC8rT28wTVJIMG8zVGJhanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: "belt6",
      brand: "Nike Sport Loop",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dlkybTZ4d2drVWNXZnNmdXVuKzNlRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
    },
    {
      id: "belt7",
      brand: "Nike Sport Band",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWT3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZnVhSnVUUlIralFSbjE4REFRWEQ3VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
  ];

  return (
    <div className="watch-customization">
      <h1>Apple Watch Series 10</h1>
      <div className="watch-display">
        <div className="belt-top">
          <img
            src={belts.find((belt) => belt.id === selectedBelt)?.image || ""}
            alt="Selected Belt"
          />
        </div>
        <div className="watch-body">
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
            alt="Watch Face"
          />
        </div>
      </div>
      <h2>Customize Your Watch</h2>
      <div className="belt-options">
        {belts.map((belt) => (
          <div
            key={belt.id}
            className={`belt-option ${
              selectedBelt === belt.id ? "active" : ""
            }`}
            onClick={() => setSelectedBelt(belt.id)}
          >
            <img src={belt.image} alt={belt.brand} />
            <p className="brand-name">{belt.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <WatchCustomization />
      <FooterBar />
    </div>
  );
};

export default App;
