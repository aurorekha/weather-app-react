import axios from "axios";

export async function handleGeoLocationSearch(event, updateGeolocation, setWeatherData, setError, value) {
    event && event.preventDefault()
    const LOCATIONIQ_ACCESS_TOKEN = "pk.293e9914e79907cf104752752cf30ab3";
    const url = `https://eu1.locationiq.com/v1/search.php?key=${LOCATIONIQ_ACCESS_TOKEN}&q=${value}&format=json`;
    try {
        const response = await axios
            .get(url);
        updateGeolocation(response.data);
        setWeatherData([]);
        setError("");
    } catch (error) {
        if (error.response.status === 404) {
            setError("No results found with that value");
        } else {
            setError("Please fill the input");
        }
        updateGeolocation([]);
    }
};

export async function handleWeatherSearch(event, lat, lon, setError, setWeatherData, updateGeolocation) {
    event && event.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_API_KEY_TWO}`;

    const res = await axios
        .get(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        });
    try {
        const firstSevenDays = res.data.daily.splice(0, 7);
        setWeatherData(firstSevenDays);
        setError("");
        updateGeolocation([]);
    } catch {
        if (res.status !== 200) {
            setError(res.data.message);
            setWeatherData([]);
            updateGeolocation([]);
        }
    }

};