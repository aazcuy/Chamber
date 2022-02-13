

            function doInputOutput(){
                var temperature = parseInt(document.getElementById('temperature').value);
                var windSpeed = parseInt(document.getElementById('windSpeed').value);

                var result = windChill(temperature, windSpeed);

                document.getElementById('wind-chill').innerHTML = 'It will feel like: ' + (Math.round(result)) + '° ' + 'C.';

                function windChill(temperature, windSpeed){
                   let wind = 35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16);
                    return wind;
                }

            }