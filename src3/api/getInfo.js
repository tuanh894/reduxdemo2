const URL = 'http://192.168.1.10/luyenthivn/frontend/web/api/v1/subscriber/data?id='

function getProfile(id){
    return fetch(URL + id)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                item: responseJson,
            })
        })
        .then(responseJson => responseJson)
        .catch((error) => {
            console.error(error);
        });
}

export default getProfile;