let apiKey = `9fWdCrkSDadbVwWK7n4bgPexyRy7dtBTpvlfzrG3`;

let url = `developer.nps.gov/api/v1`;

function getNPSData() {
  fetch(`https://${url}/parks?api_key=${apiKey}&stateCode=TX`)
    // .then((response) => {
    //   if (response.ok) {
    //     return response.json(); 
    //   }
    //   console.log(response);
    //   throw new Error(response.status);
    // });
    .then((response) => response.json())
    .then((responseJson) => loopThroughNames(responseJson))
    .catch((error) => alert(`Something went wrong: ${error.message}`));
}

function loopThroughNames(rJson) {
  console.log(rJson);
  for (let i = 0; i < rJson.data.length; i ++) {
    console.log(`Park name: ${rJson.data[i].fullName}/nDescription: ${$rJson.data[i].description}`);
  };
}

$('button').on('click', '.click-me' (event => {
  console.log('Button to test jQuery was clicked');
}));




getNPSData();