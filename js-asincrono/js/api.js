const options = {
    headers: {
        'x-api-key': 'live_lkaQuf8y7NTDXB5FCxfRuJRkUQm4WDSFUytLAnrjpWDVJ42EKx21NtwDrXHTQw8O'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    const details = "https://api.thecapi.com/v1/images/{id}";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

export async function getDetails(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    const details = "https://api.thecapi.com/v1/images/{id}";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}