class API {

    static getRandomInt = () => {
        return Math.floor(Math.random() * 19);
    }

    static getRandomGif() {
        let num = this.getRandomInt()
        return fetch ("https://api.tenor.com/v1/search?q=pig")
        .then (resp => resp.json())
        .then(resp => resp.results[num].media[0].gif.url)
    }

}

export default API;