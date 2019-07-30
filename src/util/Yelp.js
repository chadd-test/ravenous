const apiKey = "il9yQZslAAVYpRO2efUUlQVGj-VBcQHzXOPs2MhsVDl81l6JUUq8HkVf7yFNwNTVaNoriS8D4PCAVloyTuThfHhezVbH0bl1Q9p35cphFeadEq78q8DkqBW-VnU6XXYx";

const Yelp = {
    search(term, location, sortBy) {
    const url = `Https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
            
            return fetch(url,
                 {
                headers: {
                        'Authorization': `Bearer ${apiKey}`
                         }
                })

            .then(response => {
                    return response.json();
                              })

            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                            return {
                                 id: business.id,
                                 imageSrc: business.image_url,
                                 name: business.name,
                                 address: business.location.address1,
                                 city: business.location.city,
                                 state: business.location.state,
                                 zipCode: business.location.zip_code,
                                 category: business.categories[0].title,
                                 rating: business.rating,
                                 reviewCount: business.review_count
                            }
                    });
                }
             });
        }
}

export default Yelp;
