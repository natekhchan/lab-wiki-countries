import { Link } from "react-router-dom";
import './css/style.css'

const CountryList = ({ countries }) => {

    const getPhoto = (code) => {

        return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`
    }

    let sort = (array) => {
        return array.sort((a,b) => a.name.common.localeCompare(b.name.common))
    }

    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>


            <div className="list-group">


                {countries ? 
                    <>

                        {sort(countries).map((country) => {
                            return (
                                    <div className="list-group-item list-group-item-action" key={country.alpha3Code}>
                                        <Link to={`/${country.alpha3Code}`} className="no-text-decoration">
                                                <img src={getPhoto(country.alpha2Code)} alt='flag' />
                                                <h2>{country.name.common}</h2>
                                        </Link>
                                    </div>
                            )
                        })}

                    </>

                    : <h4>Loading...</h4>
                }

                {/* <a class="list-group-item list-group-item-action" href="/ABW"
                    >🇦🇼 Aruba</a
                >
                <a class="list-group-item list-group-item-action" href="/AFG"
                    >🇦🇫 Afghanistan</a
                >
                <a class="list-group-item list-group-item-action" href="/AGO"
                    >🇦🇴 Angola</a
                >
                <a class="list-group-item list-group-item-action" href="/AIA"
                    >🇦🇮 Anguilla</a
                >
                <a class="list-group-item list-group-item-action" href="/ALA"
                    >🇦🇽 Åland Islands</a
                >
                <a class="list-group-item list-group-item-action" href="/ALB"
                    >🇦🇱 Albania</a
                >
                <a class="list-group-item list-group-item-action" href="/AND"
                    >🇦🇩 Andorra</a
                >
                <a class="list-group-item list-group-item-action" href="/ARE"
                    >🇦🇪 United Arab Emirates</a
                >
                <a class="list-group-item list-group-item-action" href="/ARG"
                    >🇦🇷 Argentina</a
                >
                <a class="list-group-item list-group-item-action" href="/ARM"
                    >🇦🇲 Armenia</a
                >
                <a class="list-group-item list-group-item-action" href="/ASM"
                    >🇦🇸 American Samoa</a
                >
                <a class="list-group-item list-group-item-action" href="/ATA"
                    >🇦🇶 Antarctica</a
                >
                <a class="list-group-item list-group-item-action" href="/FLK"
                    >🇫🇰 Falkland Islands</a
                >
                <a
                    class="list-group-item list-group-item-action active"
                    href="/FRA"
                    >🇫🇷 France</a
                >
                <a class="list-group-item list-group-item-action" href="/ZWE"
                    >🇿🇼 Zimbabwe</a
                > */}
            </div>
        </div>
    )
}

export default CountryList