import gql from 'graphql-tag';

export const AllCountryNames = gql`
    query AllCountryNames {
            countries {
            name
        }
    }
`;

export const AllLandmarkNames = gql`
    query AllLandmarkNames {
        landmarks {
            name
            city_name
        }
    }
`;

export const LookupLInCountry = gql`
    query LookupLInCountry($name: String!) {
        countries(where: {
            name_contains: $name
        }) {
            name
            landmarks {
                name
                city_name
            }
        }
    }
`;