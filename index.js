/*need to find an api that i can pull different discs from*/
//const url=""

$(document).ready(function()
{
    getRandomDisc();
});

function getRandomDisc()
{
    let myPromise = new Promise(function(succes,reject)
    {
        //producing code (may take some time to run)
        $.getJSON(url,function(data)
        {
            //if getJSON was successful this block will execute
            success(data);
        })
        .fail(function(error)
        {
            //if getJSON failed this block will execute
            reject(error);
        });
    })
}