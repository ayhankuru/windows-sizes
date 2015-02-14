## İnstall

```sh
$ npm install windows-sizes
```

## Usage

```js
var size =require('windows-sizes');

size(function(err,sizes){
	if(!err) console.log(sizes); // [{ "width": "768", "height": "1366" }]

});


```

## Cmd


```sh
$ windows-sizes 
 > { "width": "768", "height": "1366" }
```
