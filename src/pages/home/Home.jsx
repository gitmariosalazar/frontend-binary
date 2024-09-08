import "./Home.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import InputLabel from "../../components/inputs/InputLabel";
import { menuicons } from "../../assets/assets";
import { PlayArrow } from "@mui/icons-material";
import { useState } from "react";
import "../../components/select/SelectOptions.css";

const Home = () => {
  const { binaryConverted, convertNumber } = useAuth();

  const [number, setNumber] = useState("");

  const handleChangeNumber = async (e) => {
    setNumber(e.target.value);
  };

  const data = {
    number: number,
  };

  const handleConvert = async (from, number) => {
    try {
      await convertNumber(from, number);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const [selectedItem, setSelectedItem] = useState("decimal");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <>
      <div className="home" id="home">
        <div className="home-box">
          <div className="search-box">
            <div className="input-number-a">
              <div className="selected">
                <label htmlFor="item-select" className="input-label">
                  Select the convert option
                </label>
                <select
                  id="item-select"
                  value={selectedItem}
                  onChange={handleChange}
                  className="select input-field-d"
                >
                  <option value="decimal">Decimal to Others</option>
                  <option value="binary">Binary to Others</option>
                  <option value="octal">Octal to Others</option>
                  <option value="hexadecimal">Hexadecimal to Others</option>
                </select>
              </div>
            </div>
            <InputLabel
              label={`Enter the ${selectedItem} number`}
              placeholder={`Type the ${selectedItem} number`}
              onChange={handleChangeNumber}
            />
            <div className="search-btn">
              <button
                className="btn-search"
                onClick={() => {
                  handleConvert(selectedItem, data.number);
                }}
              >
                <PlayArrow />
                Convert
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-result">
        {binaryConverted ? (
          <>
            <div className="view-result">
              <div className="result">
                <span>Decimal Number:</span>
                <p>{binaryConverted.decimal}</p>
              </div>{" "}
              <div className="result">
                <span>Binary Number:</span>
                <p>{binaryConverted.binary}</p>
              </div>{" "}
              <div className="result">
                <span>Octal Number:</span>
                <p>{binaryConverted.octal}</p>
              </div>{" "}
              <div className="result">
                <span>Hexadecimal Number:</span>
                <p>{binaryConverted.hexadecimal}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="view-result">
              <div className="result">
                <span>Decimal Number:</span>
                <p>None</p>
              </div>{" "}
              <div className="result">
                <span>Binary Number:</span>
                <p>None</p>
              </div>{" "}
              <div className="result">
                <span>Octal Number:</span>
                <p>None</p>
              </div>{" "}
              <div className="result">
                <span>Hexadecimal Number:</span>
                <p>None</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
