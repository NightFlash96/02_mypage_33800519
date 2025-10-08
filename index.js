var http = require("http");
const port = 8000;

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    background-color: #f8f9fa;
                    color: #333;
                }
                h1 {
                    color: #004080;
                }
                h2 {
                    color: #0066cc;
                }
                p {
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <h1>Maksymilian Zarzycki</h1>
            <h2>Computer Science (Cybersecurity) Student at Goldsmiths University</h2>
            <p>I’m Maks, a third-year computer science student passionate about cybersecurity and software development.
               I enjoy building creative projects and learning new technologies. I want to be able to use my knowledge and skills to work on something really special.</p>
            <p>In my free time, I research and learn about interesting topics in tech, and I contribute to the Hacksmiths Tech Society at Goldsmiths. My hobbies also include: bouldering, volleyball, playing in a band and classic cars.</p>
        </body>
        </html>
    `;
    
    response.end(htmlContent);
}).listen(port, function() {
    console.log(`Server is running on port ${port}...`);
});
