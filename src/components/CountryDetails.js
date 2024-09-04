import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/style.css';

const CountryDetails = ({ countries }) => {
    const [thisCountry, setThisCountry] = useState(null);
    const { countryId } = useParams();

    const findCountry = (code) => {
        return countries.find((country) => country.alpha3Code === code);
    };

    const getPhoto = (code) => {
        return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;
    };

    useEffect(() => {
        setThisCountry(findCountry(countryId));
    }, [countryId]);

    return (
        <div className="col-7">
            {thisCountry ? (
                <>
                    <img src={getPhoto(thisCountry.alpha2Code.toLowerCase())} alt="country" />
                    <h1>{thisCountry.name.common}</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{thisCountry.capital[0]}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {thisCountry.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    {thisCountry.borders.length ? (
                                        <ul className="border-list">
                                            {thisCountry.borders.map((border) => (
                                                <li key={border} className="border-item">
                                                    <Link className="border-link" to={`/${border}`}>
                                                        {findCountry(border).name.common}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <h4>There are no bordering countries</h4>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : (
                <h4>Loading...</h4>
            )}
        </div>
    );
};

export default CountryDetails;
