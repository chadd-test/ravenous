// const fetch = require("node-fetch");

const apiKey = "il9yQZslAAVYpRO2efUUlQVGj-VBcQHzXOPs2MhsVDl81l6JUUq8HkVf7yFNwNTVaNoriS8D4PCAVloyTuThfHhezVbH0bl1Q9p35cphFeadEq78q8DkqBW-VnU6XXYx";

async function YelpSearch(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
            
    try {
        const response = await fetch(url,
                        {
                    headers: {'Authorization': `Bearer ${apiKey}`}
                        });
        if(response.ok) {
                const jsonResponse = await response.json();
                   if (jsonResponse.business) {
                           const result = jsonResponse.businesses.map(business => {
                               return {
                                    id: business.id,
                                    imageSrc: business.image_url,
                                    name: business.name,
                                    address: business.location.address1,
                                    city: business.location.city,
                                    state: business.location.state,
                                    zipCode: business.location.zip_code,
                                    category: business.categories,
                                    rating: business.rating,
                                    reviewCount: business.review_count
                               }
                               return result; 
                           })
                    } throw 'request failed' }
            }
    catch (e) {
            console.log(e);
        } 
};

/*
const Yelp = {
    search(term, location, sortBy) {
    const url = `Https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
            
            fetch(url,
                 {
                headers: {
                        Authorization: `Bearer ${apiKey}`
                         }
                })

            .then(response => {
                    if(response.ok) {
                            return response.json();
                    }
                    throw new Error('request failed');
                    },
                    networkError => {console.log(networkError.message)})

            .then(jsonResponse => {
                if (jsonResponse.business) {
                    return jsonResponse.businesses.map(business => {
                            return {
                                 id: business.id,
                                 imageSrc: business.image_url,
                                 name: business.name,
                                 address: business.location.address1,
                                 city: business.location.city,
                                 state: business.location.state,
                                 zipCode: business.location.zip_code,
                                 category: business.categories,
                                 rating: business.rating,
                                 reviewCount: business.review_count
                            }
                    });
                }
             });
        }
}
*/

// console.log(YelpSearch('pizza', 'honolulu', 'rating')); 
