//Console.log out elements in JSON file
let json = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

for (let key in json) {
  let value = json[key][0];
  console.log(value.id);
  console.log(value.name);
  console.log(value.url);
  console.log(value.author);
  let data = value.author.data;
  for (let key in data) {
    console.log(data[key].name_author);
    console.log(data[key].url);
    console.log(data[key].type);
  }
}
