export default class RequestManager {

    async guess(word) {
        const response = await fetch('http://localhost:3000/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word
            })
        });

        return response.json();
    }

}