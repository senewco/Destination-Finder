import {prisma} from '../generated/prisma-client'
import {locations as locationJsons} from './locations.json'

// map over locationsjson to get an array of countries
const countriesWithDuplicates = locationJsons.map(locationJson => locationJson.countryN);
// convert the array to a set to remove unique values
// convert the set back to an array
const countriesWithoutDuplicates = [...new Set(countriesWithDuplicates)]

// loop over the array
const countries = countriesWithoutDuplicates.map(country => {
    return {
        name: country,
        // use filter to get landmarks by country
        landmarks: locationJsons
            .filter((locationJson) => locationJson.countryN === country)
            .map(locationJson => {
                return {
                    name: locationJson.locationN,
                    city_name: locationJson.cityN
                }
            })
    }
})

const uploadData = async () => {
    console.log('hi')
    for(const c of countries) {
        const GQLCountry = await prisma.createCountry({
            name: c.name,
        })
        for(const land of c.landmarks) {
            const GQLlmarks = await prisma.createLandmark({
                name: land.name,
                city_name: land.city_name,
                rating: 4,
                country: {
                    connect: {
                        id: GQLCountry.id
                    }
                }
            })
        }
    }
}

uploadData()
// return the location with landmarks
// console.log(JSON.stringify(countries, null, 2))