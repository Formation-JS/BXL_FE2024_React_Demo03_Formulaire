
const TempConvert = () => {



    return (
        <div>
            <h2>Conversion de temperature</h2>
            <form>
                <div>
                    <label>Temperature (°c) : </label>
                    <input type="number" />
                </div>
                <div>
                    <label>Format dest : </label>
                    <select>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                    </select>
                </div>
                <button type="submit">Convertir...</button>
            </form>
            <p>...</p>
        </div>
    );
};

export default TempConvert;