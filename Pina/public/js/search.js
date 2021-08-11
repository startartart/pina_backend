window.onload = () => {
    console.log('hello search');
    var search_form = document.getElementById("search_form");
    search_form.addEventListener("submit", async (evt) => {

        var search_word = document.getElementById("word").value;
        var word = {
            id: search_word,
            search_result: search_word
        };
        await axios.post('/search', word);
    }); 
};