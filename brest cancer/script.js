document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    
    startButton.addEventListener('click', function() {

        $.ajax({
            type: "POST",
            url: "~/app.py",
            data: { param: text}
          }).done(function( o ) {
             print("executed");
          });
        // fetch('/test.py', {
        //     method: 'POST'
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.status === 'success') {
        //         alert('App executed successfully!');
        //         console.log(data.output);
        //     } else {
        //         alert('Error executing the app.');
        //         console.error(data.output);
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    });
});
